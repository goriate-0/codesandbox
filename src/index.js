// progate
let name = "russ";
console.log(name);
console.log("danger" + name);
let text = "good morning";
console.log("russ, " + text);
console.log("KD, " + text);
text = "good afternoon";
console.log(text);

let number = 2;
number = number + 3;
console.log(number);
number += 10;
console.log(number);

const champ = "macgregor";
const championTimes = 2;
console.log(`${champ}は${championTimes}階級同時制覇王者です`);

const weight = 155;
if (weight > 155) {
  console.log("over limit weight!");
} else if (weight === 155) {
  console.log("official weight for lightweight division!");
} else {
  console.log("you should gain weight.");
}

console.log(weight === 150);

if (weight > 154 && weight < 156) {
  console.log("you can challenge lightweight division.");
}
if (champ === "macgregor" || champ === "adesanya") {
  console.log("you are super star!");
}

const speed = 100;
switch (speed) {
  case speed > 100:
    console.log("slow down!");
    break;
  case speed >= 80:
    console.log("be attention");
    break;
  case speed < 50:
    console.log("speed up");
    break;
  default:
    console.log("value of speed is not correct.");
    break;
}

const color = "red";
switch (color) {
  case "red":
    console.log("stop");
    break;
  case "yellow":
    console.log("be attention");
    break;
  case "blue":
    console.log("go");
    break;
  default:
    console.log("value of color is not correct.");
    break;
}
