import { useState,useEffect } from 'react';
import Wrapper from '../assets/wrappers/RegisterPage';
import { Logo,FormRow,Alert } from '../components';
import { useAppContext } from '../context/appContext';


const initialState = {
    name:'',
    email:'',
    password: '',
    isMember: true,
}


const Register = () => {
    const [values,setValues] = useState(initialState);

    const {isLoading, showAlert } = useAppContext();

    const toggleMember = () => {
        setValues({...values,isMember:!values.isMember})
    }

    const handleChange =(e) =>{
        console.log(e.target);
    }

    const onSubmit =(e) =>{
        e.preventDefault();
        console.log(e.target);
    }
    
    return <Wrapper className='full-page'>
        <form className='form' onSubmit={onSubmit}>
            <Logo/>
            <h3>{ values.isMember ?  'Login' : 'Register' }</h3>
            
            { showAlert && <Alert/> }

            { !values.isMember && 
                <FormRow type='text' name='name' value={values.name} handleChange={handleChange} />
            }

            <FormRow type='email' name='email' value={values.email} handleChange={handleChange} />
            <FormRow type='password' name='password' value={values.password} handleChange={handleChange} />
            <button type="submit" className="btn btn-hero">Submit</button>
            <p>
                { values.isMember ? 'Not a member yet' : 'Already a member'}
                <button type='button' onClick={toggleMember} className='member-btn'>
                    { values.isMember ? 'Register' : 'Login'}
                </button>
                
            </p>
        </form>
    </Wrapper>
}

export default Register