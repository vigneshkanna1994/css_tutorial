import PropTypes from "prop-types"

PropTypes

export const Student = (arg) => {
  return (
    <div>
        <p>{arg.name}</p>
        <p>{arg.age}</p>
        <p>{arg.dob}</p>
        <p>{arg.married? 'Yes': 'No'}</p>
        <p>{arg.favClr}</p>
    </div>
  )
}

Student.prototype= {
    name: PropTypes.string,
    arg: PropTypes.number,
    dob: PropTypes.string,
    married: PropTypes.bool,
    favClr: PropTypes.array,
}

Student.defaultProps= {
    name: 'No name',
    age: 'no age',
    dob: 'no dob',
    married: false,

}