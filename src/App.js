import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppContainer from './containers/AppContainer';

function App() {
  return (
    <Router>
      <AppContainer />
    </Router>
  );
}

export default App;

// handleSubmit = dest => {
//   this.ListeningStateChangedEvent({destList: [...this.state.destList, dest]});
// }

// // add new property 
// removeDestination = this.removeDestination

// // use index to remove destination
// onClick = {() => props.removeDestination(index)}

// // Example to remove cities from list
// removeDestination = index => {    
//   const listofDest = this.state.destList;     
//   this.setState({
//     destList: listofDest.filter((dest, i) => { 
//       return i !== index
//     }),     
//   })
// }