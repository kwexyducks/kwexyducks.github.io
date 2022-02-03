var bg = document.getElementById('bg');
var scene = document.getElementById('wrap');
// height of #wrap is 282px when rendered
var clientHeight = window.innerHeight;
var wrapOffset = .15 * (clientHeight - 282)
var parallaxMain;

function banner() {
  let html = `<img id="kwexyducks" width="500px" src="/gallery/kwexyducks.png">  
  `
  return html;
}

function getDiv() {
  let div = $('<div data-depth="0.2" class="row animated bounce">')
  let html = banner();
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
    let html=`
    <div data-depth="0.2" id="signature" class="display-table row">
    <span class="center-text" style="font-size:1.3em">A generative collection of the 1500 kwexiest ducks on Solana.</span>
    </div>
    <div id="icons">
    <span class="center-text"><a class="icon" target="_blank" href="https://discord.gg/8ZANJWugyS"><i class="fab fa-discord"></i></a><a class="icon" target="_blank" href="https://twitter.com/KwexyDucks"><i class="fab fa-twitter"></i></a></span>
    </div>
    `
    ;$('#loading-container').append(html);
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
