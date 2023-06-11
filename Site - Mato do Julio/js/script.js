//Function Tab (adicionar function sub-tablink - sumir button)

function tabbers(evt, Name) {
    var i, x, y, z, tablinks, subtablinks;
    x = document.getElementsByClassName("description");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" red", "");
    }

    z = document.getElementsByClassName("sub-description");
    for (i = 0; i < z.length; i++) {
      z[i].style.display = "none";
    }

    subtablinks = document.getElementsByClassName("sub-tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" red", "");
    }


   // y = document.getElementsByClassName("sub-tablink");
   // for (i = 0; i < y.length; i++) {
   //   y[i].style.display = "none";
   //}


    document.getElementById(Name).style.display = "block";
    evt.currentTarget.className += " red";
  }

//Function button back to top
let backTop = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    backTop.style.display = "block";
  } else {
    backTop.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}