var RandomNumber1= Math.floor(Math.random() * 6) + 1;  // here we take because to generate random number

var RandomImage="dice"+RandomNumber1+".png";

var ImageGenerator="images/"+RandomImage;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",ImageGenerator);  // image ko change karne k liye source se ok 



var RandomNumber2= Math.floor(Math.random() * 6)+1; //Its range is between 0-5.99 

var ImageGenerator2= "images/dice"+RandomNumber2 +".png";

document.querySelectorAll("img")[1].setAttribute("src",ImageGenerator2);





if(RandomNumber1 === RandomNumber2){
  
    document.querySelector("h1").innerHTML="Draw!";
}
else if(RandomNumber1 >= RandomNumber2){
   
    document.querySelector("h1").innerHTML="🚩Player1 Wins!";
}
else if(RandomNumber1 <= RandomNumber2){
   
    document.querySelector("h1").innerHTML="🚩Player2 Wins!";
   
}



























