document.getElementById("donationForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank You! Your donation has been submitted successfully.");

    this.reset();
});