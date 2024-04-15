import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

function Show() {

    const [users, setUser] = useState([]);

    async function fetchData(){
        const result = await axios.get('http://localhost:5000/users')
        setUser(result.data)
    }
    useEffect(()=>{
        fetchData();
    }, [])

  return (
    <div className='container w-50'>
        <table className='table table-primary table-scripted'>
                <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>SALARY</th>
                            <th>ACTION</th>
                        </tr>
                </thead>
                <tbody>
                        {
                            users.map((obj)=>{
                                return(
                                    <tr>
                                        <td>{obj.eid}</td>
                                        <td>{obj.ename}</td>
                                        <td>{obj.esal}</td>
                                        <td>
                                            <NavLink to={`/update/${obj.id}`}><button className='btn btn-outline-warning btn-sm me-3'>UPDATE</button></NavLink>
                                            <NavLink to={`/delete/${obj.id}`}><button className='btn btn-outline-danger'>DELETE</button></NavLink>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                </tbody>
        </table>
    </div>
  )
}

export default Show