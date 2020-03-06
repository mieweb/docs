var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;
  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
};
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function checkCookie() {
  var syslink = getUrlParameter('syslink');
  if (syslink != "" && syslink != null) {
    setCookie("syslink", syslink, 1);
    return syslink;
  } else {
    if (getCookie("syslink") != "" && getCookie("syslink") != null && getCookie("syslink") != 'nosystem') {
      return getCookie("syslink");
    } else {
      var sys_control = $('.system_link');
      sys_control.hide();
      return 'nosystem';
    }
  }
}
function systemBar(syslink) {
  if (syslink != 'nosystem') {
    $('.system_link').find('.sys_input').val(syslink);
  }
}
function system_link_build(syslink) {
  $('.slink').each(function () {
    var slink = $(this);
    var shref = slink.attr('href');
    var scgi = shref.split('#SYSLINK');
    slink.attr('href', syslink + scgi[1]);
  });
}


function openNavElement(elem){
  elem.parentElement.querySelector(".nested").classList.toggle("active");
  elem.classList.toggle("nav-toggle-down");
  if (elem.hasAttribute("data-parent")) {
    openNavElement(document.querySelector('[data-name="'+elem.dataset.parent+'"]'));
  }
}
$(document).ready(function(){
  var myDefaultWhiteList = $.fn.popover.Constructor.Default.whiteList;

  // To allow table elements
  myDefaultWhiteList.form = [];

  $('body').on('submit', '.sys_form', function (e) {
    e.preventDefault();
    var form = $(this);
    var sys = form.find('.sys_input').val();
    if (sys != '') {
      location.href = '?syslink=' + sys;
    } else {
      location.href = '?syslink=nosystem';
    }

  });
  // System Links
  var sys_control = $('.system_link');
  var link = $('.slink, a[href ^= "http://system"], a[href ^= "https://system"]');
  syslink = checkCookie();
  systemBar(syslink);
  /**/
  if (syslink != 'nosystem') {
    $('.sys_input').val(syslink);
    link.each(function () {
      if ($(this).data('cgi')) {
        var scgi = $(this).data('cgi');
      }else{
        var href = $(this).attr('href').split('://system/?');
        var scgi = (href[1])?href[1]:'';

      }
      
      $(this).attr('target', '_blank');
      $(this).attr('href', syslink + '?' + scgi);
      console.log($(this).attr('href'));
    });


  } else {
    
    link.attr('href', '#');
    link.addClass('nosystem');
    sys_control.find('.sys_input').val('');
    sys_control.hide();
    link.popover({

        html: true,
        sanitize: false,
        'container': '.content',
        'content': '<form class="sys_form form"><div class="input-group input-group-sm"><input placeholder="Enter system URL" class="form-control input-sm sys_input" style="width:300px;" type="text"/><span class="input-group-btn"><button class="btn btn-primary btn-sm sys_submit">Submit</button></span></div><span id="helpBlock" class="form-text" style="font-size:11px;">The page will refresh. If your system URL is valid you will be able to <br> click on system links.</span></form>',
        'placement': 'top',
        'template': '<div style="max-width:none;" class="popover" role="tooltip"><div class="arrow"></div><h3 style="margin-bottom:0px;padding-bottom:8px;font-size:14px;" class="popover-header"></h3><div class="popover-body"></div></div>'
      
    });
  }
  $('.content').on('click', '.nosystem', function (e) {
    e.preventDefault();
  });

  var pagebody = document.querySelector("body"),
      pagename = pagebody.dataset.page;
  if(pagename !== '' && pagename !== '_index') {

    var pagenavitem = document.querySelector('[data-name="'+pagename+'"]');
    if (!pagenavitem.hasAttribute("data-parent") && !pagenavitem.classList.contains("root-level")) {
      openNavElement(pagenavitem);
    } else if (pagenavitem.classList.contains("root-level"))  {
    } else {
      pagenavparent = document.querySelector('[data-name="'+pagenavitem.dataset.parent+'"]');
      openNavElement(pagenavparent);
    }
    if(pagenavitem.classList.contains('nav-toggle')) {
      pagenavitem.nextElementSibling.classList.toggle("active-item");
      if(!pagenavitem.parentElement.querySelector(".nested").classList.contains('active')) {
        pagenavitem.parentElement.querySelector(".nested").classList.toggle("active");
        pagenavitem.classList.toggle("nav-toggle-down");
      }
    }else{
      pagenavitem.querySelector('a').classList.toggle("active-item");
    }
  }
  var toggler = document.getElementsByClassName("nav-toggle");
  var i;
  for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function() {
      this.parentElement.querySelector(".nested").classList.toggle("active");
      this.classList.toggle("nav-toggle-down");
    });
  }
});


$(document).ready(function () {

var TOC = document.getElementById('TOC'),
  headings = document.querySelectorAll('h2, h3, h4, h5, h6'),
  parentLevel = 1,
  cursorNode = TOC;

for (var i = 0, len = headings.length; i < len; ++i) {

  var currentHeading = headings[i];
  var newLevel = parseInt(currentHeading.tagName.substr(1, 1) - 1);
  
  var diff = newLevel - parentLevel;
  if (diff > 0) {
    var containerLiNode = cursorNode.lastChild;
    var ulNode = document.createElement('UL')
    containerLiNode.appendChild(ulNode);
    cursorNode = ulNode;
    parentLevel = newLevel;
  }
  if (diff < 0) {
    while (0 !== diff++) {
      cursorNode = cursorNode.parentNode.parentNode;
    }
    parentLevel = newLevel;
  }

  var liNode = document.createElement('LI');
  if (currentHeading.hasAttribute('id')) {
    var link = document.createElement('A');
    link.setAttribute('href', '#' + currentHeading.getAttribute('id'));
    link.appendChild(document.createTextNode(currentHeading.textContent))
    liNode.appendChild(link);
  } else {
    liNode.appendChild(document.createTextNode(currentHeading.textContent));
  }
  cursorNode.appendChild(liNode);
}
  var searchForm = $('#collapse-search');
  if (window.innerWidth <= 576) {
    $('#collapse-search').collapse('hide');
  }
  localStorage.setItem("collapse-search", "");
    $('#sidebarCollapse').on('click', function () {
        $(this).toggleClass('active');
        $('#sidebar').toggleClass('active');
    });
  $('#collapse-search-btn').mouseup(function(){
    if(searchForm.hasClass('show')) {
      localStorage.setItem("collapse-search", "open");
    }else{
      localStorage.setItem("collapse-search", "closed");
    }
     console.log(localStorage.getItem("collapse-search"));
  });
  $('#collapse-search')
    .on('show.bs.collapse', function (e, other) {
    console.log(e, other);
    
      localStorage.setItem("collapse-search", "open");
    })
    .on('hide.bs.collapse', function () {
      localStorage.setItem("collapse-search", "closed");
    });
  $(window).resize(function () {
    var searchState = localStorage.getItem("collapse-search");
    console.log(searchState);
    
    if (window.innerWidth < 576 && searchState !== 'open') {
      $('#collapse-search').collapse('hide');
    }
    if (window.innerWidth >= 576) {
      $('#collapse-search').collapse('show');
    }
  });
});
