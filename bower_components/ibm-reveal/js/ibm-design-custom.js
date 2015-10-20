/*
* Just some js to make things a little nicer
*/

function introFooter() {
  if (Reveal.isFirstSlide()) {
    document.querySelector('.ibm-header').style.display = 'none';
    document.querySelector('.intro-only').style.display = 'block';
  }
  else {
    document.querySelector('.intro-only').style.display = 'none';
    document.querySelector('.ibm-header').style.display = 'block';
  }
}

introFooter();
Reveal.addEventListener( 'slidechanged', function( event ) {
  introFooter();
});