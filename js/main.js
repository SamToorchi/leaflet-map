var carousel;
$(document).ready(function () {

carousel = $("#frame ul");

carousel.itemslide({
    one_item: true //Set this for proper full screen navigation

}); //initialize itemslide

$(window).resize(function () {
    carousel.reload();

}); //Recalculate width and center positions and sizes when window is resized
function myFunction(){
  //console.log(carousel.getActiveIndex());
  addClass();
  setTimeout(myFunction, 500);
}
myFunction();

function addClass(){
  var t = carousel.getActiveIndex();
  var elems = document.querySelectorAll('.bullet');

  [].forEach.call(elems, function(el) {
      el.classList.remove("active");
  });

  var element = document.getElementsByClassName(t)[0];
  element.classList.add('active');
};

});

function start(){
  document.getElementById('startpage').remove();
}
