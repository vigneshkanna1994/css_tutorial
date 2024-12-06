import PropTypes from "prop-types"

export const Childrencompcss = (props) => {
  return (
    <div>{props.children}</div>
  )
}

Childrencompcss.propTypes = {
    children: PropTypes.array
}