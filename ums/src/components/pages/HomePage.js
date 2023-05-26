import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import {Table, Button, Spinner} from 'react-bootstrap';

// function HomePage() {
//   return (
//   )
// }

 const HomePage = ()=>{
//creating a user array and default setter methods and by default the array is empty
    const [users, setUsers] =useState([]);
    const [loading, setLoading] = useState(true);
    //call on load of the componene only once because dependency array is empty
    useEffect(()=>{
        //getAllUsers();
        getAllUsersWithAwait();
    },[]);

    const getAllUsersWithAwait = async () =>{
        const result = await axios.get("http://localhost:5000/users");
        console.log(result);
        setUsers(result.data.reverse());
        setLoading(false);
        console.log("after axios call");
    }
    const deleteUser = async (userId) => {
        await axios.delete(`http://localhost:5000/users/${userId}`);
        getAllUsersWithAwait();

    }
    const getAllUsers = () => {
        axios.get("http://localhost:5000/users")
        .then(function(response){
            console.log(response.data);
            setUsers(response.data);
        })//do something if data is fetched from api successfully
        .catch(function(error){
            console.log(error)
        });//do something if the data is not fetched

        console.log("after axios api call")
    }


     return(
         <div className='container'>
            {loading ? <Spinner animation='grow'></Spinner> :
            <div> 
            <h2 className="py-3">User management System</h2>
            <Table striped bordered hover >
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <Link to={`/users/view/${user.id}`} className="btn btn-info me-2" >View</Link>
                                    <Link to={`/users/edit/${user.id}`} className="btn btn-outline-info me-2">Edit</Link>
                                    <Button variant="danger" onClick={ () => deleteUser(user.id)} >Delete</Button>
                                </td>
                            </tr>
                        ))
                        /*
                    users.map((user, index)=>{                           
                        return <tr>
                            <td>{index+1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                        </tr>
                })
                        */
                    }


                </tbody>
            </Table>
            </div>
            }
         </div>

     )
 }

export default HomePage;
