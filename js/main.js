/*
Added the Nav item in Jquery, Theme, and "imageThumb"  To change the displayed images*/

var currentView = "#home";
var Nav = "#homeNav";
var toggleTheme ="css/theme.css";
var selColor = "#0940E3";
var unSelColor ="#178EFB";
var defSelColor = "#E33834";
var defUnSel = "#ED42D3";



$(document).ready(function(){


$("#homeNav").css("background-color", selColor);


$('.imageThumb').click(function(){
  let src=$(this).attr("src");
   $("#displayed").attr("src", src);
  
});

$('#Theme').click(function (){
  let temp = $('#Stacker').attr('href');
  $('#Stacker').attr('href',toggleTheme);
  toggleTheme = temp;
  
  //This section trades the colors for selected nav items
  temp = selColor;
  let temp2 = unSelColor;
  selColor = defSelColor;
  unSelColor = defUnSel;
  defSelColor = temp;
  defUnSel =temp2;
  
});

$('.navItem').click(function(){
 
  $(this).css("background-color",selColor);
  $(Nav).css("background-color", unSelColor);
  $(currentView).css("display","none");
  currentView=$(this).attr("area");
  Nav = ("#"+$(this).attr("id"));
  $(currentView).css("display", "flex");
  });

})

/*

function changeArea(to, newNav){
    
  document.getElementById(currentView).style.display="none";
  document.getElementById(Nav).style.background ="DodgerBlue"
  document.getElementById(to).style.display="flex";
  document.getElementById(newNav).style.background="indigo"
  currentView = to
  Nav = newNav
}
*/