// arr = ["Mael","Eric","Randall","James"];
// for (var i=0; i < arr.length; i++)
// {
// document.writeln(arr[i],"<br>");
// }
// A prompt box is used to prompt users to input a value before entering a page.
// A prompt box is used to prompt users to input a value before entering a page.
user_name = window.prompt("Please enter your name", "Type your name here");
message = `<h1>Hello, welcome ${user_name}!</h1>`;
if(message)
{
    document.getElementById("header").innerHTML = message;
}