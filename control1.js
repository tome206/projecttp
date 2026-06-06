function loadpage(page) {
  hour = new Date().getHours();
  if (hour >= 6 && hour <= 18) {
    document.getElementById("d").style.background = "#f09c76";
    document.getElementById("d1").style.background = "#f09c76";
    document.getElementById("d2").style.background = "#f09c76";
  } else {
    document.getElementById("d").style.background = "#2e3241";
    document.getElementById("d1").style.background = "#2e3241";
    document.getElementById("d2").style.background = "#2e3241";
  }
}
