var labels=document.querySelectorAll(".form-control label");
labels.forEach(label=>{
    label.innerHTML=label.innerText.split('').
    map((letter,ind)=>`<span style="transition-delay: ${ind*100}ms">${letter}</span>`).join('');
})
var username="admin";
var pass="12345";
let submit=document.getElementById("submit");
submit.addEventListener('click',()=>{
    let inputUsername=document.getElementById("username");
    let inputPassword=document.getElementById("password");
    if(username==inputUsername.value && pass==inputPassword.value)
    {
       alert("successfully login");
    }
    else{
        alert("Wrong Attemp");

    }

})
