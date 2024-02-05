// JavaScript source code

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


fetch('./Sahara users.json')
    .then(function (response) {
        return response.json();
    }).then(function (obj) {
        console.log(obj);
    }).catch(function (error) {
        console.error("Opps File not retireved!");
        console.error(error);
    });


import users from './Sahara users.json' assert {type: 'json'};

consol.log(users);

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
