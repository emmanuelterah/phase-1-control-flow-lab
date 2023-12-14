function scuberGreetingForFeet(feet){
    if (feet <= 400) {
        return 'This one is on me!';
    } else if (feet > 2000 && feet <= 2500) {
        return 'I will gladly take your thirty bucks.';
    } else if (feet > 2500) {
        return 'No can do.';
    }
}

console.log(scuberGreetingForFeet(199));
 console.log(scuberGreetingForFeet(2001));
 console.log(scuberGreetingForFeet(2501));


const city = "NYC"
let result;
function ternaryCheckCity (city) {

result = city === "NYC" ? "Ok, sounds good." : "No go."
return result;

}

function switchOnCharmFromTip(tip){
    switch (tip) {
        case "generous":
            return "Thank you so much."
        case "not as generous":
            return "Thank you."
        default:
            return "Bye."
    }
}
