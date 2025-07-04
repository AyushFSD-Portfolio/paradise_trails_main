document.addEventListener('DOMContentLoaded', () => {
  let lastScrollY = window.scrollY;
  let ticking = false;

  // Sticky Navigation Handler
  const navContainer = document.getElementById("bottomNav");
  function handleStickyNav() {
    if (!navContainer) return;

    const currentScrollY = window.scrollY;
    const isScrollingDown = currentScrollY > lastScrollY;

    if (currentScrollY > 100) {
      navContainer.classList.add("top");
      navContainer.style.transform =
        isScrollingDown && currentScrollY > 200
          ? "translateY(-100%)"
          : "translateY(0)";
    } else {
      navContainer.classList.remove("top");
      navContainer.style.transform = "translateY(0)";
    }

    lastScrollY = currentScrollY;
  }

  // Animate on Scroll
  function animateOnScroll() {
    const animateElements = document.querySelectorAll(
      ".animate-on-scroll:not(.animated)"
    );
    const destinationCards = document.querySelectorAll(
      ".destination-card:not(.animated)"
    );
    const sectionHeaders = document.querySelectorAll(
      ".section-header:not(.animated)"
    );

    const allElements = [
      ...animateElements,
      ...destinationCards,
      ...sectionHeaders,
    ];

    allElements.forEach((element, index) => {
      const elementTop = element.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight - 100;

      if (elementTop < triggerPoint) {
        setTimeout(() => {
          element.classList.add("animated");
        }, index * 50);
      }
    });
  }

  // Parallax for Hero Section
  function handleParallax() {
    const hero = document.querySelector(".hero");
    if (hero) {
      const scrolled = window.pageYOffset;
      hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
  }

  // Scroll Handler
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        handleStickyNav();
        animateOnScroll();
        handleParallax();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Initialize Animation on Load
  window.addEventListener("load", animateOnScroll);

    // Ripple + Active + Navigation Handler
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const href = item.getAttribute("href");

        // Ripple effect
        const ripple = document.createElement("span");
        const rect = item.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);

        Object.assign(ripple.style, {
          width: `${size}px`,
          height: `${size}px`,
          left: `${e.clientX - rect.left - size / 2}px`,
          top: `${e.clientY - rect.top - size / 2}px`,
          position: "absolute",
          background: "rgba(74, 222, 128, 0.4)",
          borderRadius: "50%",
          transform: "scale(0)",
          animation: "ripple 0.6s linear",
          pointerEvents: "none",
          zIndex: "10",
        });

        item.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);

        navItems.forEach((nav) => nav.classList.remove("active"));
        item.classList.add("active");

        // Delay navigation to let ripple show
        setTimeout(() => {
          window.location.href = href;
        }, 100);
      });
    });

  // CTA Button Smooth Scroll
  const ctaButton = document.querySelector(".cta-button");
  const spotsSection = document.querySelector("#spots");
  if (ctaButton && spotsSection) {
    ctaButton.addEventListener("click", (e) => {
      e.preventDefault();
      spotsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  // Smooth Scroll for anchor links
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Leaf animation in about section
  const aboutSection = document.querySelector(".about-section");
  if (aboutSection) {
    const leafObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const leaves = entry.target.querySelectorAll(".leaf");
          leaves.forEach((leaf) => {
            leaf.style.animationPlayState = entry.isIntersecting
              ? "running"
              : "paused";
          });
        });
      },
      { threshold: 0.1 }
    );

    leafObserver.observe(aboutSection);
  }
});
