import React from 'react'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'
import './sign-up.styles.scss'

class SignUp extends React.Component{
    state ={
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }  

  /*  handleSubmit = (event) => {
        event.preventDefault;
        const {displayName, email, password, confirmPassword} = this.state
        if(password !== confirmPassword){
           alert('Passwords don\'t match')     
        } 
    }*/

    handleChange = (event) => {
      event.preventDefault();
      const {name, value} = event.target
      this.setState({
          [name] : [value]
      })
    }

     render(){
       const {displayName, email, password, confirmPassword} = this.state
       return(
         <div className='sign-up'>
             <h2 className='title'> I dont have an account </h2>
             <span>Sign up with email</span>
             <form className='sign-up-form' onSubmit={this.handleSubmit}>
               <FormInput type='text' name='displayName' value={displayName} onChange={this.handleChange} label='Display Name' required/>
               <FormInput type='email' name='email' value={email} onChange={this.handleChange} label='Email' required/>
               <FormInput type='password' name='password' value={password} onChange={this.handleChange} label='Password' required/>
               <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={this.handleChange} label='Confirm Password' required/>
               <CustomButton type='submit'>Sign Up</CustomButton>
             </form>            
         </div>
      )
   }
}

export default SignUp