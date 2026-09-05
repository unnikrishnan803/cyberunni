/**
 * CYBER SPACE 2026 — Official Script
 * High performance, accessible vanilla JavaScript
 * Theme switching (White / Dark), Canvas animation, Countdown, Accordion
 */

// ====================================================
// CENTRAL EVENT CONFIGURATION
// ====================================================
const eventData = {
  name: "CYBER SPACE 2026",
  date: "19 September 2026",
  day: "Saturday",
  organizer: "IEEE Computer Society",
  institution: "College of Engineering Cherthala",
  registrationUrl: "https://forms.gle/u4UEDsYb3QibjnyV8",
  linkedin: "https://www.linkedin.com/in/phogerman/",
  safeonnet: "https://www.youtube.com/@Safeonnet",
  edwhere: "https://www.edwhere.com",
  courses: "https://learn.edwhere.com",
  mapUrl: "https://maps.google.com/?q=College+of+Engineering+Cherthala+Pallippuram+Alappuzha",
  instagram: "",
  whatsapp: "",
  eventDateISO: "2026-09-19T09:00:00+05:30"
};

// ====================================================
// SAFEONNET VIDEOS ARRAY
// Editable array for channel videos
// ====================================================
const safeonnetVideos = [
  {
    title: "Free Cybersecurity Training for Beginners",
    description: "Malayalam guide to cyber security fundamentals by Edwhere Learning & Manu Francis",
    youtubeUrl: "https://youtu.be/cy2WVi_PKCQ",
    thumbnail: "https://img.youtube.com/vi/cy2WVi_PKCQ/hqdefault.jpg"
  },
  {
    title: "Cybersecurity Career Reality & Truth",
    description: "Scope, jobs, learning path, and industry reality explained in Malayalam",
    youtubeUrl: "https://youtu.be/JPJUzEr1hNk",
    thumbnail: "https://img.youtube.com/vi/JPJUzEr1hNk/hqdefault.jpg"
  },
  {
    title: "Cybersecurity Roadmap for Beginners",
    description: "Step-by-step roadmap and foundations to begin your ethical hacking journey",
    youtubeUrl: "https://youtu.be/vO8HGJHgvqQ",
    thumbnail: "https://img.youtube.com/vi/vO8HGJHgvqQ/hqdefault.jpg"
  }
];

// Execute when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initCentralConfig();
  initStickyHeader();
  initMobileNavigation();
  initSmoothScrollAndActiveNav();
  initScrollReveal();
  initFaqAccordion();
  initCountdown();
  renderSafeonnetVideos();
  initNetworkCanvas();
});

// ====================================================
// 0. THEME SWITCHER (WHITE THEME DEFAULT + DARK TOGGLE)
// ====================================================
function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle");
  const storedTheme = localStorage.getItem("cyberspace_theme") || "light";
  document.documentElement.setAttribute("data-theme", storedTheme);

  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    const nextTheme = currentTheme === "light" ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("cyberspace_theme", nextTheme);

    // Re-render canvas colors if canvas initialized
    if (window.updateCanvasTheme) {
      window.updateCanvasTheme();
    }
  });
}

// ====================================================
// 1. SYNC CENTRAL CONFIGURATION TO DOM
// ====================================================
function initCentralConfig() {
  // Sync all registration buttons to official form URL
  const registerButtons = document.querySelectorAll('a.register-btn, a[href*="forms.gle"]');
  registerButtons.forEach(btn => {
    btn.href = eventData.registrationUrl;
    btn.target = "_blank";
    btn.rel = "noopener noreferrer";
  });

  // Sync Venue Map URL
  const mapLink = document.getElementById("venue-map-link");
  if (mapLink && eventData.mapUrl) {
    mapLink.href = eventData.mapUrl;
  }

  // Sync Social Links
  const ytLink = document.getElementById("social-youtube-link");
  if (ytLink && eventData.safeonnet) ytLink.href = eventData.safeonnet;

  const liLink = document.getElementById("social-linkedin-link");
  if (liLink && eventData.linkedin) liLink.href = eventData.linkedin;

  const igLink = document.getElementById("social-instagram-link");
  if (igLink) {
    igLink.href = eventData.instagram ? eventData.instagram : "#";
    if (!eventData.instagram) igLink.setAttribute("title", "Official link to be announced");
  }

  const waLink = document.getElementById("social-whatsapp-link");
  if (waLink) {
    waLink.href = eventData.whatsapp ? eventData.whatsapp : "#";
    if (!eventData.whatsapp) waLink.setAttribute("title", "Official community link to be announced");
  }

  const footerYt = document.getElementById("footer-youtube-link");
  if (footerYt && eventData.safeonnet) footerYt.href = eventData.safeonnet;

  const footerLi = document.getElementById("footer-linkedin-link");
  if (footerLi && eventData.linkedin) footerLi.href = eventData.linkedin;
}

