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

console.log("I feel apologized to share the news that dinner table can't arrive on time.\n")
var removed_guest1 = persons3.pop()
console.log("Sorry, " + removed_guest1, "! . I can't have you over for dinner tonight.\n")

var removed_guest2 = persons3.pop()
console.log("Sorry, " + removed_guest2, "! . I can't have you over for dinner tonight.\n")

var removed_guest2 = persons3.shift()
console.log("Sorry, " + removed_guest2, "! . I can't have you over for dinner tonight.\n")

var removed_guest3 = persons3.splice(1, 1)
console.log("Sorry, " + removed_guest3, "! . I can't have you over for dinner tonight.\n")
console.log("Only two guests are now coming for dinner: ", persons3)

//now removing remaining guests too
var removed_guest3 = persons3.splice(2, 2)
console.log("Removing all guests: ", removed_guest3)
