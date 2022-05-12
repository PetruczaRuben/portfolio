"use strict";
////Load header background particles
particlesJS.load("particles-js", "particlesjs-config.json");
if (window.innerWidth <= 700) {
  console.log("MOBILEVIEW");
  document.getElementById("particles-js").remove();
}
if (window.innerWidth > 701) {
  console.log("DESKTOPVIEW");
}

//burgermenu
const burgermenu = document.querySelector(".burgermenu");
burgermenu.addEventListener("click", function () {
  burgermenu.classList.toggle("active");
  nav.classList.remove("sticky");
  nav.classList.toggle("active");
});
//upbtn
document.querySelector(".upBtn").addEventListener("click", function () {
  document.querySelector("body").scrollIntoView({ behavior: "smooth" });
});
//smooth scrolling to sections
document.querySelector("nav").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.closest("a")?.classList.contains("nav-link")) {
    const id = e.target.closest("a").getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
///sticky nav
const nav = document.querySelector("nav");
const line1 = document.querySelector(".line-1");
const header = document.querySelector("header");

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting && window.innerWidth > 700) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};
const navObs = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${nav.getBoundingClientRect().height}px`,
});

navObs.observe(header);

// if (window.innerWidth <= 700) {
//   nav.classList.remove("sticky");
// }
window.addEventListener("resize", function () {
  // if (window.matchMedia("(min-width: 700px)").matches) {
  if (window.innerWidth <= 700) {
    navObs.unobserve(header);
    if (document.getElementById("particles-js")) {
      document.getElementById("particles-js").remove();
    }
  }
  if (window.innerWidth > 700) {
    navObs.observe(header);
    if (document.getElementById("particles-js")) {
      headerHeight = document.querySelector("header").clientHeight;
      document.getElementById(
        "particles-js"
      ).style.height = `${headerHeight}px`;
    }
  }
});
let headerHeight = document.querySelector("header").clientHeight;
if (document.getElementById("particles-js")) {
  document.getElementById("particles-js").style.height = `${headerHeight}px`;
}

//selecting elements
// const activeBlog = document.querySelector(".blog-active");
// const blogs = document.querySelectorAll(".blog");
// const arrowLeft = document.querySelector(".slider__btn--left");
// const arrowRight = document.querySelector(".slider__btn--right");

// //Blogs-slider
// let blog1, blog2, blog3;
// let currSlide = 0;
// let maxSlide = blogs.length - 1;

// blog1 = blogs[0].querySelector("p").textContent;
// blog2 = blogs[1].querySelector("p").textContent;
// blog3 = blogs[2].querySelector("p").textContent;

// blogDisc();
// updateSlide(currSlide);

// function blogDisc() {
//   blogs[0].querySelector("p").textContent = blog1;
//   blogs[1].querySelector("p").textContent = blog2;
//   blogs[2].querySelector("p").textContent = blog3;
//   blogs.forEach(function (e) {
//     if (e.classList.contains("blog-active")) {
//       e.querySelector("p").textContent = e
//         .querySelector("p")
//         .textContent.concat("...");
//     }
//     if (!e.classList.contains("blog-active")) {
//       e.querySelector("p").textContent = e
//         .querySelector("p")
//         .textContent.slice(0, 59)
//         .padEnd(62, ".");
//     }
//   });
// }

// function updateSlide(slide) {
//   blogs.forEach(function (el, i) {
//     el.classList.remove("blog-active");
//     el.classList.remove("active");
//     if (slide === i) {
//       el.classList.add("active");
//       el.classList.add("blog-active");
//     }
//     if (el === blogs[0]) {
//       el.classList.add("first");
//     }
//     if (el === blogs[2]) {
//       el.classList.add("third");
//     }
//   });
//   blogs[slide].classList.add("blog-active");
//   blogDisc();
// }

// function prevSlide() {
//   if (currSlide === 0) {
//     currSlide = maxSlide;
//     updateSlide(currSlide);
//   } else {
//     currSlide--;
//     updateSlide(currSlide);
//   }
// }
// function nextSlide() {
//   if (currSlide === maxSlide) {
//     currSlide = 0;
//     updateSlide(currSlide);
//   } else {
//     currSlide++;
//     updateSlide(currSlide);
//   }
// }

// arrowLeft.addEventListener("click", prevSlide);
// arrowRight.addEventListener("click", nextSlide);
