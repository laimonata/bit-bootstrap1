$(document).ready(function () {
    // Priskiriame HTML elementui, slick functionaluma
    $(".bit-slider").slick({
        slidesToShow: 1,
        dots: true,
      });

      $(".bit-slider-2").slick({
        slidesToShow: 2,
        dots: true,
      });

      $(".bit-slider-3").slick({
        slidesToShow: 3,
        dots: true,
      });
});

var tabEl = document.querySelectorAll('button[data-bs-toggle="tab"]');
console.log(tabEl);

for(i = 0; i < tabEl.length; i++) {
    tabEl[i].addEventListener('shown.bs.tab', function (event) {
    alert("labas");
    $(window).resize();
});
}