const mainBtn = document.getElementById("main-btn");

mainBtn.addEventListener("click", () => {  
  document.getElementById("front").innerText = "Loading...";
  window.location = "mainarg.html"
})