//Function Tab 
function tabbers(evt, Name, Class, Section) {
  //hidden description
  x = document.getElementsByClassName("description-"+Section);
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  y = document.getElementsByClassName("description-main-"+Section);
  for (i = 0; i < y.length; i++) {
    y[i].style.display = "none";
  }

  z = document.getElementsByClassName("sub-description-"+Section);
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

  //mobile tab
      case 'tab-secundary-mamiferos-mobile':
      tsmm = document.getElementsByClassName("tab-secundary-mamiferos-mobile");
      for (i = 0; i < tsmm.length; i++) {
      tsmm[i].style.display = "block";
    }

      tsrm = document.getElementsByClassName("tab-secundary-repteis-mobile");
      for (i = 0; i < tsrm.length; i++) {
      tsrm[i].style.display = "none";
    }

      tsam = document.getElementsByClassName("tab-secundary-aves-mobile");
      for (i = 0; i < tsam.length; i++) {
      tsam[i].style.display = "none";
    }
      break;

      case 'tab-secundary-repteis-mobile':
      tsrm = document.getElementsByClassName("tab-secundary-repteis-mobile");
      for (i = 0; i < tsrm.length; i++) {
      tsrm[i].style.display = "block";
    }

      tsmm = document.getElementsByClassName("tab-secundary-mamiferos-mobile");
      for (i = 0; i < tsmm.length; i++) {
      tsmm[i].style.display = "none";
    }

      tsam = document.getElementsByClassName("tab-secundary-aves-mobile");
      for (i = 0; i < tsam.length; i++) {
      tsam[i].style.display = "none"; 
    }
      break;

      case 'tab-secundary-aves-mobile':
      tsam = document.getElementsByClassName("tab-secundary-aves-mobile");
      for (i = 0; i < tsam.length; i++) {
      tsam[i].style.display = "block"; 
    }
      
      tsmm = document.getElementsByClassName("tab-secundary-mamiferos-mobile");
      for (i = 0; i < tsmm.length; i++) {
      tsmm[i].style.display = "none";
    }

      tsrm = document.getElementsByClassName("tab-secundary-repteis-mobile");
      for (i = 0; i < tsrm.length; i++) {
      tsrm[i].style.display = "none";
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
      
      tsm = document.getElementsByClassName("tab-secundary-mamiferos-mobile");
      for (i = 0; i < tsm.length; i++) {
      tsm[i].style.display = "none";
    }

      tsr = document.getElementsByClassName("tab-secundary-repteis-mobile");
      for (i = 0; i < tsr.length; i++) {
      tsr[i].style.display = "none";
    }

      tsa = document.getElementsByClassName("tab-secundary-aves-mobile");
      for (i = 0; i < tsa.length; i++) {
      tsa[i].style.display = "none";
    }
  }

  //function tablink
  tablinks = document.getElementsByClassName("main-tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" checked", "");
  }

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" checked", "");
  }
  
  tablinks = document.getElementsByClassName("sub-tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" checked", "");
  }

  document.getElementById(Name).style.display = "block";
  evt.currentTarget.className += " checked";
}

//function toggle
var theToggle = document.getElementById('toggle');

// hasClass
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

theToggle.onclick = function() {
   toggleClass(this, 'on');
   return false;
}



//function slider
$(document).ready(function(){
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    dots: true,
    fade: true,
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider-for',
    vertical: true,
    centerMode: true,
    focusOnSelect: true
  });
});

$(document).ready(function(){
  $('.slider-for-mobile').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    dots: true,
    fade: true,
    asNavFor: '.slider-nav-mobile'
  });

  $('.slider-nav-mobile').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider-for-mobile',
    vertical: true,
    centerMode: true,
    focusOnSelect: true
  });
});

$(document).ready(function() {
  $('.slideshow').slick({
    arrows: true, // Exibe as setas de navegação
    dots: true, // Exibe as miniaturas
    appendDots: '.slideshow-thumbnails', // Elemento para exibir as miniaturas
    prevArrow: '<button type="button" class="slick-prev"><</button>', // Código HTML para a seta de navegação anterior
    nextArrow: '<button type="button" class="slick-next">></button>', // Código HTML para a seta de navegação seguinte
  });
});

//function button back-top
let backTop = document.getElementsByClassName("back-top");

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
}