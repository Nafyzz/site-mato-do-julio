//Function vertical tab

function tabbers(evt, Name) {
    var i, x, tablinks;
    x = document.getElementsByClassName("description");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" red", "");
    }
    document.getElementById(Name).style.display = "block";
    evt.currentTarget.className += " red";
  }