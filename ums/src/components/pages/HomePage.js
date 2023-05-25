import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import {Table} from 'react-bootstrap';

// function HomePage() {
//   return (
//   )
// }

 const HomePage = ()=>{
//creating a user array and default setter methods and by default the array is empty
    const [users, setUsers] =useState([]);
    //call on load of the componene only once because dependency array is empty
    useEffect(()=>{
        //getAllUsers();
        getAllUsersWithAwait();
    },[]);

    const getAllUsersWithAwait = async () =>{
        const result = await axios.get("http://localhost:5000/users");
        console.log(result);
        setUsers(result.data);
        console.log("after axios call");
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
                                    <Link to='' className="btn btn-info me-2" >View</Link>
                                    <Link to='' className="btn btn-outline-info me-2">Edit</Link>
                                    <Link to='' className="btn btn-danger">Delete</Link>
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

     )
 }

export default HomePage;
