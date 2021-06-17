import { useState } from "react";
import { Formulari } from "./components/Formulari";
import { Llista } from "./components/Llista";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      nom: "Lliri",
      utilitat: "Cap",
    },
    { id: 2, nom: "Passamuntanyes", utilitat: "Evitar identificacions" },
    { id: 3, nom: "Casc", utilitat: "No perdre ulls" },
    {
      id: 4,
      nom: "Xibeca",
      utilitat: "Debilitar policies i estómacs",
    },
    { id: 5, nom: "Còctel molotov", utilitat: "Cremar contenidors" },
  ]);
  const [visible, setVisible] = useState(false);
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <h1 className="col text-center">Kit d'autodefensa</h1>
        </div>
        <div className="row justify-content-end">
          <button
            className="afegir col-3 btn btn-primary"
            onClick={() => setVisible(!visible)}
          >
            Afegir ítem
          </button>
        </div>
        <Formulari
          items={items}
          setItems={setItems}
          visible={visible}
          setVisible={setVisible}
        />
        <Llista items={items} setItems={setItems} visible={visible} />
      </div>
    </div>
  );
}

export default App;
