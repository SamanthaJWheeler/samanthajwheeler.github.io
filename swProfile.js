// Animiations

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

// tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".text", { y: "-100%", duration: 1.5, delay: 0});
tl.to(".slider", { y: "-100%", duration: 1.5 }, "-=1");

