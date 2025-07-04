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











// new header 


   document.addEventListener('DOMContentLoaded', () => {
            let lastScrollY = window.scrollY;
            let ticking = false;

            // Get elements
            const hamburger = document.getElementById("hamburger");
            const navContainer = document.getElementById("navContainer");
            const body = document.body;
            const navItems = document.querySelectorAll(".nav-item");

            // Mobile menu toggle function - FIXED
            function toggleMobileMenu() {
                if (hamburger && navContainer) {
                    hamburger.classList.toggle("active");
                    navContainer.classList.toggle("active");
                    body.classList.toggle("menu-open");
                }
            }

            // Close mobile menu function - FIXED
            function closeMobileMenu() {
                if (hamburger && navContainer) {
                    hamburger.classList.remove("active");
                    navContainer.classList.remove("active");
                    body.classList.remove("menu-open");
                }
            }

            // REMOVED: initializeMobileMenu function - This was causing the issue
            // The CSS now handles the initial state properly

            // Hamburger click event
            if (hamburger) {
                hamburger.addEventListener("click", (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleMobileMenu();
                });
            }

            // Navigation item clicks
            navItems.forEach((item, index) => {
                item.addEventListener("click", (e) => {
                    // Close mobile menu on mobile immediately
                    if (window.innerWidth <= 767) {
                        closeMobileMenu();
                    }

                    // Set active state
                    navItems.forEach((nav) => nav.classList.remove("active"));
                    item.classList.add("active");

                    // Handle navigation
                    const href = item.getAttribute("href");
                    if (href && href.startsWith("#")) {
                        e.preventDefault();
                        const target = document.querySelector(href);
                        if (target) {
                            const scrollDelay = window.innerWidth <= 767 ? 300 : 0;
                            setTimeout(() => {
                                target.scrollIntoView({ behavior: "smooth" });
                            }, scrollDelay);
                        }
                    }
                });
            });

            // Close menu when clicking outside
            document.addEventListener("click", (e) => {
                if (window.innerWidth <= 767) {
                    const isMenuOpen = navContainer && navContainer.classList.contains("active");
                    const isClickInsideMenu = navContainer && navContainer.contains(e.target);
                    const isClickOnHamburger = hamburger && hamburger.contains(e.target);

                    if (isMenuOpen && !isClickInsideMenu && !isClickOnHamburger) {
                        closeMobileMenu();
                    }
                }
            });

            // Close menu on window resize
            window.addEventListener("resize", () => {
                if (window.innerWidth > 767) {
                    closeMobileMenu();
                }
            });

            // Sticky Navigation Handler (for desktop)
            function handleStickyNav() {
                if (!navContainer || window.innerWidth <= 767) return;

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

            // Parallax for Hero Section
            function handleParallax() {
                const hero = document.querySelector(".hero-section");
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
                        handleParallax();
                        ticking = false;
                    });
                    ticking = true;
                }
            });

            // CTA Button Smooth Scroll
            const ctaButton = document.querySelector(".cta-button");
            if (ctaButton) {
                ctaButton.addEventListener("click", (e) => {
                    e.preventDefault();
                    const target = document.querySelector("#destinations");
                    if (target) {
                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        });
                    }
                });
            }
        });
