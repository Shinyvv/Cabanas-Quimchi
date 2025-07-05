'use client'

import { useState } from "react"
import { db } from "@/lib/firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

// Este es el formulario para que los usuarios dejen sus comentarios.
// Es un componente de cliente ('use client') porque interactúa con el usuario.
export function CommentForm() {
  const [name, setName] = useState("")
  const [comment, setComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  // Esta función se ejecuta cuando el usuario envía el formulario.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !comment.trim()) {
      toast({
        title: "Error",
        description: "Por favor, completa todos los campos.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)
    try {
      // Aquí es donde agregamos el comentario a la base de datos de Firestore.
      // 'collection(db, "comments")' obtiene una referencia a la colección 'comments'.
      // 'addDoc' agrega un nuevo documento con los datos proporcionados.
      await addDoc(collection(db, "comments"), {
        name: name,
        comment: comment,
        createdAt: serverTimestamp(), // Usamos la hora del servidor para la marca de tiempo.
      })
      setName("")
      setComment("")
      toast({
        title: "¡Comentario publicado!",
        description: "Muchas gracias por tu comentario.",
        className: "bg-parchment-50 border-umber-500",
      })
    } catch (error) {
      console.error("Error al agregar el comentario: ", error)
      toast({
        title: "Error",
        description: "No se pudo enviar tu comentario. Inténtalo de nuevo.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="Tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={isSubmitting}
        className="bg-white border-umber-300 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      <Textarea
        placeholder="Escribe tu comentario aquí..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        disabled={isSubmitting}
        className="bg-white border-umber-300 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      <Button type="submit" disabled={isSubmitting} className="bg-umber-700 hover:bg-umber-800 text-white">
        {isSubmitting ? "Enviando..." : "Enviar Comentario"}
      </Button>
    </form>
  )
}
