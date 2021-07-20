

document.querySelector(".contact").addEventListener('click' , function () {
    window.location.href = "mailto:contact@migue.pro"
});
let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

// let controller1 = new ScrollMagic.Controller();
// let timeline1 = new TimelineMax();

timeline
    .to(".pasto", 10, { y: -100 })
    .fromTo(".perro", {y: 50}, { y: -200, duration: 10 }, "-=10")
    .fromTo(".bg", { y: -50 }, { y: 0, duration: 10 }, "-=10")
    .to(".content", 10, { top: "0%" }, "-=10")
    .fromTo(".content-images", { opacity: 0 }, { opacity: 1, duration: 3 })
    .fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 3 });

// timeline1
//     .to("#deep-learning", 10, { top: "0%"})
//     .fromTo(".content-images", { opacity: 0 }, { opacity: 1, duration: 3 })
//     .fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 3 };

let scene = new ScrollMagic.Scene({
    triggerElement: "section",
    // triggerElement: "nav",
    duration: "300%",
    triggerHook: 0,
})
    .setTween(timeline)
    // .setPin("nav")
    .setPin("section")
    .addTo(controller);

// let dlscene = new ScrollMagic.Scene({
//     triggerElement: "#deep-learning",
//     duration: "300%",
//     triggerHook: 0.5,
// })
//     .setTween(timeline1)
//     .setPin("#deep-learning")
//     .addTo(controller1);

const parallax = document.querySelector(".parallax");
window.addEventListener("scroll", function () {
    let offset = window.pageXOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
})