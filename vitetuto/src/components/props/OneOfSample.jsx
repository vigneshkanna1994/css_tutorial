import PropTypes from "prop-types";

PropTypes
export const OneOfSample = (args) => {
  const { color } = args;
  return (
    <div>
      <h3 style={{ color: color }}>this text color is {color}</h3>
    </div>
  );
};

OneOfSample.propTypes= {
    color: PropTypes.oneOf (['black', 'yellow', 'green']).isRequired

}
