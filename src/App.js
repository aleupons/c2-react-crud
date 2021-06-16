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
  const [visible, setVisible] = useState(false);
  return (
    <div className="container-fluid">
      <h1>Kit d'autodefensa</h1>
      <button className="btn btn-primary" onClick={() => setVisible(!visible)}>
        Afegir ítem
      </button>
      <Formulari
        items={items}
        setItems={setItems}
        visible={visible}
        setVisible={setVisible}
      />
      <Llista items={items} setItems={setItems} visible={visible} />
    </div>
  );
}

export default App;
