import React from 'react';
import Info from './components/Info'
import Form from './components/Form';

class App extends React.Component{

 sendingEmail = async (e) => {
   e.preventDefault();
   const Dmail = e.target.elements.email.value;

    {Dmail &&
        console.log(Dmail);
      }
}

  render(){
    return(
      <div className ='wrapper'>
        <Info />
        <Form showMethod={this.sendingEmail} />

      </div>
      );
  }
}


export default App;
