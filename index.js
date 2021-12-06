let navbtn=document.getElementById("nav-btn");
let logo=document.getElementById("logo");
let searchBtn=document.getElementById("searchbtn");
let searchField=document.getElementById("searchField");
console.log(searchBtn);
console.log(searchField);
//For hiding logo and search button from Navbar Menu
navbtn.addEventListener("click",()=>{
    logo.classList.toggle('inactive');
    searchBtn.classList.toggle('inactive');
    
})
//For active Search field 
searchBtn.addEventListener("click",()=>{
    searchField.classList.toggle('onactive');
})
