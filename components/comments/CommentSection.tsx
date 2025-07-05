'use client'

import { useState, useEffect } from "react"
import { db } from "@/lib/firebase"
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"
import { Comment } from "@/types/comment"
import { CommentCard } from "./CommentCard"
import { CommentForm } from "./CommentForm"

// Este es el componente principal de la sección de comentarios.
// Es un componente de cliente porque obtiene datos de Firestore en tiempo real.
export function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([])
  const [loading, setLoading] = useState(true)

  // Este efecto se ejecuta una vez cuando el componente se monta.
  // Configura un 'oyente' en tiempo real para la colección de comentarios.
  useEffect(() => {
    const q = query(collection(db, "comments"), orderBy("createdAt", "desc"))

    // 'onSnapshot' es la función que escucha los cambios.
    // Cada vez que se agrega, modifica o elimina un comentario, esta función se ejecuta.
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const commentsData: Comment[] = []
      querySnapshot.forEach((doc) => {
        // Mapeamos los datos del documento al tipo 'Comment'.
        commentsData.push({ id: doc.id, ...doc.data() } as Comment)
      })
      setComments(commentsData)
      setLoading(false)
    })

    // Es importante desuscribirse del oyente cuando el componente se desmonta
    // para evitar fugas de memoria.
    return () => unsubscribe()
  }, [])

  return (
    <section className="py-16 bg-parchment-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-umber-700 mb-8 text-center">
          Lo que dicen nuestros visitantes
        </h2>

        <div className="mb-12">
          <CommentForm />
        </div>

        {loading ? (
          <p className="text-center">Cargando comentarios...</p>
        ) : (
          <div className="space-y-6">
            {comments.length > 0 ? (
              comments.map((comment) => (
                <CommentCard key={comment.id} comment={comment} />
              ))
            ) : (
              <p className="text-center text-umber-600">Sé el primero en dejar un comentario.</p>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
