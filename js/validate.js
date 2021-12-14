const stateAbbreviations = [
  'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
  'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
  'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
  'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
  'VT','VI','VA','WA','WV','WI','WY'
 ];
         
function initValidation(formName) {

  let $form = $(formName);
  //changed from 'form :input'
  $(' :input').change(function(ev){
    validateForm();
    if(!this.checkValidity())
      $(this).addClass("was-validated")
      

    
  });
  
  $form.submit(function(event){
    $form = $(this);
    formEl=$form.get(0);
    console.log(formEl)

    event.preventDefault();  
    event.stopPropagation(); 

    validateForm();


    if (!formEl.checkValidity()){
      $(":input").addClass("was-validated")
      $('.errorMsg').show()
      
    }
    else{
      //TODO
      submitForm()

      $("#completed").show();
      //hide form
      //show thank you message
    }
   
  });
}

function validateForm() {
 

  validateState("#state", "You must enter a valid two character state code, e.g., UT")
  validateCheckboxGroup("#newspaper", "find-page", "you must select at least one!");
}



function validateState(id, msg){
  $el = $(id);
  let valid=false;

  //TO DONE

  let upper = $el.val().toUpperCase();
  
  if ( -1 != jQuery.inArray( upper, stateAbbreviations)){
    valid=true;
  }

  setElementValidity(id, valid, msg);
}

function validateCheckboxGroup(fieldName, groupName, message) {
  let valid=false;

  //TODO
  //Validate whether any of the checkboxes are checked. set 'valid' to true if checked
  
  if($("input[name='find-page']").is(":checked")){
    valid=true;
  }

  setElementValidity(fieldName, valid, message);
  return valid;
}

function setElementValidity(fieldName, valid, message){
  let $field=$(fieldName);
  let el = $field.get(0);
  let errMsgName = (fieldName+"ErrMsg");
 
  if (valid) {  
    el.setCustomValidity(''); 
    $(errMsgName).text('')
    
  } 
  else {

    el.setCustomValidity(message); 
    $(errMsgName).text(message)
   
  }
  
  //here I tried to implement a concatination to turn certain messages off and on
  //if((el.val == undefined)||(valid==true)){
    //$(errMsgName).attr('style', 'display:none');
  //}
  //else{
    
  //    $(errMsgName).attr('style', 'display:block');
    
  //}

 } 
  
 
