gsap.from("#page1 #circle1", {
  scale: 0,
  duration: 4,
  rotate: 360,
});

gsap.from("#page2 #circle2", {
  scale: 0,
  duration: 4,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page2 #circle2",
    scroller: "body",
    markers: true,
    start: "top 60%",
    end: "top 30%",
    scrub: true,
  },
});

gsap.from("#page3 #circle3", {
  scale: 0,
  duration: 4,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page3 #circle3",
    scroller: "body",
    markers: true,
    start: "top 60%",
    end: "top 50%",
    scrub: 2,
  },
});
