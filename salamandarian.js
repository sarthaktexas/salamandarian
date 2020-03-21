const startingValue = 20;

let usedValue = startingValue;

let values = [];

for (i = 0; i <  usedValue; i++) {
    let dice = Math.floor(Math.random() * (6 - 1 + 1) + 1);

    if (dice === 2 || dice === 3) usedValue++ 

    values.push(dice);
}

console.log(values);

let results = {
    dead: values.filter(v => v === 1).length,
    reproduced: values.filter(v => v === 2 || v === 3).length,
    alive: values.filter(v => v === 4 || v === 5 || v === 6).length
}

console.log(`\nStarted with ${startingValue} dice.`);
console.log(`Rolled ${values.length-results.dead} dice.`);
console.log("\nIn total:")
console.log(`${results.dead} salamanders died,`);
console.log(`${results.reproduced} salamanders reproduced,`);
console.log(`and ${results.alive} salamanders stayed alive.`);
