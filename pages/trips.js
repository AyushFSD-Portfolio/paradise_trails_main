// Combined and corrected trip.js with modal fix, scrolling, ripple effect, sticky nav, and search functionality

function searchFunction() {
  alert("Search functionality is Comming soon!");
}

// Trip data (paste your full dataset below)
const trips = [
  {
    id: 1,
    title: "Yala Full Day Safari",
    location: "Sri Lanka",
    date: "2025-05-31",
    price: "LKR 17,500",
    category: "recent",
    image: "../assets/images/trip-yala.png",
    description:
      "Experience a thrilling full-day safari in Yala with guided tours, meals, and wildlife photography.",
    tags: ["Safari", "Wildlife", "Photography", "Sri Lanka"],
    duration: "1 Day",
    highlights: [
      "A/C Transport from Colombo & back",
      "Park Entry and Safari Jeeps",
      "Guided Full Day Safari",
      "Breakfast & Lunch Included",
      "Water, Refreshments, and Snacks",
      "Professional Photography Opportunities",
    ],
  },
  {
    id: 2,
    title: "Yala National Park Safari",
    location: "Sri Lanka",
    date: "2024-12-10",
    price: "$1,100",
    category: "popular",
    image: "https://i.ytimg.com/vi/-z5ZvyfDYPM/sddefault.jpg",
    description:
      "Discover the wild side of Sri Lanka with the highest leopard density in the world, expert-led safaris, and immersive wildlife experiences.",
    tags: ["Leopards", "Bird Watching", "Wildlife Photography"],
    duration: "3 Days",
    highlights: [
      "Jeep safaris with experienced local guides",
      "Chance to spot leopards, elephants, and sloth bears",
      "Birdwatching with over 200 species",
      "Comfortable eco-lodge accommodation",
      "Traditional Sri Lankan meals included",
    ],
  },
  {
    id: 3,
    title: "Udawalawe National Park Safari",
    location: "Sri Lanka",
    date: "2024-11-05",
    price: "$950",
    category: "family",
    image:
      "https://travellersisle.com/wp-content/uploads/2020/03/Crowds-in-Yala-national-park.jpg",
    description:
      "Perfect for elephant lovers! Explore the grasslands and waterholes of Udawalawe, home to hundreds of wild elephants and exotic birds.",
    tags: ["Elephants", "Family Friendly", "Bird Watching"],
    duration: "2 Days",
    highlights: [
      "Daily jeep safaris with expert naturalists",
      "Guaranteed sightings of wild elephants",
      "Visit to the Udawalawe Elephant Transit Home",
      "Comfortable eco-resort stay",
      "Local Sri Lankan meals and refreshments",
    ],
  },
  {
    id: 4,
    title: "Chobe National Park Safari",
    location: "Botswana",
    date: "2024-05-12",
    price: "$2,600",
    category: "upcoming",
    image:
      "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80",
    description:
      "Experience river safaris and land-based game drives in Chobe's elephant paradise.",
    tags: ["Elephants", "River Safari", "Luxury"],
    duration: "4 Days",
    highlights: [
      "Chobe River boat safari",
      "Large elephant herds",
      "Luxury riverside lodge",
      "Sunset cruise experiences",
      "Professional guide services",
    ],
  },
  {
    id: 5,
    title: "Amboseli Elephant Experience",
    location: "Kenya",
    date: "2024-01-25",
    price: "$2,200",
    category: "recent",
    image:
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2121&q=80",
    description:
      "Incredible elephant encounters with Mount Kilimanjaro as your backdrop.",
    tags: ["Elephants", "Kilimanjaro", "Scenic"],
    duration: "3 Days",
    highlights: [
      "Mount Kilimanjaro views",
      "Large elephant families",
      "Scenic landscape photography",
      "Luxury tented camp",
      "Cultural village visit",
    ],
  },
  {
    id: 6,
    title: "Amboseli Elephant Experience",
    location: "Kenya",
    date: "2024-01-25",
    price: "$2,200",
    category: "recent",
    image:
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2121&q=80",
    description:
      "Incredible elephant encounters with Mount Kilimanjaro as your backdrop.",
    tags: ["Elephants", "Kilimanjaro", "Scenic"],
    duration: "3 Days",
    highlights: [
      "Mount Kilimanjaro views",
      "Large elephant families",
      "Scenic landscape photography",
      "Luxury tented camp",
      "Cultural village visit",
    ],
  },
  {
    id: 7,
    title: "Amboseli Elephant Experience",
    location: "Kenya",
    date: "2024-01-25",
    price: "$2,200",
    category: "recent",
    image:
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2121&q=80",
    description:
      "Incredible elephant encounters with Mount Kilimanjaro as your backdrop.",
    tags: ["Elephants", "Kilimanjaro", "Scenic"],
    duration: "3 Days",
    highlights: [
      "Mount Kilimanjaro views",
      "Large elephant families",
      "Scenic landscape photography",
      "Luxury tented camp",
      "Cultural village visit",
    ],
  },
  {
    id: 7,
    title: "Amboseli Elephant Experience",
    location: "Kenya",
    date: "2024-01-25",
    price: "$2,200",
    category: "recent",
    image:
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2121&q=80",
    description:
      "Incredible elephant encounters with Mount Kilimanjaro as your backdrop.",
    tags: ["Elephants", "Kilimanjaro", "Scenic"],
    duration: "3 Days",
    highlights: [
      "Mount Kilimanjaro views",
      "Large elephant families",
      "Scenic landscape photography",
      "Luxury tented camp",
      "Cultural village visit",
    ],
  },
  {
    id: 8,
    title: "Amboseli Elephant Experience",
    location: "Kenya",
    date: "2024-01-25",
    price: "$2,200",
    category: "recent",
    image:
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2121&q=80",
    description:
      "Incredible elephant encounters with Mount Kilimanjaro as your backdrop.",
    tags: ["Elephants", "Kilimanjaro", "Scenic"],
    duration: "3 Days",
    highlights: [
      "Mount Kilimanjaro views",
      "Large elephant families",
      "Scenic landscape photography",
      "Luxury tented camp",
      "Cultural village visit",
    ],
  },
  {
    id: 9,
    title: "Zambezi River Safari",
    location: "Zambia",
    date: "2024-06-08",
    price: "$3,500",
    category: "popular",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description:
      "Luxury river safari with Victoria Falls and premium wildlife viewing.",
    tags: ["River Safari", "Victoria Falls", "Luxury"],
    duration: "8 Days",
    highlights: [
      "Victoria Falls helicopter tour",
      "Luxury river cruise safari",
      "Premium lodge accommodation",
      "Professional photography guide",
      "Exclusive wildlife encounters",
    ],
  },
  {
    id: 10,
    title: "Okavango Delta Wilderness",
    location: "Botswana",
    date: "2024-03-28",
    price: "$4,200",
    category: "upcoming",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description:
      "Explore pristine wetlands and diverse ecosystems in the Okavango Delta.",
    tags: ["Delta", "Wetlands", "Exclusive"],
    duration: "6 Days",
    highlights: [
      "Mokoro (dugout canoe) excursions",
      "Pristine wetland exploration",
      "Exclusive safari camp",
      "Bird watching paradise",
      "Water-based game viewing",
    ],
  },
  {
    id: 11,
    title: "Okavango Delta Wilderness",
    location: "Botswana",
    date: "2024-03-28",
    price: "$4,200",
    category: "upcoming",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description:
      "Explore pristine wetlands and diverse ecosystems in the Okavango Delta.",
    tags: ["Delta", "Wetlands", "Exclusive"],
    duration: "6 Days",
    highlights: [
      "Mokoro (dugout canoe) excursions",
      "Pristine wetland exploration",
      "Exclusive safari camp",
      "Bird watching paradise",
      "Water-based game viewing",
    ],
  },
  {
    id: 12,
    title: "Okavango Delta Wilderness",
    location: "Botswana",
    date: "2024-03-28",
    price: "$4,200",
    category: "upcoming",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description:
      "Explore pristine wetlands and diverse ecosystems in the Okavango Delta.",
    tags: ["Delta", "Wetlands", "Exclusive"],
    duration: "6 Days",
    highlights: [
      "Mokoro (dugout canoe) excursions",
      "Pristine wetland exploration",
      "Exclusive safari camp",
      "Bird watching paradise",
      "Water-based game viewing",
    ],
  },
  {
    id: 13,
    title: "Okavango Delta Wilderness",
    location: "Botswana",
    date: "2024-03-28",
    price: "$4,200",
    category: "upcoming",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description:
      "Explore pristine wetlands and diverse ecosystems in the Okavango Delta.",
    tags: ["Delta", "Wetlands", "Exclusive"],
    duration: "6 Days",
    highlights: [
      "Mokoro (dugout canoe) excursions",
      "Pristine wetland exploration",
      "Exclusive safari camp",
      "Bird watching paradise",
      "Water-based game viewing",
    ],
  },
  {
    id: 14,
    title: "Okavango Delta Wilderness",
    location: "Botswana",
    date: "2024-03-28",
    price: "$4,200",
    category: "upcoming",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description:
      "Explore pristine wetlands and diverse ecosystems in the Okavango Delta.",
    tags: ["Delta", "Wetlands", "Exclusive"],
    duration: "6 Days",
    highlights: [
      "Mokoro (dugout canoe) excursions",
      "Pristine wetland exploration",
      "Exclusive safari camp",
      "Bird watching paradise",
      "Water-based game viewing",
    ],
  },
  {
    id: 15,
    title: "Ngorongoro Crater Safari",
    location: "Tanzania",
    date: "2024-02-18",
    price: "$2,900",
    category: "recent",
    image:
      "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description:
      "Discover the 'Garden of Eden' with incredible wildlife density in a volcanic crater.",
    tags: ["Crater", "High Density", "Unique"],
    duration: "4 Days",
    highlights: [
      "UNESCO World Heritage site",
      "Incredible wildlife density",
      "Crater rim lodge accommodation",
      "Flamingo viewing at lake",
      "Masai cultural interaction",
    ],
  },
  {
    id: 16,
    title: "Hwange National Park Explorer",
    location: "Zimbabwe",
    date: "2024-04-15",
    price: "$2,100",
    category: "popular",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description:
      "Zimbabwe's largest national park with diverse wildlife and stunning landscapes.",
    tags: ["Diverse Wildlife", "Large Park", "Adventure"],
    duration: "5 Days",
    highlights: [
      "Zimbabwe's largest national park",
      "Diverse wildlife species",
      "Remote wilderness experience",
      "Traditional safari camp",
      "Night game drives",
    ],
  },
  {
    id: 17,
    title: "Hwange National Park Explorer",
    location: "Zimbabwe",
    date: "2024-04-15",
    price: "$2,100",
    category: "popular",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description:
      "Zimbabwe's largest national park with diverse wildlife and stunning landscapes.",
    tags: ["Diverse Wildlife", "Large Park", "Adventure"],
    duration: "5 Days",
    highlights: [
      "Zimbabwe's largest national park",
      "Diverse wildlife species",
      "Remote wilderness experience",
      "Traditional safari camp",
      "Night game drives",
    ],
  },
  {
    id: 18,
    title: "Hwange National Park Explorer",
    location: "Zimbabwe",
    date: "2024-04-15",
    price: "$2,100",
    category: "popular",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description:
      "Zimbabwe's largest national park with diverse wildlife and stunning landscapes.",
    tags: ["Diverse Wildlife", "Large Park", "Adventure"],
    duration: "5 Days",
    highlights: [
      "Zimbabwe's largest national park",
      "Diverse wildlife species",
      "Remote wilderness experience",
      "Traditional safari camp",
      "Night game drives",
    ],
  },
  {
    id: 19,
    title: "Hwange National Park Explorer",
    location: "Zimbabwe",
    date: "2024-04-15",
    price: "$2,100",
    category: "popular",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description:
      "Zimbabwe's largest national park with diverse wildlife and stunning landscapes.",
    tags: ["Diverse Wildlife", "Large Park", "Adventure"],
    duration: "5 Days",
    highlights: [
      "Zimbabwe's largest national park",
      "Diverse wildlife species",
      "Remote wilderness experience",
      "Traditional safari camp",
      "Night game drives",
    ],
  },
  {
    id: 20,
    title: "Hwange National Park Explorer",
    location: "Zimbabwe",
    date: "2024-04-15",
    price: "$2,100",
    category: "popular",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description:
      "Zimbabwe's largest national park with diverse wildlife and stunning landscapes.",
    tags: ["Diverse Wildlife", "Large Park", "Adventure"],
    duration: "5 Days",
    highlights: [
      "Zimbabwe's largest national park",
      "Diverse wildlife species",
      "Remote wilderness experience",
      "Traditional safari camp",
      "Night game drives",
    ],
  },
  {
    id: 21,
    title: "Hwange National Park Explorer",
    location: "Zimbabwe",
    date: "2024-04-15",
    price: "$2,100",
    category: "popular",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description:
      "Zimbabwe's largest national park with diverse wildlife and stunning landscapes.",
    tags: ["Diverse Wildlife", "Large Park", "Adventure"],
    duration: "5 Days",
    highlights: [
      "Zimbabwe's largest national park",
      "Diverse wildlife species",
      "Remote wilderness experience",
      "Traditional safari camp",
      "Night game drives",
    ],
  },
];

