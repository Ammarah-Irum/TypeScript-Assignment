var users_name = ['Sara', 'Ali ', 'Ammarah', 'Hamza', 'admin'];
if (users_name.length == 0 || users_name.includes('zara')) {
    console.log("We need to find some users!");
}
else {
    console.log("We need to remove all users from array");
}
var empty_username = users_name.pop();
console.log(empty_username);
