import { Link } from "react-router-dom";

function Table(){
    return(
    <>
    <h3>
        <Link to="/Login">ADD</Link>
      </h3>
        <div className="container">
          <table border="2">
          <tbody>
            <tr>
                <td >Name</td>
                <td >Email</td>
                <td>Age</td>
                <td>Action</td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </>
    )
}
export default Table;