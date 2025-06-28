var allHeadings = document.querySelectorAll("#page2 h1");

allHeadings.forEach(function (elem) {
  var h1Text = elem.textContent;
  var splittedText = h1Text.split("");

  var clutter = "";

  splittedText.forEach(function (e) {
    clutter += `<span>${e}</span>`;
  });

  elem.innerHTML = clutter;
});

gsap.to("#page2 h1 span", {
  color: "#e3e3c4",
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    markers: true,
    start: "top 50%",
    end: "top -5%",
    scrub: 1,
  },
});
