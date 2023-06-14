//Function Tab 
function tabbers(evt, Name) {
    var i, x, y, z, tablinks;

    //hidden description
    x = document.getElementsByClassName("description");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }

    y = document.getElementsByClassName("description-main");
    for (i = 0; i < y.length; i++) {
      y[i].style.display = "none";
    }
    
    z = document.getElementsByClassName("sub-description");
    for (i = 0; i < z.length; i++) {
      z[i].style.display = "none";
    }

    //hidden sub-tablink
    /*tsm = document.getElementsByClassName("tab-secundary-mamiferos");
    for (i = 0; i < tsm.length; i++) {
      tsm[i].style.display = "none";
    }

    tsr = document.getElementsByClassName("tab-secundary-repteis");
    for (i = 0; i < tsr.length; i++) {
      tsr[i].style.display = "none";
    }

    tsa = document.getElementsByClassName("tab-secundary-aves");
    for (i = 0; i < tsa.length; i++) {
      tsa[i].style.display = "none";
    }*/

    if (document.getElementsByClassName("tab-secundary-mamiferos")){
      tsr = document.getElementsByClassName("tab-secundary-repteis");
      for (i = 0; i < tsr.length; i++) {
      tsr[i].style.display = "none";
      }

      tsa = document.getElementsByClassName("tab-secundary-aves");
      for (i = 0; i < tsa.length; i++) {
      tsa[i].style.display = "none";
      }

    } else if (document.getElementsByClassName("tab-secundary-repteis")){
      tsm = document.getElementsByClassName("tab-secundary-mamiferos");
      for (i = 0; i < tsm.length; i++) {
      tsm[i].style.display = "none";
      }

      tsa = document.getElementsByClassName("tab-secundary-aves");
      for (i = 0; i < tsa.length; i++) {
      tsa[i].style.display = "none"; 
      }
    
    } else {
      tsm = document.getElementsByClassName("tab-secundary-mamiferos");
      for (i = 0; i < tsm.length; i++) {
      tsm[i].style.display = "none";
      }

      tsr = document.getElementsByClassName("tab-secundary-repteis");
      for (i = 0; i < tsr.length; i++) {
      tsr[i].style.display = "none";
      }

    }

    //function tablink
    tablinks = document.getElementsByClassName("main-tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" red", "");
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" red", "");
    }
    
    tablinks = document.getElementsByClassName("sub-tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" red", "");
    }

    document.getElementById(Name).style.display = "block";
    evt.currentTarget.className += " red";
  }

//function button back-top
let backTop = document.getElementByClassName("back-top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    backTop.style.display = "block";
  } else {
    backTop.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}