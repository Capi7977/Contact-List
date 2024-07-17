import { useState } from "react";
import ContactList from "./Components/Contact-List/ContactList";
import SingleContact from "./Components/SingleContact/SingleContact";

import "./App.css";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  return (
    <>
      {selectedContactId ? (
        <SingleContact
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}

export default App;
