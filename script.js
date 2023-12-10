var h1Timer = document.querySelector("#line1-part1 h5");
var crsr = document.querySelector("#crsr");

function loadingAnimation() {
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
  tl.to(".line h2", {
    animationName: "anime",
    opacity: 1,
  });
  tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay: 3.8,
  });
  tl.from("#page1", {
    y: 1600,
    opacity: 0,
    delay: 0.1,
    duration: 0.6,
    ease: Power4,
  });
  tl.to("#loader", {
    display: "none",
  });
  tl.from("#nav",{
    opacity:0
  })
  tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1",{
    y:120,
    stagger: 0.3,
    opacity:0
  })
}
loadingAnimation();

function cursorAnimation() {
  window.addEventListener("mousemove", (dets) => {
    gsap.to("#crsr", {
      left: dets.x + "px",
      top: dets.y + "px",
      transform: "translate(-50%, -50%)",
    });
  });

  Shery.makeMagnet("#nav-part2 h4", {});
}
cursorAnimation()


