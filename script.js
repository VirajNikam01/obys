var h1Timer = document.querySelector("#line1-part1 h5");

var tl = gsap.timeline();

tl.from(".line h1", {
  y: "200",
  duration: "0.6",
  delay: "0.5",
  stagger: "0.25",
});
tl.from("#line1-part1", {
  opacity: "0",
  onStart: function () {
    // set interval
    var count = 0;
    var h1TimerInterval = setInterval(() => {
      if (count === 100) {
        clearInterval(h1TimerInterval);
      }
      h1Timer.textContent = count;
      count++;
    }, 33);
  },
});
tl.to(".line h2",{
  animationName:"anime",
  opacity:1
})
tl.to("#loader",{
    opacity:0,
    duration:0.2, 
    delay:4,
})
tl.from("#page1",{
    y:1600,
    opacity:0,
    delay:0.2,
    duration:0.5,
    ease:Power4,
})
tl.to("#loader",{
  display:"none"
})
