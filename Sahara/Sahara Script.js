// JavaScript source code



console.log("Hello ?"); //Test

var openb = document.getElementById("open");

var box = document.getElementById("box");

function open_box() { //Function to open the box
    box.style.display = "block";
    openb.style.display = "none";
}

function close_box() { //Function to close the box
    box.style.display = "none";
    openb.style.display = "block";
}

Username = null; Password = null;
function Input() {
    Username = document.getElementById("Username").value;
    Password = document.getElementById("Password").value;
    console.log("Username: ", Username, "Password: ", Password); //Test
};

/*

fetch('./Sahara users.json')
    .then(function (response) {
        return response.json();
    }).then(function (obj) {
        console.log(obj);
    }).catch(function (error) {
        console.error("Opps File not retireved!");
        console.error(error);
    });


//import users from './Sahara users.json' assert {type: 'json'};

//console.log(users);

/*
import java.io.File; 

File Test = canread("Sahara users.json");


import java.util.Scanner;

class MyClass {
    public static void main(string[] args) {
    scanner myObj = new Scanner(System.in);
        System.out.println("Enter username");

    string userName = myObj.nextLine();
        System.out.println("Username is: " + userName);
    }
}
*/

//<input type="file" id="Get_File"> </input> // Set type and Id



//window.addEventListener("DOMContentLoaded", (event) => (No error No Worky)
//window.onload = function ()

/* Unrelated
var isTabActive;

window.onfocus = function () {
    isTabActive = true;
};

window.onblur = function () {
    isTabActive = false;
};

// test
setInterval(function () {
    console.log(window.isTabActive ? 'active' : 'inactive');
}, 1000);
*/

window.addEventListener("DOMContentLoaded", function() { //NO LONGER IN USE

    const doc = document.getElementById("Get_File")
    console.log("Hallo from before the .Json code, Lets hope we go in") //Test
    if (doc) {
        doc.addEventListener("change", function () { console.log("Hallo ?!") /* THIS IS WHERE ISSUES OCCOUR. WE DON'T ENTER THIS FUNCTION */
            var read = document.getElementById("Get_File").files[0]; //Outline the file to be read
            var fileread = new FileReader(); console.log("Hallo from before online, do you copy?");
            fileread.onload = function (e) {
                var cont = e.target.result;
                var stuffs = JSON.parse(cont); // Making array of objects
                console.log(stuffs); // Index every object
            };
            fileread.readAsText(read); console.log("Hallo from within the .Json code");

        });

    };
    console.log("Hallo from the end if statement. Do you see this ?") //Test

});
console.log("Hallo from after the .Json, did we go into the code?") //Test


function Opened() { // Paswword generator
    javascript: (
        function Gener() {
            prompt('Your Secure Password:', //Pull up a browser promtp
                window.crypto.getRandomValues(new BigUint64Array(4)).reduce(
                    (prev, curr, index) => (
                        !index ? prev : prev.toString(36)
                    ) + (
                            index % 2 ? curr.toString(36).toUpperCase() : curr.toString(36)
                        )
                ).split('').sort(() => 128 -
                    window.crypto.getRandomValues(new Uint8Array(1))[0] // Get the random values for the password
                ).join('')
            );
        }
    )();
};  

console.log("Hallo, if you are reading this then it means the Java works and gets to this point"); //Test


//Basic inner .Json

const Admin_account = {Username:"Admin", Password: "Admin1", Type: "Superuser", ID: "000"} //Inbedded admin credentials
console.log(Admin_account.Username, ":", Admin_account.Password, ":", Admin_account.Type, ":", Admin_account.ID); //Test

account = {Username: [], Password: [], Type: [], ID: []}; //Empty Json template for data to be put into
console.log(account.Username[1], ":", account.Password[1], ":", account.Type[1], ":", account.ID[1]); //Test
New_ID = null;
ID();
Account_Input();

console.log(New_ID); //Test
New_Acc = 0;

function ID() {
    console.log("HAllo ?!"); //Test
    Temp_ID_Ad = 0; Temp_ID_Norm = null; //Initialise data
    Temp_string_Ad = JSON.stringify(Admin_account.ID);
    Temp_string_Norm = JSON.stringify(account.ID);

    try {
        Temp_ID_Ad = Interger.parseInt(Temp_string_Ad)
    } catch {
        Temp_ID_Ad = 0;
    }
    console.log(Temp_ID_Ad, "New ID would be", Temp_ID_Ad + 1); //Test and see what next ID would be

    try {
        Temp_ID_Norm = Interger.parseInt(Temp_string_Norm)
    } catch {
        Temp_ID_Norm = 1;
    }

    console.log("Hallo Do we get ere ? Norm is", Temp_ID_Norm); //Test
    if (Temp_ID_Norm == null) //If no accounts then make new with ID of 1
        New_ID = 1; 

    else if (Temp_ID_Norm =! null) //If there is already an account(s) then give ID of current highest +1
        New_ID = Temp_ID_Norm + 1;
}

