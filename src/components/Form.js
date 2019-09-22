import React from 'react';

const Form = (props) =>(
		<form className='form' onSubmit={props.showMethod}    >

		<h2>Signin</h2>
		<div className="formLine">______</div>
		<input  type="email"
		 name="email"
		 placeholder="Enter email" required />
		 <br></br>
		 <input type="text"
		 name="password"
		 placeholder="Enter password" required minLength='6' required  />
		 <br></br>
		 <button className="LogB">LOGIN</button>
		</form>
	);



export default Form;
