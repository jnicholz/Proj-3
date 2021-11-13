var currentView = "home";
var Nav = "homeNav"
changeArea(currentView, Nav)
  function changeImage(imgName)
  {
     image = document.getElementById('displayed');
     image.src = imgName;
  }
  
/* function changeImage(a) {
    document.getElementById("img").src=a} */
function changeArea(to, newNav){
    
    document.getElementById(currentView).style.display="none";
    document.getElementById(Nav).style.background ="DodgerBlue"
    document.getElementById(to).style.display="flex";
    document.getElementById(newNav).style.background="lightgreen"
    currentView = to
    Nav = newNav
}


