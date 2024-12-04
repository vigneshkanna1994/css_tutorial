import PropTypes from "prop-types"

PropTypes
export const ChildrenComponents = (parametters) => {
  return (
    <div>
        {parametters.children}
    </div>
  )
}

ChildrenComponents.propTypes= {
    children: PropTypes.array,
}