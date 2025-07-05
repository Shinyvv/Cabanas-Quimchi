export interface Comment {
  id: string;
  name: string;
  comment: string;
  createdAt: any; // O usa FieldValue de Firestore
}
