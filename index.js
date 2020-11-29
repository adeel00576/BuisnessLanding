function myFunction() {
  var x = document.getElementById("menunav");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}