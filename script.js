let prism = document.querySelector(".rec-prism");

function showForgotPassword(){
  prism.style.transform = "translateZ(-100px) rotateY( -90deg)";
}
function showLogin(){
  prism.style.transform = "translateZ(-100px)";
}
function showSignup(){
  prism.style.transform = "translateZ(-100px) rotateY( -180deg)";
}

function showSubscribe(){
  prism.style.transform = "translateZ(-100px) rotateX( -90deg)";
}

function showContactUs(){
  prism.style.transform = "translateZ(-100px) rotateY( 90deg)";
}

function showThankYou(){
  prism.style.transform = "translateZ(-100px) rotateX( 90deg)";
}

$('#carousel').on('slid.bs.carousel', function setActiveCarousel(event) {
  const nextactiveslide = $(event.relatedTarget).index();
  const $btns = $('.carousel-btn');
  const $active = $btns.find("[data-bs-slide-to='" + nextactiveslide + "']");
  $btns.find('.carousel-btn').removeClass('active');
  $active.find('.carousel-btn').addClass('active');
});