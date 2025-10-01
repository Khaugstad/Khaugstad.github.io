/*
arr = ["Mael","Eric","Randall","James"];
for (var i=0; i < arr.length; i++)
{
    document.writeln(arr[i],"<br>");
}
// A prompt box is used to prompt users to input a value before entering a page.
// A prompt box is used to prompt users to input a value before entering a page.
user_name = window.prompt("Please enter your name", "Type your name here");
message = `<h1>Hello, welcome ${user_name}!</h1>`;
if(message)
{
    document.getElementById("header").innerHTML = message;
}
*/
var webmaps = [
    ["National Geographic Mapmaker", "https://mpmkr.maps.arcgis.com/apps/instant/atlas/index.html?appid=0cd1cdee853c413a84bfe4b9a6931f0d",
        "ArcGIS Online provides interactive mapping tools such as this instant atlas. This powerful web map opens up the possiblities\
         to interact will all sorts of different data sets and analysis across the world."],
    ["National Geographic Mapmaker", "https://mpmkr.maps.arcgis.com/apps/instant/atlas/index.html?appid=0cd1cdee853c413a84bfe4b9a6931f0d",
        "ArcGIS Online provides interactive mapping tools such as this instant atlas. This powerful web map opens up the possiblities\
        to interact will all sorts of different data sets and analysis across the world."],
];
function welcome() {
    let a = "Please enter your name.";
    let b = "Type your name here.";
    // A prompt box is used to prompt users to input a value before entering a page.
    user_name = window.prompt(a, b);
    message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"
    return message
}
document.write(welcome());

function webmap_table() {
    document.write("<table width=100%>");
    for (var row = 0; row < webmaps.length; row++) {
        document.write("<tr>");
        for (var column = 0; column < webmaps[0].length; column++) {
            if(column % 2  == 0)
            {
                document.write("</tr>");
                document.write('<tr>');
                document.write('<td colspan="2">' + webmaps[row][column] + "</td>");
            }
            else
            {
                document.write("<td>" + webmaps[row][column] + "</td>");
            }    
        }
        document.write("</tr>");
    }
    document.write("</table>");
    return "";
}

