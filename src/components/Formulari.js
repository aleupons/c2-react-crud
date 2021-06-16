import { PropTypes } from "prop-types";
import { useState } from "react";

export const Formulari = (props) => {
  const { items, setItems, visible } = props;
  const [newItem, setNewItem] = useState({
    id: items.length,
    nom: "",
    utilitat: "",
  });
  const afegirItem = (e) => {
    e.preventDefault();
    setItems([...items, newItem]);
  };
  return (
    <form onSubmit={afegirItem} hidden={visible}>
      <div className="form-group">
        <label htmlFor="nom">Nom de l'ítem:</label>
        <input
          className="form-control"
          type="text"
          id="nom"
          value={newItem.nom}
          onChange={(e) => setNewItem({ ...newItem, nom: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="utilitat">Utilitat:</label>
        <input
          className="form-control"
          type="text"
          id="utilitat"
          value={newItem.utilitat}
          onChange={(e) => setNewItem({ ...newItem, utilitat: e.target.value })}
        />
      </div>
      <button type="submit" className="btn btn-success">
        Acceptar
      </button>
    </form>
  );
};

Formulari.propTypes = {
  items: PropTypes.array.isRequired,
  setItems: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};
