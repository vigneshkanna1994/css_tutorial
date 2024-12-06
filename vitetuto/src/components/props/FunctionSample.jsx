import PropTypes from "prop-types";

PropTypes

export const FunctionSample = (props) => {
    const {handleClick}= props;
  return (
    <div>
      <button onClick={handleClick}>click here</button>
    </div>
  )
}

FunctionSample.propTypes = {
    handleClick: PropTypes.func
}