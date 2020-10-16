var currentTab = 0; 
showTab(currentTab);

function showTab(n) {
 
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";

  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Sign me up!";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  
}

function nextPrev(n) {

  var x = document.getElementsByClassName("tab");

  if (n == 1){ //return false;  //&& !validateForm()
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;}
  else{
    x[currentTab].style.display = "none";
    currentTab = currentTab - 1;}

  console.log(currentTab);

  if (currentTab >= x.length) {
    document.getElementById("regForm").submit();
    x[currentTab].style.display = "none";
    return false;
  }
  showTab(currentTab);
}

// function validateForm() {
//   var x, y, ctr = 1;

//   x = document.getElementsByClassName("tab");
//   y = x[currentTab].getElementsByTagName("input");
 
//   for (var i = 0; i < y.length; i++) {

//     if (y[i].value == "") {
     
//       y[i].className += " invalid";
     
//       ctr = 0;
//     } else {
//       y[i].className += " valid";
      
//     }
    
//   }
//   return ctr;
// }
