var bg = document.getElementById('bg');
var scene = document.getElementById('wrap');
// height of #wrap is 282px when rendered
var clientHeight = window.innerHeight;
var wrapOffset = .15 * (clientHeight - 282)
var parallaxMain;

function buildLink(whichLink) {
  let html = `<span id="${whichLink}" data-name="${whichLink}" class="display-table load-section center-text">${whichLink}</span>
  <img id="kwexyducks" width="500px" src="/gallery/kwexyducks.png">
  `
  return html;
}

function getDiv() {
  let div = $('<div data-depth="0.2" class="row animated bounce">')
  let html = buildLink("Coming soon!");
  $(div).html(html);
  return div;
}

function loadingDialog() {
  $('#loading-dialog').addClass('bounce').css('display', 'table');

  let i = 0; //link position
  let t = 400; //speed links are drawn
  let ti = t; // initial t

  let div = getDiv();

    setTimeout(function () {
      $('#loading-container').append($(div).clone())
    }, t);

    t = ti + t;
    i++;

  setTimeout(function () {
    ;$('#loading-container').append(`<div data-depth="0.2" id="signature" class="display-table row"><span class="center-text">A generative collection of the 1500 kwexiest ducks on Solana</span></div>`);
  }, (i + 1) * ti);

}

function doParallaxMain() {
  parallaxMain = new Parallax(scene, {
    invertX: false,
    invertY: false,
  });
  scene.style.pointerEvents = "auto";

}

$(document).ready(function () {
  //vertical align
  bg.style.marginTop = (wrapOffset > 0) ? wrapOffset + "px" : "0px";

  loadingDialog();

  if (window.innerWidth > 600) {
    doParallaxMain()
  }

});
