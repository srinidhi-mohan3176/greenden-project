var sidenav = document.getElementById("sidenav");
var menubar = document.getElementById("menubar");
var closeNav = document.getElementById("close-nav");  // Get the close button

// Open the sidebar when menu icon is clicked
menubar.addEventListener("click", function () {
  sidenav.style.right = "0";
});

// Close the sidebar when 'X' is clicked
closeNav.addEventListener("click", function () {
  sidenav.style.right = "-50%";
});



//search

var search=document.getElementById("search")
var productcontainer=document.getElementById("productcontainer")
var productlist=productcontainer.querySelectorAll("div")

search.addEventListener("keyup",function() {

    var enteredvalue=event.target.value.toUpperCase()

    for(count=0;count<productlist.length;count=count+1)
    {
        var productname=productlist[count].querySelector("h1").textContent

        if(productname.toUpperCase().indexOf(enteredvalue)<0)
        {
            productlist[count].style.display="none"
        }
        else
        {
            productlist[count].style.display="block"
        }
    }
    
})