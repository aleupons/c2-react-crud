import { PropTypes } from "prop-types";
import { useState } from "react";

export const Formulari = (props) => {
  const { items, setItems, visible, item, setVisible, setEditar } = props;
  const itemInicial = () => ({
    nom: item ? item.nom : "",
    utilitat: item ? item.utilitat : "",
  });
  const [newItem, setNewItem] = useState(itemInicial);
  const afegirItem = (e) => {
    e.preventDefault();
    setItems([...items, { ...newItem, id: items.length + 1 }]);
    setNewItem(itemInicial());
    setVisible(!visible);
  };
  const modificarItem = (e) => {
    e.preventDefault();
    const id = item.id;
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...newItem, id: item.id };
        }
        return item;
      })
    );
    setNewItem(itemInicial());
    setEditar(false);
  };
  return (
    <form onSubmit={item ? modificarItem : afegirItem} hidden={!visible}>
      <div className="form-group">
        <label htmlFor="nom">Estri:</label>
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
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nom: PropTypes.string.isRequired,
    utilitat: PropTypes.string.isRequired,
  }),
  setVisible: PropTypes.func,
  setEditar: PropTypes.func,
};
