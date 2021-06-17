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
    <div className="row justify-content-center">
      <div className="col-12 px-5">
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
              <div className="d-flex justify-content-between">
                <button
                  className="btn btn-secondary"
                  onClick={() => setEditar(!editar)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => esborrarItem(id)}
                >
                  X
                </button>
              </div>
            </li>
          </ul>
        )}
      </div>
    </div>
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
