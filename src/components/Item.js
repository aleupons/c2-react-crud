import { PropTypes } from "prop-types";

export const Item = (props) => {
  const {
    item: { nom, utilitat },
  } = props;
  return (
    <ul className="list-unstyled ">
      <li className="d-flex flex-column">
        <span className="nom">{nom}</span>
        <span className="utilitat">Utilitat: {utilitat}</span>
      </li>
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
