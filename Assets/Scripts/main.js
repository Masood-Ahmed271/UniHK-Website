// Author: Masood AHMED

//  *********** For Dashboard Specifically Start Below *******************

// Important Variables

const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text"),
searchBox = document.getElementsByClassName("searchbox"),
searchForm = document.getElementsByClassName("search-form");


// For toggling functions in Dashboard
toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
    // searchBox.removeChild(searchForm);
    
})

//  *********** For Dashboard Specifically Ends Here *******************


// Login Function at the moment
function login(){
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    if (email.value == "mangimasood2000@gmail.com" && password.value=="1234check"){
        window.location.href = "Dashboard.html";
    }
    else{
        alert("Wrong Credentials");
    }
}


//  A function to redirect the signUp button
// Signup button underdevelopment 
function signUp(){
    window.location.href = "underdevelopment.html";
}


//  A function to redirect the logout button
// Signup button underdevelopment 
function logout(){
    window.location.href = "index.html";
}


// Making header responsive
$(function(){
    $(".toggle").on("click", function(){
        if($(".menu").hasClass("active")){
            $(".menu").removeClass("active");
            $(this).find("a").html("<ion-icon name='menu-outline'></ion-icon>");
        } else {
            $(".menu").addClass("active");
            $(this).find("a").html("<ion-icon name='close-outline'></ion-icon>");
        }
    })
});