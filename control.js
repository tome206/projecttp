function loadpage(page) {
  hour = new Date().getHours();
  if (hour >= 6 && hour <= 18) {
    document.getElementById("ir").style.background =
      "linear-gradient(135deg,#ff7b92 ,#ffb56b )";
  } else {
    document.getElementById("ir").style.background =
      "linear-gradient(135deg, #0a0f24, #1c2238)";
    document.getElementById("b").style.color = "#e7ecf5";
  }
}
