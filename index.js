var randomNo1 = Math.floor(Math.random()*6)+1;
var randomNo2 = Math.floor(Math.random()*6)+1;
var x = "dice"+randomNo1+".png";
var y = "dice"+randomNo2+".png";
document.querySelector(".img1").setAttribute("src",x);
document.querySelector(".img2").setAttribute("src",y);
pika();
function pika()
{
if(randomNo1>randomNo2)
{
  document.querySelector(".container h1").textContent = "👦👦Player 1 wins";
}
else if(randomNo1<randomNo2)
{
  document.querySelector(".container h1").textContent = "👦👦Player 2 wins";
}
else
{
  document.querySelector(".container h1").textContent = "👼👼Draw";
}
}
