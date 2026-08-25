function showContent(id) {
    let contents = document.querySelectorAll(".content");

    contents.forEach(function(content) {
        content.style.display = "none";
    });

    document.getElementById(id).style.display = "block";
}
// about nav bar


document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav .link a");

  const observerOptions = {
    root: null,
    rootMargin: "-40% 0px -50% 0px",
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");

        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
});





document.addEventListener("DOMContentLoaded", () => {

    const navLinks = document.querySelectorAll(".link a");
    const logo = document.querySelector(".logo a");

    // Nav link click
    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.forEach((l) => {
                l.classList.remove("active");
            });

            link.classList.add("active");
        });

    });

    // Logo / Home click
    logo.addEventListener("click", () => {

        navLinks.forEach((link) => {
            link.classList.remove("active");
        });

    });

    // Jab user scroll karke bilkul Home/top par aaye
    window.addEventListener("scroll", () => {

        if (window.scrollY <= 50) {

            navLinks.forEach((link) => {
                link.classList.remove("active");
            });

        }

    });

});
//main Nav bar







const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {

    nav.classList.toggle("menu-open");

    const icon = menuToggle.querySelector("i");

    if (nav.classList.contains("menu-open")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});

// Toggler icon






function downloadAndOpenResume() {
    const pdfUrl = "./AbdulRehman-Resume .pdf"; // Apni PDF ka sahi path dein
    
    // 1. Automatic Download Trigger karna
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "AbdulRehman_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // 2. Sath hi PDF ko naye tab mein open karna
    window.open(pdfUrl, "_blank");
}
// Download Resume Button