function Account_Input() { //New Input function
    
    Username_new = document.getElementById("Username").value; //Get username input
    Password_new = document.getElementById("Password").value; //Get Password input
    New_Acc = New_ID + 1; //Create an initialiser fot the new account to be stored under

    account.Username[New_Acc] = Username_new;
    account.Password[New_Acc] = Password_new;
    account.Type[New_Acc] = "Standard";
    account.ID[New_Acc] = New_Acc;

    console.log(account.Username[New_Acc], ":", account.Password[New_Acc], ":", account.Type[New_Acc], ":", account.ID[New_Acc]); //Test 2
    let NeW_Account = {
        "Username": Username_new,
        "Password": Password_new,
        "Id": New_Acc
    }
   

    //localStorage.setItem('myStroage', JSON.stringify(account)); //Save the JSON file to local storage
    //var bob = JSON.parse(localStorage.getItem('myStorage')); //Retrieve the JSON file from local storage

    Hide();
}

function Hide(){ // A function to hide all the current elements on the screen
    var x = document.getElementById("Hide");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }

    var y = document.getElementById("Return"); // A function to return back to the home screen
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }

    var y = document.getElementById("Hidden"); // A function to hide log in objects until users log in
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
}

 
function Change_date() { // Function to add 3 months to the current date
    function add3Months(today) {
        var day = today.getDate(); // Get today's date and time
        today.setMonth(today.getMonth() + +3) // Add 3 months to today's date
        if (today.getDate() != day) // Fail safe incase of error
            today.setDate(0);
        return today;
    }
    
    console.log(add3Months(new Date())); // Internal check for testing 
    var change = add3Months(new Date());
    prompt('You Should change you Password on', change); // Promt to output the new date 3 months later
}


//EXPERIMANTATION//

function convertToJSON() {
    var username = document.getElementById('Username').value; //Get usernmae input
    var password = document.getElementById('Password').value; //Get password input
  
    var jsonObject = { //internal Json
      "UserName": username,
      "Password": password,
      "User Type": "Standard",
      "Accounnt ID": New_Acc,
    }
  
    document.getElementById('subbutton').value = JSON.stringify(jsonObject) //Convert when log-in button pressed
}
  

function saveToFile() {
    convertToJSON();
    var jsonObjectAsString = document.getElementById('subbutton').value; //Get the input from button
  
    var blob = new Blob([jsonObjectAsString], {
      //type: 'application/json' //Testing
      type: 'octet/stream'
    });
    console.log(blob); //Test
  
    var anchor = document.createElement('a')
    anchor.download = "Sahara_user.json"; // Downloads the username and password entered on the button press
    anchor.href = window.URL.createObjectURL(blob);
    anchor.click();
  
    console.log(anchor); //Output the anchor to the log for testing purposes only
  
    document.getElementById('subbutton').append(anchor)
}

function Log_in(){ // Function when log in button pressed
    Account_Input();
    saveToFile(); 
    saveToLocal();
}

var z = 0;
var first = document.getElementById('account_box_container'); //Get the first account box and dupelicate it
function Add() {
    z++;
    var dupe = first.cloneNode('true'); // Clones the div
    dupe.id = 'account_box_container' + z; // Gives a new ID of the original +1
    first.parentNode.appendChild(dupe);
    console.log('Function Test: Do we get here log #01') //Test
}

/* Saving a JSON file Locally */

function saveToLocal(){
    var jsonObjectAsString = document.getElementById('subbutton').value;

    var username_L = document.getElementById('Username').value; // Get the inputted Username
    var password_L = document.getElementById('Password').value; // Get the inputted Password
    var details = ["Username: ",username_L,"Password: ", password_L,"Account Type: ","Standard","Account ID: ", New_Acc]; //Save to JSON
    localStorage.setItem("Sahara_Users", JSON.stringify(details)) // Store the JSON to local storage
    loadLocal();
}

var load;
saveToLocal();
loadLocal();
console.log("Hallo ? do we get to here ???"); //Test
function loadLocal (){ //Load Json file from internal storage
    load = JSON.parse(localStorage.getItem("Sahara_Users")); //Load the item 'Sahara_Users' from local storage
    console.log(load); //Output the content from var load to console as a test
    ThisAccount(); 
}

function ThisAccount() { // A function to copy Json contents to the HTML page
    console.log(load); // Test to ensure load is not empty and can be accessed
    document.getElementById("This_Account").innerHTML=load; //Copy the content of 'load' to the HTML doc
    console.log("HI"); // Test to ensure the code gets to this point and the previous line has run
}