// these are the objects of votaTRON
var article = {
    title : "React Is a Library",
    body : `functional techniques can be used in JavaScript code.`,
    emphasis : "React emphasizes functional programming over object-oriented programming.",
    benefits : "This shift in thinking can lead to benefits in areas like testability and performance.",
    steepCurve : "But when a lot of React materials assume an understanding of the paradigm,<br>	it can be hard to learn so much at once.",
    fatigue: `<h2>JavaScript Tooling Fatigue:</h2><ul>
    <li>emerging syntax that has to be transpiled to work in all browsers.</li>
    <li>There’s JSX that has to be converted to JavaScript:is a syntax extension to JavaScript,
produces React “elements”.</li>
    <li>There’s SCSS that you might want to preprocess.</li></ul>`,
    pros : "More Abstractions. Less Code.",
    foot : `El amor, a quien pintan ciego, es vidente y perspicaz porque el amante ve cosas que el<br>
    indiferente no ve y por eso ama.<br>-- <b>Ortega y Gasset 🖤</b>`,
    dom : `<div><h2>DOM</h2>
    The Document Object Model is the data representation of the objects that comprise
    the structure and content of a document on the web.<br>
    The DOM is an object-oriented representation of the web page, which can be modified
    with a scripting language</div>`,
};

var forms = {
    body : `<h2>Introducing Forms</h2>
        <div><form id="${ceo} la form">
            <input type="button" onclick="alert(document.forms[0].id);" value="greetings fro the ceo!" />
        </form></div>
        <div><form name="login">
            <input name="email"    type="email"    placeholder="foo@etsoft.org">
            <input name="password" type="password" placeholder="passwd">
            <button type="submit">Log in</button>
        </form></div>
        <div><form name="loginImg">
            <input type="image" src="src/imgs/tux_outline.jpg" alt="Submit" width="88" height="88" target="_blank">
        </form></div>
        <p>ToDo: use GET and POST from form inputs</p>`,
};

var sandwich =  {
    bread: "dutch crunch",
    meat: "tuna",
    cheese: "swiss",
    toppings: ["lettuce", "tomato", "mustard"]
};

var {bread, meat, toppings} = sandwich;

var lordify = regularPerson => {
    return `${regularPerson.firstname} of Canterbury`
};

var regularPerson = {
    firstname: "Bill",
    lastname: "Wilson"
};

