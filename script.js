document.addEventListener("DOMContentLoaded", animate);

const titles = document.querySelectorAll("span");
const down = document.getElementById("down");
const loader = document.getElementById("loader");
const loaderTitle = document.querySelectorAll(".p-title");
const preloader = document.querySelector(".preloader");

function animate() {
  let tl = gsap.timeline({
    defaults: {
      ease: "expo.inOut",
      duration: 1,
    },
  });

  tl.to(titles, { y: 0, stagger: 0.1, opacity: 1, scale: 1 })
    .to(loader, { height: "20vh", backgroundColor: "#F1F1F1" }, "-=0.5")
    .to(titles, { y: 100 })
    .to(down, { y: -100 }, "-=1")
    .to(loader, { width: "100%" }, "-=0.5")
    .to(loaderTitle, {
      y: 0,
      stagger: 0.1,
      opacity: 1,
    })
    .to(loaderTitle, {
      y: 100,
      delay: 1,
      stagger: 0.1,
      opacity: 0,
    })
    .to(loader, { height: "100%" })
    .to(preloader, { opacity: 0, display: "none" });
}
