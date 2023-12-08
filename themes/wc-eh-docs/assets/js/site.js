import lunr from 'lunr';
import Swal from 'sweetalert2';
import copy from 'copy-to-clipboard';
import * as EmailValidator from 'email-validator';

// FUNCTIONS

function padTocLinks () {
  const tocListItem = Array.from(document.querySelectorAll('#TableOfContents ul li'));
  tocListItem.forEach(item => {
    if (item.children[1] && item.children[1].nodeName === 'A') {
      item.children[0].setAttribute('style', 'position: absolute; top: 0; bottom:0; right: 0; left: 0;');
    }
  })
}

function getUrlParameter(sParam) {
  const sPageURL = decodeURIComponent(window.location.search.substring(1));
  const sURLVariables = sPageURL.split('&');
  let sParameterName;
  for (let i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
};

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  const expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
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
  const syslink = getUrlParameter('syslink');
  if (syslink != "" && syslink != null) {
    setCookie("syslink", syslink, 1);
    return syslink;
  } else {
    if (getCookie("syslink") != "" && getCookie("syslink") != null && getCookie("syslink") != 'nosystem') {
      return getCookie("syslink");
    }
    return 'nosystem';
  }
}

function openNavElement(elem, pagename) {
  if (elem) {
    if (elem.hasAttribute("data-parent")) {
      document.querySelector(`[data-name="${elem.dataset.parent}"]`).setAttribute('aria-expanded', true);
      openNavElement(document.querySelector(`[data-name="${elem.dataset.parent}"]`));
    }
    if (pagename) {
      document.querySelector(`[data-name="${pagename}"]`).classList.add('active-nav');
    }
    if (document.querySelector(`[id="collapse-${elem.dataset.name}"]`)) {
      document.querySelector(`[id="collapse-${elem.dataset.name}"]`).classList.add('show');
    }
    elem.setAttribute('aria-expanded', true);
    elem.classList.add('active-nav');
  }
}

// when any button with the .btn-feedback class is clicked, using native javascript, send it to Rocket


// convert all "tables" to include Bootstrap classes
const tables = document.querySelectorAll('table');
for (let i = 0; i < tables.length; i++) {
  tables[i].classList.add('table');
}

