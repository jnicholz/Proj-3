function renderTable(containerId, visitors) {
    //renders table from global 'visitors' object array
    
    var clearin = containerId+ "> td ";

    $(".visDat").remove();
    
    const tableLR = containerId + '> tbody:last-child';
   
    var rowString =''
    for ( i=0; i < visitors.length; i++){
        rowString +=("<tr class ='visDat'><td>"+ visitors[i].name+"<td>"+visitors[i].addr+
        "</td><td>" +visitors[i].email+"</td><td>"+visitors[i].phone+"</td><td>"+visitors[i].source+
        "</td><td>"+visitors[i].comment+"</td><td> <button class='trash' id='"+visitors[i].id+"'><i class='far fa-trash-alt'></i></button></td></tr>");
    }
    
    $(tableLR).append(rowString);
    
    console.log(rowString)
}

function showTable(){
    //shows visitor list and hides form 
   
    $('#visForm').hide();
    
    $('#visLog').show();
}               comment


function showVisitors()  {
    //shows visitor container and hides all other site content containers 
    $('#visLog').show;
}


function showForm() {
    //shows visitor form and hides list
    $('#visLog').hide();
    $('#visForm').show();
}

function clearForm() {
    //clears values on inputs so next time form is loaded they don't have old contents
    $(':input','#myform').not(':button, :submit, :reset, :hidden')
    .val('')
    //.prop('checked', false)
    .prop('selected', false);
}