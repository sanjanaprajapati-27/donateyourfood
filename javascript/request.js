document
.getElementById("donationForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Food Request Submitted Successfully!");

    this.reset();

});