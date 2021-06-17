import { Item } from "./Item";
import { PropTypes } from "prop-types";

export const Llista = (props) => {
  const { items, setItems, visible } = props;
  return (
    <div className="row">
      <h2 className="titol col-12">
        Llista d'objectes necessaris per anar a la manifa
      </h2>
      <ul className="col flex-column">
        {items
          .map((item) => (
            <Item
              key={item.id}
              item={item}
              items={items}
              setItems={setItems}
              visible={visible}
            />
          ))
          .reverse()}
      </ul>
    </div>
  );
};

Llista.propTypes = {
  items: PropTypes.array.isRequired,
  setItems: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};
