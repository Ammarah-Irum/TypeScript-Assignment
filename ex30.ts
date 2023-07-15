var user_name = ['Sara', 'Ali ', 'Ammarah', 'Hamza', 'admin']
for(var i= 0; i <= 4; i++)
{
    if(user_name[i] == 'admin')
    {
        console.log("Hello Admin. New reports have arrived. Have a look!")
    }
    else
    {
        console.log("Hello " + user_name[i] + "! Welcome back to your portal.")
    }
}