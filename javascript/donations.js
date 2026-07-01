const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(){

let filter =
this.value.toLowerCase();

let cards =
document.querySelectorAll(".donation-card");

cards.forEach(function(card){

let text =
card.innerText.toLowerCase();

if(text.includes(filter))
{
card.style.display = "block";
}
else
{
card.style.display = "none";
}

});

});