# salamandarian

* run in a web console such as https://jsconsole.com/
* when you do run be sure to follow the following: (you must run each code 20 times to get the needed data)

* each time change `startingValue` to the `values.length` (rolledDice) given in previous month

for example,

```javascript
//first time
const startingValue = 20;
//second time 
const startingValue = 11;
```

* also change the numbers to represent what's actually happening (per simulation)
* reproduced need not be changed

```javascript
let results = {
    dead: values.filter(v => v === 1 || v === 2 || v === 4).length,
    reproduced: values.filter(v => v === 2).length,
    alive: values.filter(v => v === 5 || v === 6).length
}
```
