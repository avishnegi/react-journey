import React from "react";
import ReactDOM from "react-dom/client";

/* const parent = React.createElement(
    "div",{id:"parent"},React.createElement(
        "div",{id:"child"},React.createElement(
            "h1",{},"Hi from H1")))
// const heading = React.createElement("h1",{},"hello from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); */

const HeadingComponent = () => {
    return <h1>Hi from functional component</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent/>);