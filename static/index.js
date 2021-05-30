

document.querySelector(".contact").addEventListener('click' , function () {
    window.location.href = "mailto:miguel.minny@aleeas.com"
});
let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
    .to(".pasto", 10, { y: -100 })
    .fromTo(".perro", {y: 50}, { y: -200, duration: 10 }, "-=10")
    .fromTo(".bg", { y: -50 }, { y: 0, duration: 10 }, "-=10")
    .to(".content", 10, { top: "0%" }, "-=10")
    .fromTo(".content-images", { opacity: 0 }, { opacity: 1, duration: 3 })
    .fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 3 });

let scene = new ScrollMagic.Scene({
    triggerElement: "section",
    duration: "300%",
    triggerHook: 0,
})
    .setTween(timeline)
    .setPin("section")
    .addTo(controller);

const parallax = document.querySelector(".parallax");
window.addEventListener("scroll", function () {
    let offset = window.pageXOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
})