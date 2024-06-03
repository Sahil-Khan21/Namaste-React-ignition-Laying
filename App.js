import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const Title = (
  <h1 className="head" tabIndex="2">
    This is JSX heading
  </h1>
);

// React Funcional Component
const HeadingComponent = () =>{
return <h1>Namaste React Functional Component</h1>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
