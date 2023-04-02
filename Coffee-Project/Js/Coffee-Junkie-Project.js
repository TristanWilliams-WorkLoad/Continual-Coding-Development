/* Start Of Element Selectors Area */
const headerNavbarWrap = document.querySelector('.header__navbar-wrapper');
const headerBtn = document.querySelector('.header-btn');
const headerLinksWrapper = document.querySelector('.header__links-wrapper');
const headerLinks = document.querySelector('.header-links');
const headerLinksBtn = document.querySelectorAll('.header__links-btn');
const scrollUplink = document.querySelector('.coffee__footer-scroll-up--link');
/* End Of Element Selectors Area */
/* --------------------------------------------------------------------------------------------------------------- */
/* Start Of Menu Function Area */
headerBtn.addEventListener('click', function(){
  //Dynamic Height Calculator
  const headerMenuHeight = headerLinksWrapper.getBoundingClientRect().height;
  // console.log(headerMenuHeight);
  const headerLinksHeight = headerLinks.getBoundingClientRect().height;
  // console.log(headerLinksHeight);

  if(headerMenuHeight === 0){
    headerLinksWrapper.style.maxHeight = `${headerLinksHeight}px`;
  }else{
    headerLinksWrapper.style.maxHeight = 0;
  }
});
/* End Of Menu Function Area */
/*---------------------------------------------------------------------------------------------------------------*/
/* Start Of Fixed Navbar Function Area */
window.addEventListener('scroll', function(){
//PageYOffset is a read only window property that returns the number of pixels the document
//has currently scrolled along the vertical axis.
  // console.log(this.window.pageYOffset);

  const scrollHeight = window.pageYOffset;
  const navHeight = headerNavbarWrap.getBoundingClientRect().height;

  if(scrollHeight > navHeight){
    headerNavbarWrap.classList.add('fixed-nav');
  }else{
    headerNavbarWrap.classList.remove('fixed-nav');
  }

  if(scrollHeight > 500){
    scrollUplink.classList.add('show__scroll-link');
  }else {
    scrollUplink.classList.remove('show__scroll-link');
  }
});
/* End Of Fixed Navbar Function Area */
/* --------------------------------------------------------------------------------------------------------------- */
/* Start Of Scroll Links Area */
headerLinksBtn.forEach(function(link){
  link.addEventListener('click', function(){
    headerLinksWrapper.style.maxHeight = 0;
  });
});
/* End Of Scroll Links Area */