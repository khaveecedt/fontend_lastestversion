
function addclass1()
{
    var element1=document.getElementById("k4");
    var element2=document.getElementById("k8");
    element1.classList.add("on")
    element2.classList.remove("on")
}
function addclass2()
{
    var element1=document.getElementById("k8");
    var element2=document.getElementById("k4");
    element1.classList.add("on")
    element2.classList.remove("on")
}
const logo = document.getElementById('logo');
window.onscroll = () => {
    const nav = document.querySelector('#navbar');
    if(this.scrollY <= 10) 
    {
        nav.className = ''; 
        logo.src="images/main_logo_before.png";
    }
    else
    {
        nav.className = 'scroll';
        logo.src="images/main_logo_after.png";
    }
    if(this.scrollY <= 10000) card.className = 'card hidden';
};
var login_click=document.getElementById("login-click");
var regis=document.getElementById("regis")
var log=document.getElementById("log")
var select=document.getElementById("select")
var register=document.getElementById("register")
var login=document.getElementById("login")
login_click.addEventListener("click", function() 
{
    regis.classList.remove("selected")
    regis.classList.remove("unselect")
    regis.classList.add("selected")
    log.classList.remove("selected")
    log.classList.remove("unselect")
    log.classList.add("unselect")
    select.style.display = "flex";
    register.style.display = "block";
});
var exit=document.getElementById("exit");
exit1.addEventListener("click",function()
{
    select.style.display = "none";
    register.style.display = "none";
    login.style.display = "none";
});
exit2.addEventListener("click",function()
{
    select.style.display = "none";
    register.style.display = "none";
    login.style.display = "none";
});
regis.addEventListener("click",function()
{
    regis.classList.remove("selected")
    regis.classList.remove("unselect")
    regis.classList.add("selected")
    log.classList.remove("selected")
    log.classList.remove("unselect")
    log.classList.add("unselect")
    register.style.display = "block";
    login.style.display = "none";
});
log.addEventListener("click",function()
{
    regis.classList.remove("selected")
    regis.classList.remove("unselect")
    regis.classList.add("unselect")
    log.classList.remove("selected")
    log.classList.remove("unselect")
    log.classList.add("selected")
    login.style.display = "block";
    register.style.display = "none";
});
var card = document.getElementById("card");
var profile=document.getElementById("profile");
profile.addEventListener("click",function()
{
    card.classList.toggle("hidden")
});
var history_btn=document.getElementById("history")
var his=document.getElementById("history-page")
history_btn.addEventListener("click",function()
{
    his.classList.toggle("hidden")
});
var closehispage=document.getElementById("exit3");
closehispage.addEventListener("click",function()
{
    his.classList.toggle("hidden")
});
const deleteButtons = document.querySelectorAll('.delete-icon');

// Add click event listener to each delete button
deleteButtons.forEach(deleteButton => {
    deleteButton.addEventListener('click', function () {
        // Display a confirmation dialog
        const isConfirmed = confirm('ต้องการลบกลอนนี้ใช่หรือไม่?');

        // Check if the user confirmed the deletion
        if (isConfirmed) {
            // Remove the entire parent <li> element when confirmed
            const listItem = this.closest('li');
            listItem.remove();
        }
    });
});
const postbutton=document.querySelectorAll('.post')
postbutton.forEach(postbutton => {
    postbutton.addEventListener('click', function () {
        // Display a confirmation dialog
        const postconfirm = confirm('ต้องการโพสต์กลอนนี้ใช่หรือไม่?');
    });
});
var posted=document.getElementById("allpostpage")
var posted_btn=document.getElementById("seeall")
posted_btn.addEventListener("click",function()
{
    posted.classList.toggle("hidden")
});
var closepostedpage=document.getElementById("exit4");
closepostedpage.addEventListener("click",function()
{
    posted.classList.toggle("hidden")
});