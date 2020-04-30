// these are the functions of votaTRON
function printered() {
    if((metr == undefined) || (name === undefined)) {
        return "undefined variable metr!!!";
    } else {
        return `Mt. ${name} is ${metr} and ${qty} and ${price} feet tall`;
    }
};

function logActivity(name="Shanead O'connor", activity="sings rules!") {
    return `${name} loves and ${activity}`
};

var arrowFunction = (a="DefaultArr", b=name) => {
    return `${a} with ${b} the use of an arrow function`;
};

function playAudio() {
    var audio = new Audio('src/media/nightMaresWax21Kong.mp3');
    audio.play();
};
