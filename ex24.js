//Tests for equality of strings
var x = "I like coding";
var y = "I like coding";
var result1 = x == y;
console.log("Output of X==Y :" + result1);
//Tests for equality of strings
var x1 = "I like coding";
var y1 = "I don't like coding";
var result1 = x1 == y1;
console.log("Output of X==Y :" + result1);
//Test for lower case
var name1 = "hamza rehman";
var name_lower = name1.toLowerCase();
var result2 = name1 == name_lower;
console.log("Output = " + result2);
//Test for iequalities of numerical values
var numbers = [2, 4, 6, 5, 2, 1];
var comp = numbers[0] <= numbers[1];
console.log("Output for less than equal to operator is: ", comp);
var comp1 = numbers[0] == numbers[4];
console.log("Output for equal to operator is: ", comp1);
var comp2 = numbers[4] == numbers[5];
console.log("Output for not equal to operator is: ", comp2);
//Tests using AND and OR operator
//AND operator
var eng_marks = 75;
var maths_marks = 86;
if ((eng_marks && maths_marks) >= 35)
    console.log("Student is Pass");
else
    console.log("Student is Fail");
//OR operator
var eng_marks1 = 25;
var maths_marks1 = 38;
if ((eng_marks1 || maths_marks1) >= 35) {
    console.log("Student is Pass");
}
else {
    console.log("Student is Fail");
}
//Test for checking item in an array
var std = ['Ali', 'Sara', 'Omer', 'Saad', 'Liu'];
var check = std.includes('Sara');
console.log(check);
//Test for checking if item is not in an array
var std = ['Ali', 'Sara', 'Omer', 'Saad', 'Liu'];
var check = std.includes('Adil');
console.log(check);
