// JavaScript source code



console.log("Hello ?");

var openb = document.getElementById("open");

var box = document.getElementById("box");

function open_box() {
    box.style.display = "block";
    openb.style.display = "none";
}

function close_box() {
    box.style.display = "none";
    openb.style.display = "block";
}


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

window.addEventListener("DOMContentLoaded", function() {

    const doc = document.getElementById("Get_File")
    console.log("Hallo from before the .Json code, Lets hope we go in")
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
    console.log("Hallo from the end if statement. Do you see this ?")

});
console.log("Hallo from after the .Json, did we go into the code?")


function Opened() {
    javascript: (
        function Gener() {
            prompt('Your Secure Password:',
                window.crypto.getRandomValues(new BigUint64Array(4)).reduce(
                    (prev, curr, index) => (
                        !index ? prev : prev.toString(36)
                    ) + (
                            index % 2 ? curr.toString(36).toUpperCase() : curr.toString(36)
                        )
                ).split('').sort(() => 128 -
                    window.crypto.getRandomValues(new Uint8Array(1))[0]
                ).join('')
            );
        }
    )();
};  

console.log("Hallo, if you are reading this then it means the Java works and gets to this point");