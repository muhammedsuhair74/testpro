var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var back=document.getElementById("gradient");
var text3=document.querySelector(".abc");

function setgradient()
{
	back.style.background="linear-gradient(to right," + color1.value + ", " +color2.value + " )";	
	css.textContent=back.style.background+";";
}
color1.addEventListener("input",setgradient);
color2.addEventListener("input",setgradient);
text3.style.backgroundColor="green";