window.addEventListener('load', function () {




  // if someone clicks on #btn-share, copy the current url to clipboard
  document.querySelector('#btn-share').addEventListener('click', function () {
    if (copy(window.location.href, {
        debug: true,
        message: 'Press #{key} to copy',
      })) {
      Swal.fire({
        title: 'Copied!',
        html: `
        <p>
          The link has been copied to your clipboard.
        </p>
        <p><a href="${window.location.href}" target="_blank">${window.location.href}</a></p>
        `,
        type: 'success',
        confirmButtonText: 'OK',
      });
    }
  });

  const copyHashes = document.querySelectorAll('.text-muted.copy-hash');
  copyHashes.forEach(thisHash => {
    thisHash.addEventListener('click', function () {
      setTimeout(async function() {
        if (copy(window.location.href, {
            debug: true,
            message: 'Press #{key} to copy',
          })) {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-right',
            iconColor: 'white',
            customClass: {
              popup: 'colored-toast'
            },
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          });
          await Toast.fire({
            icon: 'success',
            title: 'Copied!'
          });
        }
      }, 10);
    });
  });

  let helpful;
  document.getElementById('helpfulModalSend').addEventListener('click', function (e) {
    const feedbackEmail = document.getElementById('feedback-email');
    const feedbackMessage = document.getElementById('feedback-message');
    setCookie('feedbackEmail', feedbackEmail.value)
    let invalid = false;
    if (feedbackEmail) {
      feedbackEmail.classList.remove('is-invalid');
      if (!EmailValidator.validate(feedbackEmail.value)) {
        feedbackEmail.classList.add('is-invalid');
        invalid = true;
      }
    }
    if (feedbackMessage) {
      feedbackMessage.classList.remove('is-invalid');
      if (feedbackMessage.value === '') {
        feedbackMessage.classList.add('is-invalid');
        invalid = true;
      }
    }
    if (invalid) {
      return;
    }
    const url = "https://chat.mieweb.com/hooks/630907bfdd4057df8f60499c/F3b4ZXuscNRtbsgpfarRYw24vZqRAF7f7wjM8wquPReRnPrd";
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
        if (xhr.status === 200) {
          Swal.fire({
            title: 'Thank you!',
            html: `
            <p>
              Your feedback has been sent.
            </p>
            `,
            type: 'success',
            confirmButtonText: 'OK',
          });
        }
      }
    };
    const rocketData = {
      'username': 'Docs Feedback',
      'attachments': [{
        'fields': [{
            'short': true,
            'title': 'Email',
            'value': feedbackEmail.value
          },
          {
            'short': false,
            'title': 'Message',
            'value': feedbackMessage.value
          },
          {
            'short': true,
            'title': 'Helpful',
            'value': helpful === 'true' ? ':thumbsup:' : ':thumbsdown:'
          },
          {
            'short': true,
            'title': 'Location',
            'value': window.location.href
          }
        ],
      }]
    };
    xhr.send(JSON.stringify(rocketData));
    document.querySelector('#helpfulModal .btn-close').click();
    feedbackEmail.value = '';
    feedbackMessage.value = '';
  });
  const feedbackButtons = document.querySelectorAll('.btn-feedback');
  if (feedbackButtons) {
    for (let i = 0; i < feedbackButtons.length; i++) {
      feedbackButtons[i].addEventListener('click', function (e) {
        e.preventDefault();
        // get the helpful true or false from data-helpful
        helpful = e.currentTarget.getAttribute('data-helpful');

        if (helpful === 'true') {
          const url = "https://chat.mieweb.com/hooks/630907bfdd4057df8f60499c/F3b4ZXuscNRtbsgpfarRYw24vZqRAF7f7wjM8wquPReRnPrd";
          const xhr = new XMLHttpRequest();
          xhr.open("POST", url);
          xhr.setRequestHeader("Content-Type", "application/json");
          xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
              console.log(xhr.status);
              console.log(xhr.responseText);
              if (xhr.status === 200) {
                Swal.fire({
                  title: 'Thank you!',
                  html: `
                  <p>
                    Your feedback has been sent.
                  </p>
                  `,
                  type: 'success',
                  confirmButtonText: 'OK',
                });
              }
            }
          };
          const rocketData = {
            'username': 'Docs Feedback',
            'attachments': [{
              'fields': [{
                  'short': true,
                  'title': 'Helpful',
                  'value': helpful === 'true' ? ':thumbsup:' : ':thumbsdown:'
                },
                {
                  'short': true,
                  'title': 'Location',
                  'value': window.location.href
                }
              ],
            }]
          };
          xhr.send(JSON.stringify(rocketData));
        }
      });
    }
  }
});

