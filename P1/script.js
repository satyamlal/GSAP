var tl = gsap.timeline();

tl.from("#nav h3", {
  y: -80,
  duration: 0.8,
  stagger: 0.4,
}).to("#nav", {
  backgroundColor: "rgba(25, 25, 25, 1)",
  duration: 0.1,
});

tl.from("#main h1", {
  x: -500,
  opacity: 0,
  duration: 0.8,
  stagger: 0.4,
});

tl.from("img", {
  x: 100,
  rotate: 45,
  opacity: 0,
  duration: 0.4,
  stagger: 0.4,
});

tl.from("p", {
  y: 100,
  duration: 1,
  opacity: 0,
  stagger: 0.4,
});
