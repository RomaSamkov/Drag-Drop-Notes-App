import { fakeData as notes } from "../assets/fakeData";
import NoteCard from "../components/NoteCard";

const NotesPage = () => {
  return (
    <div id="app">
      {notes.map((note) => (
        <NoteCard key={note.$id} note={note} />
      ))}
    </div>
  );
};

export default NotesPage;