// ====================================================
// 2. STICKY HEADER WITH BLUR ON SCROLL
// ====================================================
function initStickyHeader() {
  const header = document.getElementById("site-header");
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 25) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

// ====================================================
// 3. ACCESSIBLE MOBILE NAVIGATION DRAWER
// ====================================================
function initMobileNavigation() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const drawer = document.getElementById("mobile-nav-drawer");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (!toggleBtn || !drawer) return;

  const openDrawer = () => {
    drawer.classList.add("open");
    toggleBtn.classList.add("open");
    toggleBtn.setAttribute("aria-expanded", "true");
    drawer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeDrawer = () => {
    drawer.classList.remove("open");
    toggleBtn.classList.remove("open");
    toggleBtn.setAttribute("aria-expanded", "false");
    drawer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  toggleBtn.addEventListener("click", () => {
    const isOpen = drawer.classList.contains("open");
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      closeDrawer();
    });
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("open")) {
      closeDrawer();
      toggleBtn.focus();
    }
  });
}

// ====================================================
// 4. SMOOTH SCROLLING & ACTIVE NAV LINK OBSERVER
// ====================================================
function initSmoothScrollAndActiveNav() {
  const navLinks = document.querySelectorAll(".desktop-nav .nav-link");
  const sections = document.querySelectorAll("main section[id]");

  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -60% 0px",
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));
}

// ====================================================
// 5. SCROLL REVEAL (INTERSECTION OBSERVER)
// ====================================================
function initScrollReveal() {
  const revealItems = document.querySelectorAll(".reveal-item");
  if (!revealItems.length) return;

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: "0px 0px -30px 0px"
  });

  revealItems.forEach(item => revealObserver.observe(item));
}

// ====================================================
// 6. ACCESSIBLE FAQ ACCORDION
// ====================================================
function initFaqAccordion() {
  const items = document.querySelectorAll(".faq-item");
  if (!items.length) return;

  items.forEach(item => {
    const button = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    if (!button || !answer) return;

    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";

      // Close other items
      items.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          const otherBtn = otherItem.querySelector(".faq-question");
          const otherAns = otherItem.querySelector(".faq-answer");
          if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
          if (otherAns) otherAns.hidden = true;
        }
      });

      // Toggle clicked item
      if (isExpanded) {
        item.classList.remove("active");
        button.setAttribute("aria-expanded", "false");
        answer.hidden = true;
      } else {
        item.classList.add("active");
        button.setAttribute("aria-expanded", "true");
        answer.hidden = false;
      }
    });
  });
}

