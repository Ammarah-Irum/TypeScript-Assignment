var p_name = "Hamza Rehman";
var p_name_upper = p_name.toUpperCase();
console.log("Name in Uppercase = :" + p_name_upper);
var p_name_lower = p_name.toLowerCase();
console.log("Name in Lowercase = :" + p_name_lower);
function titleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}
console.log(titleCase("haMza reHman"));
