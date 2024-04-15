import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {useForm} from 'react-hook-form'

function Update() {
    const {userId} = useParams();

    const nav = useNavigate();

    const {handleSubmit, register} = useForm({defaultValues: async()=>(await axios.get(`http://localhost:5000/users/${userId}`)).data});

    function saveData(data){
        axios.put(`http://localhost:5000/users/${userId}`, data);
        nav('/show');
    }


return (
    <>
        
        <div className='container'>
            <center><h2><u>EMPLOYEE UPDATE INFORMATION</u></h2></center>
            <form onSubmit={handleSubmit(saveData)}className='mt-5'>
                
                <label htmlFor='i'><b>ENTER EID:</b></label>
                <input type='number' id='i' className='form-control' {...register('eid')}/>
                <br /> <br />

                <label htmlFor='n'><b>ENTER ENAME:</b></label>
                <input type='text' id='n' className='form-control'{...register('ename')}/>
                <br /> <br />

                <label htmlFor='s'><b>ENTER SALARY:</b></label>
                <input type='number' id='s' className='form-control' {...register('esal')}/>
                <br /> <br />

                <input type='submit' value='UPDATE EMPLOYEE'  className=' btn btn-outline-primary col-6'/>
                <input type='reset' value='RESET' className='btn btn-outline-warning col-6'/>
            </form>
        </div>
   
    </>
  )
}

export default Update