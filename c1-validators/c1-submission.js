let firstName = "James";
let lastName = "Smith";
let age = 34;
let isMarried = true;
let city = "San Jose";
let state = "California";
let postalCode = "CA";

// Provide solution code here for Validating FirstName
if(firstName != null){
    console.log("First name is defined")

}else{
    console.log("First name value not defined")
}  

if( typeof(firstName) == "string"){
    console.log("firstName is type of String")
}else{
    console.log("firstName is not type of String")
}

// Provide solution code here for Validating LastName
if( typeof(lasttName) == "string"){
    console.log("lastName is type of String")
}else{
    console.log("Last Name value must be of type String value")
}

// Provide solution code here for Validating Age
if(age != null){
    console.log("age is defined")

}else{
    console.log("Age value must not be undefined")
}  

if( typeof(age) == "number"){
    console.log("age is type of number")
}else{
    console.log("Age value must be of type Number")
}

if(age >18 && age <60){
    console.log("valid age limit");
}else{
    console.log("Age value should be between 18 and 60")
}

// Provide solution code here for Validating isMarried
if( typeof(isMarried) == "boolean"){
    console.log("isMarried i stype of Boolean")
}else{
    console.log("IsMarried value must be of type Boolean")
}

// Provide solution code here for Validating City
if( typeof(city) == "string"){
    console.log("City is type of String")
}else{
    console.log("City value must be of type String")
}

// Provide solution code here for Validating State
if( typeof(state) == "string"){
    console.log("State is type of String")
}else{
    console.log("State value must be of type String")
}
 
// Provide solution code here for Validating Postal Code
if(postalCode != null){
    console.log("Postal Code is defined")

}else{
    console.log("Postal Code value must not be undefined")
}  

if( typeof(postalCode) == "string"){
    console.log("Postal Code is type of String")
}else{
    console.log("Postal Code value must be of type String")
}
 