import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {

    const [users,setUsers]=useState([])

    const {stdId}=useParams()

    useEffect(()=> {
      loadUsers();
       console.log("code with jabir Siddiq..")
    
      },[]);// []empty array - dont give empty array it will run unlimited time ,if we give [] it will run once


//async - for print in next line
    const loadUsers=async()=>{
        const result= await axios.get("http://localhost:9092/api/listStudents")
        setUsers(result.data);
    
    };   

      const deleteUser =async (stdId) => {
        await axios.delete(`http://localhost:9092/api/deleteStudents/${stdId}`)
        loadUsers()
      }


  return (
    <div className='container'>
        <div className='py-4'>

        <table className="table  table-hover table-light table-bordered border-dark">
  <thead  class="table-dark">
    <tr>
    <th scope="col">AdmissionNumber</th>
      <th scope="col">Student Id</th>
      <th scope="col">Student Name</th>
      
      <th scope="col">Date Of Birth</th>
      <th scope="col">Class Name</th>
      <th scope="col">Division</th>
      <th scope="col">Gender</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
        {
        users.map((user,AdmissionNumber)=>(

          <tr>
            { <th scope="row" key={AdmissionNumber}>{"R-01"+AdmissionNumber}</th> }
            <td>{user.stdId}</td>
            <td>{user.stdName}</td>
            {/* <td>{user.admissionNumber}</td> */}
            <td>{user.dateOfBirth}</td>
            <td>{user.className}</td>
            <td>{user.division}</td>
            <td>{user.gender}</td>
            <td>
              
              <Link className="btn btn-outline-warning mx-2"
            to={`/edituser/${user.stdId}`}

              >Edit
              </Link>
              <button className="btn btn-danger mx-2"
                onClick={()=>deleteUser(user.stdId)}
              >
                Delete</button>
            
                
            </td>
          </tr>

        ))
            
        }

    
    
  </tbody>
</table>

        </div>
    </div>
  )
}
