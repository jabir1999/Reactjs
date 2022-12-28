import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';


export default function EditUser() {

    let navigate=useNavigate()

    const {stdId}=useParams()

                const[user,setUser]=useState({
                    stdName:"",
                    // admissionNumber:"",
                    dateOfBirth:"",
                    className:"",
                    division:"",
                    gender:""
                });

                const{stdName,dateOfBirth,className,division,gender}=user;
                
                const onInputChange=(e)=>{
                setUser({...user,[e.target.name]: e.target.value});

                };

                useEffect(()=>{
                    loadUser(); 
                }, []);

               const onSubmit=async(e)=>{
                    e.preventDefault();
                    await axios.put(`http://localhost:9092/api/students/${stdId}`,user)
                    navigate("/")
               };

             const loadUser =  async () => {
                const result=await axios.get(`http://localhost:9092/api/students/${stdId}`)
                setUser(result.data)
             };
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">

              <div className='set'>
               <h2 className="text-center m-4">Edit Student</h2> 
                
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="stdName" className="form-label">
                        Student Name
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter Student Name"
                    name="stdName"
                    value={stdName}
                    onChange={(e)=>onInputChange(e)}
                    required pattern="[a-zA-Z][A-Za-z\\s]{2,30}"
                    /> 
                        
                </div>
           


                {/* <div className="mb-3">
                    <label htmlFor="admissionNumber" className="form-label">
                    Admission Number
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter Admission Number"
                    name="admissionNumber"
                    value={admissionNumber}
                    onChange={(e)=>onInputChange(e)}
                    required pattern="[a-zA-Z][A-Za-z\\s]{2,30}"
                    />
                    
                    
                </div> */}
           
                <div className="mb-3">
                    <label htmlFor="dateOfBirth" className="form-label">
                    Date Of Birth
                    </label>
                    <input
                    type={"date"}
                    className="form-control"
                    placeholder="Enter Date Of Birth"
                    name="dateOfBirth"
                    value={dateOfBirth}
                    onChange={(e)=>onInputChange(e)}
                    min="2000-01-01" max="2025-12-31" required
                    />
                    
                    
                </div>
           
                <div className="mb-3">
                <label>Class Name</label>
                <select name="className" 
                value={className}
                onChange={(e)=>onInputChange(e)}
                required pattern="[a-zA-Z][A-Za-z\\s]{2,30}">
                        <option value="I">I</option>
                        <option value="II">II</option>
                        <option value="III">III</option>
                        <option value="IV">IV</option>
                        <option value="V">V</option>
                        <option value="VI">VI</option>
                        <option value="VII">VII</option>
                        <option value="VIII">VIII</option>
                        <option value="IX">IX</option>
                        <option value="X">X</option>
                        <option value="XI">XI</option>
                        <option value="XII">XII</option>
                    </select>

                    </div>

                <div className="mb-3">
                    <label htmlFor="division" className="form-label">
                        Division
                    </label>
                  
                    <select name="division" value={division}
                   onChange={(e)=>onInputChange(e)}
                   required pattern="[a-zA-Z][A-Za-z\\s]{2,30}">
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                    </select> 



                    
                </div>

                <div className="mb-3">
                <label htmlFor="gender" className="form-label">
                    Gender
                    </label><br/>
                    <input type="radio" 
                    value={gender} 
                    name="gender"  
                    onChange={(e)=>onInputChange(e)}
                    value="Male"
                    required pattern="[a-zA-Z][A-Za-z\\s]{2,30}"
                    />Male <br/>

                        <input type="radio"
                        value={gender} 
                        name="gender"  
                        onChange={(e)=>onInputChange(e)}
                        value="Female"
                        required pattern="[a-zA-Z][A-Za-z\\s]{2,30}"
                        />Female <br/>

                        <input type="radio" 
                        value={gender}
                         name="gender"  
                        onChange={(e)=>onInputChange(e)}
                        value="Other"
                        required pattern="[a-zA-Z][A-Za-z\\s]{2,30}"
                        />Other <br/>
 
               </div>

                <button type="submit" className="btn btn-outline-primary">
                    Submit
                </button>

                <Link  className="btn btn-outline-danger mx-2" to="/">
                   Cancel
                </Link>
                
           
                </form>
                </div>
            </div>
        </div>

    </div>
  )
}
