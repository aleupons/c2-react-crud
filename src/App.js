import { useState } from "react";
import { Formulari } from "./components/Formulari";
import { Llista } from "./components/Llista";

function App() {
  const [items, setItems] = useState([
    { id: 1, nom: "Còctel molotov", utilitat: "Cremar contenidors" },
    { id: 2, nom: "Passamuntanyes", utilitat: "Evitar identificacions" },
    { id: 3, nom: "Casc", utilitat: "No perdre ulls" },
    {
      id: 4,
      nom: "Xibeca",
      utilitat: "Debilitar policies i estómacs",
    },
  ]);
  return (
    <>
      <h1>Kit d'autodefensa</h1>
      <Formulari />
      <Llista />
    </>
  );
}

export default App;
