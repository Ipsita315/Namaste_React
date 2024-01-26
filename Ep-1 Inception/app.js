const heading = React.createElement(
    "h1", 
    {
        id:"heading",
        className: "heading-style",
        "data-heading": "customAttribute"
    },
    "Hello World from React!!!");

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading);

//2. To create nested components
const parent1 = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        React.createElement(
            "h1",
            {},
            "I'm h1 heading"))
);

root.render(parent1);

//3. To create sibling elements - pass an array of objects in children parameter
const parent2 = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [
            React.createElement("h1", {}, "I'm h1 heading"),
            React.createElement("h2", {}, "I'm h2 heading")
        ]
    )
);

root.render(parent2);

//4. More complex structure
const parent3 = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement(
            "div",
            { id: "child1" },
            [
                React.createElement("h1", {}, "I'm h1 heading"),
                React.createElement("h2", {}, "I'm h2 heading")
            ]
        ),
        React.createElement(
            "div",
            { id: "child2" },
            [
                React.createElement("h1", {}, "I'm h1 heading"),
                React.createElement("h2", {}, "I'm h2 heading")
            ]
        )
    ]
);

root.render(parent3);