// ====================================================
// 7. REAL EVENT COUNTDOWN TIMER (19 Sept 2026)
// ====================================================
function initCountdown() {
  const daysEl = document.getElementById("count-days");
  const hoursEl = document.getElementById("count-hours");
  const minutesEl = document.getElementById("count-minutes");
  const secondsEl = document.getElementById("count-seconds");
  const timerGrid = document.getElementById("countdown-timer");
  const expiredMsg = document.getElementById("countdown-expired");

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  const targetDate = new Date(eventData.eventDateISO).getTime();

  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      if (timerGrid) timerGrid.style.display = "none";
      if (expiredMsg) expiredMsg.style.display = "block";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

// ====================================================
// 8. RENDER SAFEONNET VIDEOS (DYNAMIC JS ARRAY)
// ====================================================
function renderSafeonnetVideos() {
  const container = document.getElementById("safeonnet-video-grid");
  if (!container) return;

  container.innerHTML = "";

  safeonnetVideos.forEach((video) => {
    const card = document.createElement("div");
    card.className = "video-card-item";

    const targetUrl = video.youtubeUrl && video.youtubeUrl.trim() !== "" 
      ? video.youtubeUrl 
      : eventData.safeonnet;

    let thumbHtml = "";
    if (video.thumbnail && video.thumbnail.trim() !== "") {
      thumbHtml = `
        <a href="${targetUrl}" target="_blank" rel="noopener noreferrer" class="video-thumb-link" aria-label="Watch ${video.title} on YouTube">
          <img src="${video.thumbnail}" alt="${video.title}" loading="lazy">
          <div class="video-play-overlay">
            <div class="play-circle-btn" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </a>
      `;
    } else {
      thumbHtml = `
        <a href="${targetUrl}" target="_blank" rel="noopener noreferrer" class="video-thumb-placeholder" aria-label="Visit Safeonnet on YouTube">
          <div class="play-circle-btn" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
          <span style="font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.08em; text-transform: uppercase;">Safeonnet Channel</span>
        </a>
      `;
    }

    card.innerHTML = `
      <div class="video-card-thumb-wrap">
        ${thumbHtml}
      </div>
      <div class="video-card-body">
        <h5 class="video-card-title">
          <a href="${targetUrl}" target="_blank" rel="noopener noreferrer" class="video-title-link">${video.title}</a>
        </h5>
        <p class="video-card-desc">${video.description}</p>
        <a href="${targetUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm video-cta-btn" style="align-self: flex-start;">
          <span>WATCH ON YOUTUBE</span>
          <span class="btn-arrow" aria-hidden="true">→</span>
        </a>
      </div>
    `;

    container.appendChild(card);
  });
}

// ====================================================
// 9. ABSTRACT CYBER NETWORK BACKGROUND CANVAS
// Lightweight, adapts smoothly to light & dark modes
// ====================================================
function initNetworkCanvas() {
  const canvas = document.getElementById("network-canvas");
  if (!canvas) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  const ctx = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  let dpr = window.devicePixelRatio || 1;
  let animationId = null;

  const particleCount = window.innerWidth < 768 ? 24 : 52;
  const maxDistance = 145;
  const particles = [];

  function getThemeColors() {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    return {
      nodeColor: isDark ? "255, 122, 26" : "234, 88, 12",
      lineColor: isDark ? "255, 122, 26" : "234, 88, 12",
      nodeAlphaMult: isDark ? 0.75 : 0.55,
      lineAlphaMult: isDark ? 0.2 : 0.14
    };
  }

  let themeColors = getThemeColors();
  window.updateCanvasTheme = () => {
    themeColors = getThemeColors();
  };

  function resize() {
    width = canvas.parentElement.offsetWidth;
    height = canvas.parentElement.offsetHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
  }

  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : -10;
      this.vx = (Math.random() - 0.5) * 0.45;
      this.vy = 0.15 + Math.random() * 0.35;
      this.radius = 1.2 + Math.random() * 1.5;
      this.alpha = 0.3 + Math.random() * 0.5;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y > height) this.reset();
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${themeColors.nodeColor}, ${this.alpha * themeColors.nodeAlphaMult})`;
      ctx.fill();
    }
  }

  function initParticles() {
    particles.length = 0;
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const alpha = (1 - dist / maxDistance) * themeColors.lineAlphaMult;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${themeColors.lineColor}, ${alpha})`;
          ctx.lineWidth = 0.9;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    drawConnections();

    animationId = requestAnimationFrame(animate);
  }

  resize();
  initParticles();
  animate();

  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      resize();
      initParticles();
    }, 150);
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      if (animationId) cancelAnimationFrame(animationId);
    } else {
      animate();
    }
  });
}
