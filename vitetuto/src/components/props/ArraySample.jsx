import PropTypes from "prop-types";

PropTypes;
export const ArraySample = (args) => {
  const { items } = args;
  return (
    <div>
      <h2>array item list</h2>
      <ol>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ol>
    </div>
  );
};

ArraySample.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired, 
    })
  ),
};