window.addEventListener("DOMContentLoaded", function (event) {
  // CONTENT LOADED VARS
  const form = document.getElementById("search");
  const input = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");
  const mainInnerContainer = document.getElementById("index-main");
  const navbarCollapse = document.getElementById("navbarCollapse");
  const pagebody = document.querySelector('body');
  const pagename = pagebody.dataset.page;
  const link = document.querySelectorAll('.slink, a[href ^= "http://system"], a[href ^= "https://system"], a[href = "#"]');
  const scrollBtn = document.querySelector(".btn.btn-position.btn-style");
  const feedbackEmail = document.getElementById('feedback-email');
  const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
    toggle: false
  });

  feedbackEmail.value = getCookie('feedbackEmail');
  let scgi = null;
  let href = null;
  let index = null;
  let lookup = null;
  let queuedTerm = null;
  let queuedDoNotAddState = false;
  let origContent = null;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let term = input.value.trim();
    if (!term) {
      return;
    }
    startSearch(term, false);
  }, false);

  if (history.state && history.state.type == "search") {
    startSearch(history.state.term, true);
  }

  window.addEventListener("popstate", function (event) {
    if (event.state && event.state.type == "search") {
      startSearch(event.state.term, true);
    } else if (!event.state && origContent) {
      let target = document.querySelector(".main-inner");
      while (target.firstChild) {
        target.removeChild(target.firstChild);
      }

      for (let node of origContent) {
        target.appendChild(node);
      }
      origContent = null;
    }
  }, false);

  function startSearch(term, doNotAddState) {
    input.value = term;
    form.setAttribute("data-running", "true");
    searchButton.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';    
    searchButton.disabled = true;
    mainInnerContainer.innerHTML = '<div class="container d-flex align-items-center text-center justify-content-center p-5 h3"><i class="fa-solid fa-spinner fa-spin me-3"></i> Searching...</div>';

    setTimeout(function () {
      if (index) {
        search(term, doNotAddState);
      } else if (queuedTerm) {
        queuedTerm = term;
        queuedDoNotAddState = doNotAddState;
      } else {
        queuedTerm = term;
        queuedDoNotAddState = doNotAddState;
        initIndex();
      }
    }, 100);
  }

  function searchDone() {
    form.removeAttribute("data-running");
    searchButton.innerHTML = 'Search';
    searchButton.disabled = false;

    // A magic trick to make search field loses focus on mobile,
    // which prevents the virtual keyboard from popping up.
    const header = document.querySelector('.header');
    if (header && header.classList.contains('fade')) {
      input.blur();
    }

    queuedTerm = null;
    queuedDoNotAddState = false;
    bsCollapse.hide();
  }

  function initIndex() {
    let request = new XMLHttpRequest();
    request.open("GET", "/search.json");
    request.responseType = "json";
    request.addEventListener("load", function (event) {
      let documents = request.response;
      if (!documents) {
        console.error("Search index could not be downloaded, was it generated?");
        searchDone();
        return;
      }

      lookup = {};
      index = lunr(function () {
        this.ref("uri");
        this.field("title");
        this.field("subtitle");
        this.field("content");
        this.field("description");
        this.field("categories");
        this.field("tags");

        for (let document of documents) {
          this.add(document);
          lookup[document.uri] = document;
        }
      });

      search(queuedTerm, queuedDoNotAddState);
    }, false);
    request.addEventListener("error", searchDone, false);
    request.send(null);
  }

  function search(term, doNotAddState) {
    try {
      let results = index.search(term);

      let target = document.querySelector(".main-inner");
      let replaced = [];
      while (target.firstChild) {
        replaced.push(target.firstChild);
        target.removeChild(target.firstChild);
      }
      if (!origContent) {
        origContent = replaced;
      }

      let title = document.createElement("h1");
      title.id = "search-results";
      title.className = "list-title pt-4";

      // This is an overly simple pluralization scheme, it will only work
      // for some languages.
      if (results.length == 0) {
        title.textContent = "No results found for “" + term + "”";
      } else if (results.length == 1) {
        title.textContent = "1 result found for “" + term + "”";
      } else {
        title.textContent = "" + results.length.toLocaleString() + " results found for “" + term + "”";
      }
      target.appendChild(title);
      document.title = title.textContent;
      let template = document.getElementById("search-result");
      for (let result of results) {
        let doc = lookup[result.ref];
        if (doc.uri == "/toc/") {
          continue;
        }
        let element = template.content.cloneNode(true);
        element.querySelector(".summary-title-link").href = element.querySelector(".read-more-link").href = doc.uri;
        element.querySelector(".summary-title-link").textContent = doc.title;
        element.querySelector(".summary").textContent = truncateToEndOfSentence(doc.content, 70);
        target.appendChild(element);
      }
      // This prevents the page from scrolling down to where it was previously.
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
      // This is needed if the user scrolls down during page load and you want to make sure the page is scrolled to the top once it's fully loaded. This has Cross-browser support.
      window.scrollTo(0, 0);
      if (!doNotAddState) {
        history.pushState({
          type: "search",
          term: term
        }, title.textContent, "#search=" + encodeURIComponent(term));
      }


      let navToggleLabel = document.querySelector('.nav-toggle');
      if (navToggleLabel && navToggleLabel.classList.contains("open")) {
        document.getElementById(navToggleLabel.getAttribute("for")).click();
      }
    } finally {
      searchDone();
    }
  }

  // This matches Hugo's own summary logic:
  // https://github.com/gohugoio/hugo/blob/b5f39d23b86f9cb83c51da9fe4abb4c19c01c3b7/helpers/content.go#L543
  function truncateToEndOfSentence(text, minWords) {
    let match;
    let result = "";
    let wordCount = 0;
    let regexp = /(\S+)(\s*)/g;
    while (match = regexp.exec(text)) {
      wordCount++;
      if (wordCount <= minWords) {
        result += match[0];
      } else {
        let char1 = match[1][match[1].length - 1];
        let char2 = match[2][0];
        if (/[.?!"]/.test(char1) || char2 == "\n") {
          result += match[1];
          break;
        } else {
          result += match[0];
        }
      }
    }
    return result;
  }

  function btnVisibility() {
    if (window.scrollY > 400) {
      scrollBtn.style.visibility = "visible";
    } else {
      scrollBtn.style.visibility = "hidden";
    }
  };


  if (window.location.hash.startsWith("#search=")) {
    let term = decodeURIComponent(window.location.hash.substring(8));
    startSearch(term, true);
  }

  navbarCollapse.addEventListener('show.bs.collapse', function () {
    document.body.style.overflow = 'hidden';
  });
  navbarCollapse.addEventListener('hide.bs.collapse', function () {
    document.body.style.overflow = 'unset';
  });

  if (pagename !== '') {
    const pagenavitem = document.querySelector(`[data-name="${pagename}"]`);
    const pagenavparent = document.querySelector(`[data-name="${pagenavitem.dataset.parent}"]`);
    openNavElement(pagenavitem, pagename);
    openNavElement(pagenavparent, pagename);
  }


  document.addEventListener('click', function (e) {
    const hasToggle = e.target.classList.contains('btn-toggle') || e.target.parentElement.classList.contains('btn-toggle');
    if (hasToggle && e.target.href) {
      window.location = e.target.href;
    }
  });

  document.addEventListener("scroll", () => {
    btnVisibility();
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  document.querySelector('body').addEventListener('submit', function (e) {
    e.preventDefault();
    if (e.target.classList.contains('sys_form')) {
      const form = e.target;
      const sys = form.querySelector('.sys_input').value;
      if (sys != '') {
        location.href = '?syslink=' + sys;
      } else {
        location.href = '?syslink=nosystem';
      }
    }
  });
  syslink = checkCookie();
  if (syslink != 'nosystem') {
    link.forEach(thisLink => {
      if (thisLink.dataset.cgi) {
        scgi = thisLink.dataset.cgi;
      } else {
        href = thisLink.getAttribute('href').split('://system/?');
        scgi = (href[1]) ? href[1] : '';
      }
      thisLink.setAttribute('target', '_blank');
      thisLink.setAttribute('href', syslink + '?' + scgi);
    });
  } else {
    link.forEach(thisLink => {
      thisLink.setAttribute('href', '#');
      thisLink.classList.add('nosystem');
      const options = {
        html: true,
        sanitize: false,
        trigger: 'click',
        content: '<form class="sys_form form"><div class="input-group input-group-sm"><input placeholder="Enter system URL" class="form-control input-sm sys_input" style="width:300px;" type="text"/><button class="btn btn-secondary btn-sm sys_submit" type="submit">Submit</button></div><span id="helpBlock" class="form-text" style="font-size:11px;">The page will refresh. If your system URL is valid you will be able to <br> click on system links.</span></form>',
        placement: 'top',
        template: '<div style="max-width:none;" class="popover" role="tooltip"><div class="popover-arrow"></div><h3 style="margin-bottom:0px;padding-bottom:8px;font-size:14px;" class="popover-header"></h3><div class="popover-body"></div></div>'
      };
      let popover = new bootstrap.Popover(thisLink, options);
      return popover;
    })
  }
  padTocLinks();
}, {
  once: true
});