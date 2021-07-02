$(function(){
  $(window).scroll(function(){
    console.log($(window).scrollTop());
    const height = $(window).scrollTop();
    if(height > 790){
      const element = document.getElementsByClassName('milestone');
      Array.from(element).forEach(element => {
        element.classList.add('milestone-animation');
        setTimeout(() => {
          element.children[0].classList.add('milestone__image-animate');
        }, 1000);
        setTimeout(() => {
          element.children[1].classList.add('milestone__content-animate');
        }, 1000*2);
      });
    }
    if(height > 2356){
      const element = document.getElementsByClassName('pf');
      Array.from(element).forEach(element =>{
        element.classList.add('animate');
      })
    }
  });
});