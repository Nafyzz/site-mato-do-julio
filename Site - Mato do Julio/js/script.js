//Function Tab 
function tabbers(evt, Name, Class) {
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
  switch (Class) {
    case 'tab-secundary-mamiferos':
      tsm = document.getElementsByClassName("tab-secundary-mamiferos");
      for (i = 0; i < tsm.length; i++) {
      tsm[i].style.display = "block";
    }

      tsr = document.getElementsByClassName("tab-secundary-repteis");
      for (i = 0; i < tsr.length; i++) {
      tsr[i].style.display = "none";
    }

      tsa = document.getElementsByClassName("tab-secundary-aves");
      for (i = 0; i < tsa.length; i++) {
      tsa[i].style.display = "none";
    }
      break;
    case 'tab-secundary-repteis':
      tsr = document.getElementsByClassName("tab-secundary-repteis");
      for (i = 0; i < tsr.length; i++) {
      tsr[i].style.display = "block";
    }

      tsm = document.getElementsByClassName("tab-secundary-mamiferos");
      for (i = 0; i < tsm.length; i++) {
      tsm[i].style.display = "none";
    }

      tsa = document.getElementsByClassName("tab-secundary-aves");
      for (i = 0; i < tsa.length; i++) {
      tsa[i].style.display = "none"; 
    }
      break;
    case 'tab-secundary-aves':
      tsa = document.getElementsByClassName("tab-secundary-aves");
      for (i = 0; i < tsa.length; i++) {
      tsa[i].style.display = "block"; 
    }
      
      tsm = document.getElementsByClassName("tab-secundary-mamiferos");
      for (i = 0; i < tsm.length; i++) {
      tsm[i].style.display = "none";
    }

      tsr = document.getElementsByClassName("tab-secundary-repteis");
      for (i = 0; i < tsr.length; i++) {
      tsr[i].style.display = "none";
    }
      break;
    default:
      tsm = document.getElementsByClassName("tab-secundary-mamiferos");
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
    }
  }

  //function tablink
  tablinks = document.getElementsByClassName("main-tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" checked", "");
  }

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < y.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" checked", "");
  }
  
  tablinks = document.getElementsByClassName("sub-tablink");
  for (i = 0; i < z.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" checked", "");
  }

  document.getElementById(Name).style.display = "block";
  evt.currentTarget.className += " checked";
}

//function button back-top
/*let backTop = document.getElementsByClassName("back-top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backTop.style.display = "block";
  } else {
    backTop.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}*/