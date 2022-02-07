"using strict"
let isOpen = false;

window.addEventListener('load', (event) => {
  document.getElementById("mountain").style.display = "none";
})
    

toggleForm = (hex) => {
  let displayValue = document.getElementById(hex).style.display;
  console.log(displayValue);

  if(displayValue == "none"){
    document.getElementById(hex).style.display = "block";
  }
  else if (displayValue == "block"){
    document.getElementById(hex).style.display = "none";
  }
}