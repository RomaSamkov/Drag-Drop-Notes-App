// import { fakeData as notes } from "../assets/fakeData";
// import { databases } from "../appwrite/config";
import { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";
import { db } from "../appwrite/databases";

const NotesPage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const response = await db.notes.list();
    // const response = await databases.listDocuments(
    //   import.meta.env.VITE_DATABASE_ID,
    //   import.meta.env.VITE_COLLECTION_NOTES_ID
    // );

    setNotes(response.documents);
  };
  return (
    <div id="app">
      {notes.map((note) => (
        <NoteCard key={note.$id} note={note} setNotes={setNotes} />
      ))}
    </div>
  );
};

export default NotesPage;
