import { Item } from "./Item";
import { PropTypes } from "prop-types";

export const Llista = (props) => {
  const { items } = props;
  return (
    <>
      <h2>Llista d'objectes necessaris</h2>
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
};

Llista.propTypes = {
  items: PropTypes.array.isRequired,
};
