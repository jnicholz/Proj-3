
var currentView = "#home";
var Nav = "#homeNav";
var toggleTheme ="css/theme.css";
var selColor = "#0940E3";
var unSelColor ="#178EFB";
var defSelColor = "#E33834";
var defUnSel = "#ED42D3";
var Countid=2;
var rowCount = 0;


$(document).ready(function(){

  $("#homeNav").css("background-color", selColor);
  initValidation();

});
  

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
    if(currentView == "#form"){
      loadVisitors();
    }
 });

// newcode here

// More to do here my dude.

//called when 'visitors' menu item is clicked
function loadVisitors() {
   
  //calls view 'showVisitors' 
  showVisitors()
  //calls view 'renderTable'
  renderTable("#visTable",visitors) 
  //calls view 'showTable'
  showTable()

}


//called on form submit. Gets contents of form, creates visitor object,
function submitForm() {

  var formData = $('#myform').serializeArray()

  //calls model 'modelAddVisitor' function
  modelAddVisitor(formData)

  //calls view 'renderTable'
  renderTable("#visTable",visitors) 

  //calls view 'showTable'
  showTable()

};

//called on 'click' of 'New Visitor' button
$('#visButtons').click(function addVisitor(visitor) {
  

  //calls view 'showForm'
  showForm();

  
  //calls view 'clearForm' to clear form contents
  clearForm();
});

//called on 'click' of 'delete' icon in visitor list 
$('#visTable').on('click','.trash', function deleteVisitor(id) {

  if(confirm("Are you sure you want to delete this?"))
  {
  //calls model.js modelDeleteVisitor
  modelDeleteVisitor(this.id)
  
  //calls view 'renderTable' 
  renderTable("#visTable",visitors)
  
  //calls view 'showTable'
  showTable()
}

});

