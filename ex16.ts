
var persons = ["Mustafa", "Ami ji", "Amna"];
console.log(persons[0] + "!", " Please come back and have food with us. You were too young to leave us!\n");
console.log("Dear " + persons[1] + ",", " You're invited at my place. I'll be making Nihari for you.\n");
console.log("My loving friend, " + persons[2] + "!", " Let's have dinner together tonight.\n");

console.log("With heavy heart, I've to say that Mustafa can't join us, it's been a month since he left us forever.\n")

var persons2 = ["Almas", "Ami ji", "Amna"];
console.log(persons2[0] + "!", " Let's talk over dinner. Come at my place tonight.\n");
console.log("Dear " + persons2[1] + ",", " You're invited at my place. I'll be making Nihari for you.\n");
console.log("My loving friend, " + persons2[2] + "!", " Let's have dinner together tonight.\n");

console.log("I'm so happy to announce that More people are joining us for dinner as my bigger dinner table is arriving.\n")

var persons3 = ["Almas", "Ami ji", "Amna"];
persons3.unshift("Sara");
persons3.splice(1, 0, "Anam")
persons3.push("Naima")

console.log(persons3[0] + "!", " It's been a while we havn't met. Come at my place for dinner.\n");
console.log(persons3[1] + "!", " Don't stress yourself out. Be calm and have dinner with us tonight.\n");
console.log(persons3[2] + "!", " Let's talk over dinner. Come at my place tonight.\n");
console.log("Pyari " + persons3[3] + "!", " You're invited at my place. I'll be making Nihari for you.\n");
console.log("My loving friend " + persons3[4] + ",", " Lets's have dinner together tonight. \n");
console.log("Dearest, " + persons3[5] + "!", " I'm having dinner at my home tonight. I'd love to have to with us.\n");

