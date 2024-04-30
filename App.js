
    /* <div id="parent">
    <div id="child">
        <h1>
            
        </h1>
    </div>
</div> */

const parent = React.createElement(
    "div",{id:"parent"},React.createElement(
        "div",{id:"child"},React.createElement(
            "h1",{},"Hi from H1")))
// const heading = React.createElement("h1",{},"hello from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);