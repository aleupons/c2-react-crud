import { Item } from "./Item";
import { PropTypes } from "prop-types";

export const Llista = (props) => {
  const { items, setItems, visible } = props;
  return (
    <>
      <h2>Llista d'objectes necessaris per anar a la manifa</h2>
      <ul>
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
    </>
  );
};

Llista.propTypes = {
  items: PropTypes.array.isRequired,
  setItems: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};
