var currentView = "home";
var Nav = "homeNav"
$(document).ready(function(){


  changeArea(currentView, Nav);


$('.imageThumb').click(function(){

  let src=$(this).attr("src");
   $("#displayed").attr("src", src);
  
})


 /*function changeImage(a) {
    document.getElementById("img").src=a
  }*/

})



function changeArea(to, newNav){
    
  document.getElementById(currentView).style.display="none";
  document.getElementById(Nav).style.background ="DodgerBlue"
  document.getElementById(to).style.display="flex";
  document.getElementById(newNav).style.background="indigo"
  currentView = to
  Nav = newNav
}
