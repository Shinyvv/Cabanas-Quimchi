import { Comment } from "@/types/comment"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Este componente se encarga de mostrar un único comentario.
// Recibe el objeto de comentario como una propiedad.
export function CommentCard({ comment }: { comment: Comment }) {
  return (
    <Card className="bg-white border-parchment-500">
      <CardHeader>
        <CardTitle className="text-lg text-umber-700">{comment.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-umber-600">{comment.comment}</p>
        {comment.createdAt && (
          <p className="text-xs text-gray-500 mt-2">
            {/* La fecha se convierte a un formato legible.*/}
            {new Date(comment.createdAt.seconds * 1000).toLocaleDateString()}
          </p>
        )}
      </CardContent>
    </Card>
  )
}
