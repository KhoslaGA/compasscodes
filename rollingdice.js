

var dice = process.argv.slice(2);

function loadedDice(dice) {
    var total = [];
    // do a loop to roll dice 3 times
    for (var c = 0; c < dice; c++) {
        var randomNum = (" " + Math.floor(Math.random() * 6));
        total.push(randomNum);

    }
    // return total.join(",");
    return (`Rolled the dice  ${dice} times: ${total.join(",")}`);

}

console.log(loadedDice(dice));


