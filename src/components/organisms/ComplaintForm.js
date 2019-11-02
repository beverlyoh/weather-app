import React, { Component } from 'react'
import Formfield from '../molecules/FormField'
import Button from '../atoms/Button'

// const ComplaintForm = props => {
//   return (
//     <div>
//       <form>
//         <FormField type="text" name="name" label="Name" />
//         <FormField type="text" name="email" label="Email Address" />
//         <FormField type="textarea" name="message" label="Message" />
//         <Button>Submit</Button>
//       </form>
//     </div>
//   );
// };

class Complaintform extends Component {
   constructor(props) {
       super(props);
       this.state = {
         name: ``,
         email: ``,
         message: ``
       };
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
     }
     handleChange(event) {
       const target = event.target;
       const value = target.value;
       const name = target.name;
       this.setState({
       [name]: value
       });
   }
   handleSubmit(event) {
       event.preventDefault();
       fetch('https://jsonplaceholder.typicode.com/posts', {
         method: 'POST',
         body: JSON.stringify({
           name: this.state.name,
           email: this.state.email,
           message: this.state.message
         }),
         headers: {
           'Content-type': 'application/json; charset=UTF-8'
         }
       })
         .then(response => response.json())
         .then(json => {
           console.log (json);
           this.setState({ name: '', email: '', message: ''});
         })
         .catch(err => {
           console.log(err);
         });
     }
   render() {
       return (
           <form id="myform" onSubmit={this.handleSubmit}>
               <Formfield type="text" name="name" label="name" value={this.state.name} onChange={this.handleChange}/>
               <Formfield type="text" name="email" label="email"  value={this.state.email} onChange={this.handleChange} />
               <Formfield type="textarea" name="message" label="message" value={this.state.message} onChange={this.handleChange} />
               <Button>Submit</Button>
           </form>
       );
   }
}
export default Complaintform;
