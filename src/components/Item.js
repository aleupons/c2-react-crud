import { PropTypes } from "prop-types";
import { useState } from "react";
import { Formulari } from "./Formulari";

export const Item = (props) => {
  const {
    item: { id, nom, utilitat },
    item,
    items,
    setItems,
    visible,
  } = props;
  const [editar, setEditar] = useState(false);
  const esborrarItem = (id) => {
    setItems(
      items.filter((item) => {
        if (item.id !== id) {
          return item;
        }
      })
    );
  };
  return (
    <>
      {editar ? (
        <Formulari
          items={items}
          setItems={setItems}
          visible={!visible}
          item={item}
          setEditar={setEditar}
        />
      ) : (
        <ul className="list-unstyled ">
          <li className="d-flex flex-column">
            <span className="nom">{nom}</span>
            <span className="utilitat">Utilitat: {utilitat}</span>
          </li>
        </ul>
      )}

      <button onClick={() => setEditar(!editar)}>Editar</button>
      <button onClick={() => esborrarItem(id)}>X</button>
    </>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nom: PropTypes.string.isRequired,
    utilitat: PropTypes.string.isRequired,
  }).isRequired,
  items: PropTypes.array.isRequired,
  setItems: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};
