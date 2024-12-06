import PropTypes from "prop-types";

export const ArraySample2 = (props) => {
  const { array1 } = props;
  return (
    <div>
      <h2>Array lists are</h2>
      <ul style={{backgroundColor:"darkgreen", color:"yellowgreen", fontWeight:"bold"}}>
        {array1.map((item) => (
          <li key={item.id}>{item.dobName}</li>
        ))}
      </ul>
    </div>
  );
};

ArraySample2.propTypes = {
  array1: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      dobName: PropTypes.string.isRequired,
    })
  ),
};
