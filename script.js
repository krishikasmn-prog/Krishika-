const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
}); 
 var diff;

function firstPageAnim(){
  var tl = gsap.timeline();
  tl.from("#nav",{
    y:'-10',
    opacity:0,
    duration:1.2,
    ease:Expo.easeInOut
  })

  .to(".boundingelem",{
    y:0,
    duration:2,
    ease:Expo.easeInOut,
    delay:-1,
    stagger:.2,
})
}
firstPageAnim();
function circleMove(){
  window.addEventListener("mousemove", function(dets){
   document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`;
  });
}
 circleMove();




 document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});


