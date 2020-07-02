import React from 'react';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {signInWithGoogle} from '../../firebase/firebase.utils'


import './sign-in.scss';


 class SignIn extends React.Component{
     constructor(props){
         super(props);

         this.state ={
             email:'',
             password:''
         }
     }

     handleSubmit = event =>{
        event.preventDefault();
        this.setState({email:'' , password:''})
     }

     handleChange = event =>{
         const {value , name} = event.target;

         this.setState({[name]:value})
     }

     render(){
         return(
         <div className='sign-in'>
             <h2>I have already an account</h2>
             <span>Sign in with email and password</span>
         <form onSubmit={this.handleSubmit}>
             <FormInput value={this.state.email} handleChange={this.handleChange} label="E-mail" type="email" name="email" required/>

             <FormInput value={this.state.password} handleChange={this.handleChange} label="Password" type="password" name="password" required/>

            <div className='buttons'>
            <CustomButton type="submit" >Sign In</CustomButton>
            <CustomButton onClick= {signInWithGoogle} isGoogleSigIn>Sign In with Google</CustomButton>

            </div>
         </form>
         
         </div>
         )
     }
 }
 export default SignIn;