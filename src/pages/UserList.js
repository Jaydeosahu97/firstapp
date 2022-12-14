import { useEffect, useState } from "react"
import { Table } from "react-bootstrap";

export default function UserList() {

    const [users,setUsers] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8080/employees')
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            setUsers(data)
        }).catch((err)=>{
            console.log('inside catch block '+err.message);
        });
    },[]);

    return (
        <div className="container">
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Username</th>
          <th>id</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user,i) => {
          if (i!==0) 
            return <tr key={user.id}>
                <td>{i}</td>
                <td>{user.username}</td>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
            </tr>
          else 
            return <></>          
        }
        )}
      </tbody>
    </Table>
        </div>
    )
}