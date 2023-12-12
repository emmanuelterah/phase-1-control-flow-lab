function scuberGreetingForFeet(feet){
    if (feet <= 400) {
        return 'This one is on me!';
    } else if (feet > 2000 && feet <= 2500) {
        return 'I will gladly take your thirty bucks.';
    } else if (feet > 2500) {
        return 'No can do.';
    }
}
 console.log(sruberGreetingForFeet(199));
 console.log(scuberGreetingForFeet(2001));
 console.log(scuberGreetingForFeet(2501));



function ternaryCheckCity(city){
    if (city === "NYC") {
        return "Ok, sounds good.";
    } else {
        return "No go.";
    }
}

console.log(ternaryCheckCity("NYC"));
console.log(ternaryCheckCity("Pittsburgh"));

function switchOnCharmFromTip(tip){
  if (tip === "generous") {
    return "Thank you so much."
  } else if (tip === "not as generous") {
    return "Thank you."
  } else return "Bye.";
}

console.log(switchOnCharmFromTip("generous"));
console.log(switchOnCharmFromTip("not as generous"));
console.log(switchOnCharmFromTip("Meagre"));