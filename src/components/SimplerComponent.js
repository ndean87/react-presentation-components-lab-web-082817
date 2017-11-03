// In the components/SimplerComponent.js file, create a SimplerComponent component.
// The component should be a "stateless functional" component.
// It should render a <div> to the page that contains the text: "I am just happy".
// It should receive one property called handleClick that performs some sort of action in response to a click — your choice!

import React from 'react';
import ReactDOM from 'react-dom';


function SimplerComponent(props) {

  return <div onClick={props.handleClick}>I am just happy</div>;
}







export default SimplerComponent;
