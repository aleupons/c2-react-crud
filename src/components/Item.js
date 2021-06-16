import { PropTypes } from "prop-types";

export const Item = (props) => {
  const {
    item: { nom, utilitat },
  } = props;
  return (
    <ul>
      <li>{nom}</li>
      <li>Utilitat: {utilitat}</li>
    </ul>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nom: PropTypes.string.isRequired,
    utilitat: PropTypes.string.isRequired,
  }).isRequired,
};
