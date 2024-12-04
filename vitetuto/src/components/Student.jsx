import { Fragment } from "react";
import {PropTypes} from 'prop-types';

export const Student = (props) => {
  return (
    <Fragment >
      <div className="student">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{props.name}</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>{props.age}</td>
          </tr>
          <tr>
            <th>Martial Status</th>
            <td>{props.status}</td>
          </tr>
        </tbody>
      </table>
      </div>
    </Fragment>
  );
};
// data value schema
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  status: PropTypes.string,
}

// default value to be displayed
Student.defaultProps = {
  name: "empty data",
  age: "empty data",
  status: "empty data",
}