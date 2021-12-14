const visitors = [];

class Visitor {
    constructor(id, firstName, lastName, street, city, state, zip,mail, number, from, penautGallery){
        this.id = id;
        this.name =firstName+" "+lastName;
        this.addr = street+", "+city+" "+state+", "+zip;
        this.email = mail;
        this.phone = number;
        var src =''
        
        //code to parse the source
        for ( const property in from){
            if(from[property] == true){
                if (src != ''){
                    src += ", "
                };
    
                src += property;
            }
        }
        if (src == ''){
           src= from;
        }

        this.source = src;
        this.comment = penautGallery;  
    };

    get fullName(){ 
        //returns concatenated first and last name fields
        return self.name;
     };

    get fullAddress() {
        //returns concatenated address field
        return self.fullAddress;
    };
};

//visitors[visitors.length] =new Visitor(1,"Ken","Jenson","1234 W. Main St.","Mapleton","Utah","84664","801-444-5555","ken@gmail.com",{google:true,yahoo:false,friend:true }, "notes")
//visitors[visitors.length] =new Visitor(2,"Ben","Jenson","1234 W. Main St.","Mapleton","Utah","84664","801-444-5555","ben@gmail.com",{google:true,yahoo:false,friend:false}, "notes")
visitors[visitors.length]= new Visitor(1,"Ken","Jenson","1234 W. Main St.","Mapleton","Utah","84664","ken@gmail.com" , "801-444-5555" ,{google:true,yahoo:false,friend:true }, "notes");
visitors[visitors.length]= new Visitor(2,"Ben","Jenson","1234 W. Main St.","Mapleton","Utah","84664","ben@gmail.com" , "801-444-5555" ,{google:true,yahoo:false,friend:false}, "notes");

function modelAddVisitor(inputarray) {
    //adds new visitor object to your array
    //abbreviated variables to help with possible confusion
    
    var src= '';
    var arr =[];

    for (const property in inputarray){
        if (inputarray[property].name == 'find-page'){
            src += inputarray[property].value + " "
        }
        else{
        arr.push(inputarray[property].value);
        }
        
     }
    Countid += 1
    visitors[visitors.length]= new Visitor( Countid, arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], src, arr[8]);
};

function modelDeleteVisitor(targID) {
    //removes visitor object with given 'id' from array
    var targ = findVisitorIndex(targID);
    if (targ != "does not exist"){
        visitors.splice(targ, 1);
    }

    let x=1;
};

function findVisitor(targID) {
    //returns visitor object with given 'id' from array
    ind = findVisitorIndex(targID)
    if (ind != -1){
        return visitors[ind];
    }
    
    return "does not exist";
};


function findVisitorIndex(targID) {
    //returns index in the array of the visitor object with given 'id'.
    //Handy when trying to delete an object

    function compID(curEl){
        console.log(curEl.id);
        return curEl.id == targID; 
    };

    var ind = visitors.findIndex(compID);
    return ind;
};

function modelUpdateVisitor(visitor) {
    //finds and updates a visitor object a your array
    //Only for extra credit 'edit' function
    let x=1;
};
