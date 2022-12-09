var imagesource1 = Math.floor(Math.random() * 6) + 1;
var randomimage1 = "dice" + imagesource1 + ".png";
var imagesource1 = "/dom/images/" + randomimage1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imagesource1);

var imagesource2 = Math.floor(Math.random() * 6) + 1;
var randomimage2 = "dice" + imagesource2 + ".png";
var imagesource2 = "/dom/images/" + randomimage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imagesource2);

if (imagesource1 > imagesource2) {
  document.querySelector(".win").innerHTML = "Player 1 Wins";
}
else if (imagesource2 > imagesource1) {
  document.querySelector(".win").innerHTML = "Player 2 Wins";
}
else{
    document.querySelector(".win").innerHTML="Match Draw"
}
