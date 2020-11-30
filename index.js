function myFunction() {
  var x = document.getElementById("menunav");
  if (x.className === "menu") {
    x.className += " responsivee";
  } else {
    x.className = "menu";
  }
}
