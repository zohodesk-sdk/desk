(function(){
var acc = document.getElementsByClassName('accordion');
var list = document.getElementsByClassName('item');
var content = document.getElementsByClassName('resource');
var i;

var toggleNavbar = function () {
  var navbar = document.getElementById('tocify-wrapper');
  var page_wrapper = document.getElementById('page-wrapper');
  if (navbar.style.display === 'block' ) {
    navbar.style.display = 'none';
    page_wrapper.style.left = 0;
    return;
  }
  navbar.style.display = 'block';
};

var scrollTo = function (id) {
  var element = document.getElementById(id);
  if (element !== null) {
    element.scrollIntoView({
      behavior: 'smooth'
    });
  }
};

var registerAccordionClick = function() {
  var activeAcc = document.querySelector('.accordion.active');
  var activeItem = document.querySelector('.item.active');

  if (activeAcc && activeAcc !== this) {
    activeAcc.classList.toggle('active');
    var siblingEle = activeAcc.nextElementSibling;
    if (siblingEle) {
     siblingEle.classList.toggle('show');
   }
  }
  window.location.hash = this.getElementsByTagName('a')[0].getAttribute("data-uniq-element");

  if (activeItem) {
    activeItem.classList.toggle('active');
  }
  this.classList.toggle('active');
  var siblingEle = this.nextElementSibling
  if (siblingEle) {
    siblingEle.classList.toggle('show');
  }
  if (screen.width < 930) {
    toggleNavbar();
  }
  var id = this.children[0].attributes['data-uniq-element'].value;
  var actText = this.children[0].text.trim();
  document.getElementById('fixed-band').textContent=actText;
  scrollTo(id);
};

var registerItemClick = function () {
  var activeItem = document.querySelector('.item.active');
  if (activeItem && activeItem !== this) {
    activeItem.classList.toggle('active');
  }
  window.location.hash = this.getElementsByTagName('a')[0].getAttribute("data-uniq-element");
  if (activeItem === this) {
    return;
  }
  this.classList.toggle('active');
  if (screen.width < 930) {
    toggleNavbar();
  }
  var id = this.children[0].attributes['data-uniq-element'].value;
  scrollTo(id);
};

var elementInViewport = function(element) {
  var top = element.offsetTop;
  var height = element.offsetHeight;
  var boundingOffsetTop = element.getBoundingClientRect().top;

  while(element.offsetParent) {
    element = element.offsetParent;
    top += element.offsetTop;
  }

  return (
    top < (window.pageYOffset + window.innerHeight) &&
    (top + height) > window.pageYOffset &&
    boundingOffsetTop < 50
  );
}

function makeAsActive(acc, item) {
  acc.classList.add('active');
  var siblingEle = acc.nextElementSibling;
  if (siblingEle) {
    siblingEle.classList.add('show');
  }
  if (item) {
    item.classList.add('active');
    window.location.hash = item.getElementsByTagName('a')[0].getAttribute("data-uniq-element");
  } else {
    window.location.hash = acc.getElementsByTagName('a')[0].getAttribute("data-uniq-element");
  }
}

function makeAsInactive(acc, item) {
  acc.classList.remove('active');
  var siblingEle = acc.nextElementSibling;
  if (siblingEle) {
    siblingEle.classList.remove('show');
  }
  if (item) {
    item.classList.remove('active');
  }
}

var registerTocifyScroll = function () {
  for (i = 0; i < content.length; i++) {
    if(elementInViewport(content[i])) {
      var visibleElement = document.querySelector(`[data-uniq-element=${content[i].nextElementSibling.id}]`).parentElement;
      var activeItem = document.querySelector('.item.active');
      var activeAcc = document.querySelector('.accordion.active');

      if (activeItem !== visibleElement && visibleElement !== activeAcc) {
        if (activeAcc) {
          makeAsInactive(activeAcc, activeItem);
        }
        var isHeader = visibleElement.classList.contains('accordion');
        var acc = isHeader ? visibleElement : visibleElement.parentElement.previousElementSibling;
        var item = isHeader ? null : visibleElement
        makeAsActive(acc, item);
        document.getElementById('fixed-band').textContent=acc.innerText;
        break;
      }
    }
  }
};

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', registerAccordionClick, false);
}

for (i = 0; i < list.length; i++) {
  list[i].addEventListener('click', registerItemClick, false);
}

window.addEventListener('scroll', registerTocifyScroll, false);

})();

(function(global) {
    var toggle_visibility;

    global.toggle_visibility=toggle_visibility;

    function toggle_visibility(parent,classnames) {
        var escaped_classname = classnames.replace(".", "\\.");
        var elements = document.getElementsByClassName(escaped_classname);
        for(var i=0; i < elements.length; i++) {
          elements[i].classList.toggle('show');
        }
        if (parent.innerText === 'Show Attributes') {
          parent.innerText = 'Hide Attributes';
        } else {
          parent.innerText = 'Show Attributes';
        }
    }

    var toggleNavbar = function () {
      var navbar = document.getElementById('tocify-wrapper');
      var page_wrapper = document.getElementById('page-wrapper');
      if (navbar.style.display === 'block' ) {
        navbar.style.display = 'none';
        page_wrapper.style.left = 0;
        return;
      }
      navbar.style.display = 'block';
    };

    var navbar_toggler = document.getElementById('navbar-toggle');
    navbar_toggler.addEventListener('click', toggleNavbar, false);
 })(window);

 // This script is to toggling between signin and access product button

 if(window.zohouser && (Object.keys(zohouser).length === 0))
   {
     document.getElementsByClassName('access')[0].style.display='none'
     document.getElementsByClassName('signing')[0].style.display='block'
   }
