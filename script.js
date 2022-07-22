var  menuIcon=document.querySelector(".menuicon");
var sidebar=document.querySelector(".sidebar");
var conatiner=document.querySelector(".container");
menuIcon.onclick=function()
{
    sidebar.classList.toggle("small-sidebar");
    conatiner  .classList.toggle("large-container");
}