class AdventureGallery {
  constructor() {
    this.currentFilter = "all";
    this.visibleCards = 6;
    this.cardsPerLoad = 3;
    this.filteredTrips = [...trips];
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.renderCards();
    this.updateLoadMoreButton();
  }

  setupEventListeners() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const filter = e.currentTarget.dataset.filter;
        this.handleFilter(filter, e.currentTarget);
      });
    });

    const loadMoreBtn = document.getElementById("loadMoreBtn");
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener("click", () => this.loadMoreCards());
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeModal();
      }
    });

    document.body.addEventListener("click", (e) => {
      if (e.target.classList.contains("card-btn")) {
        const tripId = parseInt(e.target.dataset.id);
        this.openModal(tripId);
      }

      if (
        e.target.classList.contains("modal-close") ||
        e.target.closest(".modal-close")
      ) {
        this.closeModal();
      }
    });
  }

  handleFilter(filter, buttonElement) {
    document
      .querySelectorAll(".filter-btn")
      .forEach((btn) => btn.classList.remove("active"));
    buttonElement.classList.add("active");

    this.currentFilter = filter;
    this.filteredTrips =
      filter === "all"
        ? [...trips]
        : trips.filter((trip) => trip.category === filter);

    this.visibleCards = 6;
    this.renderCards();
    this.updateLoadMoreButton();
  }

  renderCards() {
    const grid = document.getElementById("adventuresGrid");
    if (!grid) return;
    grid.innerHTML = "";

    const cardsToShow = this.filteredTrips.slice(0, this.visibleCards);
    cardsToShow.forEach((trip, index) => {
      const card = this.createCard(trip, index);
      grid.appendChild(card);
    });
  }

  createCard(trip, index) {
    const card = document.createElement("div");
    card.className = "adventure-card";
    card.style.setProperty("--index", index + 1);

    const categoryClass = trip.category;
    const categoryText = this.getCategoryText(trip.category);

    card.innerHTML = `
      <div class="card-image">
        <img src="${trip.image}" alt="${trip.title}" loading="lazy">
        <div class="card-overlay">
          <div class="category-badge ${categoryClass}">${categoryText}</div>
        </div>
      </div>
      <div class="card-content">
        <h3>${trip.title}</h3>
        <p>${trip.description}</p>
        <button class="card-btn view-btn" data-id="${trip.id}">View More</button>
      </div>
    `;
    return card;
  }

  getCategoryText(category) {
    const categoryMap = {
      popular: "Popular",
      recent: "Recent",
      upcoming: "Upcoming",
    };
    return categoryMap[category] || "Featured";
  }

  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  loadMoreCards() {
    this.visibleCards += this.cardsPerLoad;
    this.renderCards();
    this.updateLoadMoreButton();
  }

  updateLoadMoreButton() {
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    if (!loadMoreBtn) return;
    loadMoreBtn.style.display =
      this.visibleCards >= this.filteredTrips.length ? "none" : "flex";
  }

  openModal(tripId) {
    const trip = trips.find((t) => t.id === tripId);
    if (!trip) return;

    // Set modal values
    document.getElementById("modalImage").src = trip.image;
    document.getElementById("modalTitle").textContent = trip.title;
    document.getElementById("modalLocation").textContent = trip.location;
    document.getElementById("modalDescription").textContent = trip.description;

    // Format and populate highlights/details
    const detailsList = document.getElementById("modalDetails");
    detailsList.innerHTML = "";
    trip.highlights.forEach((highlight) => {
      const li = document.createElement("li");
      li.textContent = highlight;
      detailsList.appendChild(li);
    });

    document.getElementById("modalPrice").textContent = trip.price;

    // Show modal
    document.querySelector(".trip-modal-overlay").style.display = "flex";
    document.body.style.overflow = "hidden";

    // Add close listener
    document.querySelector(".modal-close-btn").addEventListener("click", () => {
      this.closeModal();
    });
  }

  closeModal() {
    const modal = document.querySelector(".trip-modal-overlay");
    if (modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }

  bookTrip(tripId) {
    const trip = trips.find((t) => t.id === tripId);
    if (trip) {
      alert(
        `Booking request for "${trip.title}" has been submitted! We'll contact you shortly.`
      );
      this.closeModal();
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.adventureGallery = new AdventureGallery();

  const navContainer = document.getElementById("bottomNav");
  let lastScrollY = window.scrollY;
  let ticking = false;

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

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        handleStickyNav();
        ticking = false;
      });
      ticking = true;
    }
  });

  document.querySelectorAll("a[href^='#']").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const href = item.getAttribute("href");

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

      setTimeout(() => {
        window.location.href = href;
      }, 100);
    });
  });
});
