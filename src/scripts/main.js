/* ==========================================================================
   FADE STUDIO — INTERACTION & ANIMATION ENGINE
   Shared across all 13 pages with strict element-existence guards
   Mobile-First & Touch-Optimized
   ========================================================================== */

function initFadeStudio() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouchOrMobile = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (window.innerWidth < 1024);

  // Global UI elements
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const drawerCloseBtn = document.getElementById('mobileDrawerClose');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const generalModal = document.getElementById('generalModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalMessage = document.getElementById('modalMessage');

  // --- MODAL HELPERS ---
  window.openFadeModal = function(title, message) {
    if (!generalModal) return;
    if (modalTitle && title) modalTitle.innerHTML = title;
    if (modalMessage && message) modalMessage.innerHTML = message;
    generalModal.classList.add('is-open');
    generalModal.setAttribute('aria-hidden', 'false');
  };

  window.closeFadeModal = function() {
    if (!generalModal) return;
    generalModal.classList.remove('is-open');
    generalModal.setAttribute('aria-hidden', 'true');
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeFadeModal);
  if (generalModal) {
    generalModal.addEventListener('click', (e) => {
      if (e.target === generalModal) closeFadeModal();
    });
  }

  // --- MOBILE DRAWER CONTROLLER ---
  const openDrawer = () => {
    if (!mobileDrawer) return;
    mobileDrawer.classList.add('is-active');
    if (drawerBackdrop) drawerBackdrop.classList.add('is-active');
    if (mobileToggle) {
      mobileToggle.classList.add('is-active');
      mobileToggle.setAttribute('aria-expanded', 'true');
    }
    document.body.classList.add('drawer-open');
  };

  const closeDrawer = () => {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove('is-active');
    if (drawerBackdrop) drawerBackdrop.classList.remove('is-active');
    if (mobileToggle) {
      mobileToggle.classList.remove('is-active');
      mobileToggle.setAttribute('aria-expanded', 'false');
    }
    document.body.classList.remove('drawer-open');
  };

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = mobileDrawer.classList.contains('is-active');
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    if (drawerCloseBtn) {
      drawerCloseBtn.addEventListener('click', closeDrawer);
    }

    if (drawerBackdrop) {
      drawerBackdrop.addEventListener('click', closeDrawer);
    }

    // Close on any drawer link click
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeDrawer);
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('is-active')) {
        closeDrawer();
      }
    });

    // Auto-close drawer on resizing to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024 && mobileDrawer.classList.contains('is-active')) {
        closeDrawer();
      }
    });
  }

  // --- BACK TO TOP BUTTON ---
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.pointerEvents = 'auto';
      } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.pointerEvents = 'none';
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      if (window.fadeLenis) {
        window.fadeLenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  // --- OFFER SUBMISSION FORMS ---
  const offerForms = document.querySelectorAll('.fade-offer-form');
  offerForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      const emailVal = emailInput ? emailInput.value.trim() : '';

      const waUrl = window.FADE_WHATSAPP_URL || 'https://wa.me/91XXXXXXXXXX?text=Hi%20FADE%20STUDIO%2C%20I%20want%20to%20claim%20the%2015%25%20welcome%20offer.';
      window.open(waUrl, '_blank');

      openFadeModal(
        'Welcome to <span class="italic-serif">FADE STUDIO</span>',
        `Your 15% offer voucher has been activated! We opened WhatsApp to connect you with our concierge${emailVal ? `, and sent a backup note to <strong>${emailVal}</strong>` : ''}. Present your chat confirmation upon appointment checkout.`
      );
      form.reset();
    });
  });

  // --- GALLERY FILTERS & LIGHTBOX (gallery.html) ---
  const filterBtns = document.querySelectorAll('.gallery-filter-bar .filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-grid .gallery-item');
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  if (filterBtns.length && galleryItems.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        const filter = btn.getAttribute('data-filter') || 'all';

        galleryItems.forEach(item => {
          const cat = item.getAttribute('data-category') || '';
          if (filter === 'all' || cat.includes(filter)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });

        if (typeof ScrollTrigger !== 'undefined') {
          ScrollTrigger.refresh();
        }
      });
    });
  }

  if (lightboxModal && lightboxImg) {
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const title = item.querySelector('.gallery-title');
        const cat = item.querySelector('.gallery-cat');

        if (img) lightboxImg.src = img.src;
        if (lightboxCaption) {
          const tText = title ? title.textContent : 'FADE STUDIO Gallery';
          const cText = cat ? cat.textContent : '';
          lightboxCaption.innerHTML = `${tText} <span class="text-gold" style="font-size:13px; display:block; margin-top:4px; font-family:var(--font-sans);">${cText}</span>`;
        }

        lightboxModal.classList.add('is-open');
        lightboxModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('drawer-open');
      });
    });

    const closeLightbox = () => {
      lightboxModal.classList.remove('is-open');
      lightboxModal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('drawer-open');
    };

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });

    // Touch Swipe-Down to close on phones
    let touchStartY = 0;
    lightboxModal.addEventListener('touchstart', (e) => {
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    lightboxModal.addEventListener('touchend', (e) => {
      const touchEndY = e.changedTouches[0].screenY;
      if (touchEndY - touchStartY > 60) {
        closeLightbox();
      }
    }, { passive: true });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightboxModal.classList.contains('is-open')) {
        closeLightbox();
      }
    });
  }

  // --- FORM INLINE VALIDATION HELPERS ---
  const showFieldError = (field, message) => {
    clearFieldError(field);
    field.classList.add('has-error');
    const err = document.createElement('span');
    err.className = 'field-error-msg';
    err.textContent = message;
    field.parentNode.appendChild(err);
  };

  const clearFieldError = (field) => {
    field.classList.remove('has-error');
    const existing = field.parentNode.querySelector('.field-error-msg');
    if (existing) existing.remove();
  };

  // --- BOOKING FORM LOGIC (book.html) ---
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceParam = urlParams.get('service');
    const offerParam = urlParams.get('offer');

    const serviceSelect = document.getElementById('bookService');
    if (serviceSelect) {
      if (serviceParam) {
        for (let i = 0; i < serviceSelect.options.length; i++) {
          if (serviceSelect.options[i].value.toLowerCase().includes(serviceParam.toLowerCase())) {
            serviceSelect.selectedIndex = i;
            break;
          }
        }
      } else if (offerParam) {
        for (let i = 0; i < serviceSelect.options.length; i++) {
          if (serviceSelect.options[i].value.toLowerCase().includes(offerParam.toLowerCase())) {
            serviceSelect.selectedIndex = i;
            break;
          }
        }
      }
    }

    const dateInput = document.getElementById('bookDate');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.min = today;
    }

    // Clear errors on field interaction
    bookingForm.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(field => {
      field.addEventListener('input', () => clearFieldError(field));
      field.addEventListener('change', () => clearFieldError(field));
    });

    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameEl = document.getElementById('bookName');
      const phoneEl = document.getElementById('bookPhone');
      const serviceEl = document.getElementById('bookService');
      const stylistEl = document.getElementById('bookStylist');
      const dateEl = document.getElementById('bookDate');
      const timeEl = document.getElementById('bookTime');
      const notesEl = document.getElementById('bookNotes');

      let hasError = false;

      if (!nameEl?.value.trim()) {
        showFieldError(nameEl, 'Please enter your full name.');
        hasError = true;
      }
      if (!phoneEl?.value.trim() || phoneEl.value.trim().length < 8) {
        showFieldError(phoneEl, 'Please enter a valid phone number (at least 8 digits).');
        hasError = true;
      }
      if (!serviceEl?.value) {
        showFieldError(serviceEl, 'Please select a salon service.');
        hasError = true;
      }
      if (!dateEl?.value) {
        showFieldError(dateEl, 'Please choose an appointment date.');
        hasError = true;
      }
      if (!timeEl?.value) {
        showFieldError(timeEl, 'Please select a preferred time slot.');
        hasError = true;
      }

      if (hasError) return;

      const name = nameEl.value.trim();
      const phone = phoneEl.value.trim();
      const service = serviceEl.value;
      const stylist = stylistEl?.value || 'Any Available Master Artist';
      const date = dateEl.value;
      const time = timeEl.value;
      const notes = notesEl?.value.trim();

      openFadeModal(
        'Appointment <span class="italic-serif">Confirmed</span>',
        `<div style="display:flex; flex-direction:column; gap:12px; text-align:left; margin-top:8px;">
          <p>Thank you, <strong>${name}</strong>. Your grooming session has been reserved.</p>
          <div style="background:#FAF8F5; border:1px solid rgba(26,26,28,0.12); padding:16px; font-style:normal;">
            <p style="font-weight:700; margin-bottom:4px; color:#B89B5E; text-transform:uppercase; font-size:10.5px; letter-spacing:0.1em;">Booking Summary</p>
            <p style="font-style:normal; font-size:12px;"><strong>Service:</strong> ${service}</p>
            <p style="font-style:normal; font-size:12px;"><strong>Stylist:</strong> ${stylist}</p>
            <p style="font-style:normal; font-size:12px;"><strong>Schedule:</strong> ${date} at ${time}</p>
            <p style="font-style:normal; font-size:12px;"><strong>Contact Phone:</strong> ${phone}</p>
            ${notes ? `<p style="font-style:italic; font-size:11.5px; margin-top:6px; color:#666;">"${notes}"</p>` : ''}
          </div>
          <p style="font-size:11.5px; color:#777;">A confirmation SMS has been dispatched. Need adjustments? Call our front desk at +91 98765 43210.</p>
        </div>`
      );

      bookingForm.reset();
    });
  }

  // --- CONTACT FORM LOGIC (contact.html) ---
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(field => {
      field.addEventListener('input', () => clearFieldError(field));
      field.addEventListener('change', () => clearFieldError(field));
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameEl = document.getElementById('contactName');
      const emailEl = document.getElementById('contactEmail');
      const messageEl = document.getElementById('contactMessage');

      let hasError = false;
      if (!nameEl?.value.trim()) {
        showFieldError(nameEl, 'Please enter your name.');
        hasError = true;
      }
      if (!emailEl?.value.trim() || !emailEl.value.includes('@')) {
        showFieldError(emailEl, 'Please enter a valid email address.');
        hasError = true;
      }
      if (!messageEl?.value.trim()) {
        showFieldError(messageEl, 'Please enter your message.');
        hasError = true;
      }

      if (hasError) return;

      const cName = nameEl.value.trim();
      openFadeModal(
        'Message <span class="italic-serif">Received</span>',
        `Thank you <strong>${cName}</strong>. Our Indiranagar concierge will review your inquiry and get in touch within two business hours.`
      );
      contactForm.reset();
    });
  }

  // --- REDUCED MOTION CHECK ---
  if (prefersReducedMotion) {
    const preloader = document.getElementById('preloader');
    if (preloader) preloader.style.display = 'none';
    return;
  }

  // --- GSAP PLUGIN REGISTRATION ---
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  // --- SMOOTH SCROLLING (DESKTOP ONLY) ---
  // On touch/mobile devices, use native browser scrolling for responsive feel
  if (typeof Lenis !== 'undefined' && !isTouchOrMobile) {
    window.fadeLenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.0,
      smoothTouch: false,
    });

    window.fadeLenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      window.fadeLenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }

  // --- PRELOADER (HOME PAGE) ---
  const preloader = document.getElementById('preloader');
  const progressBar = document.getElementById('preloaderProgressBar');
  const counterPin = document.getElementById('preloaderCounterPin');
  const counterVal = document.getElementById('preloaderCounter');

  if (preloader && counterVal) {
    // Smooth 2-3 second animation as requested
    const countDuration = 2.4;

    const counterObj = { val: 0 };
    gsap.to(counterObj, {
      val: 100,
      duration: countDuration,
      ease: 'power2.inOut',
      onUpdate: () => {
        const rounded = Math.round(counterObj.val);
        counterVal.textContent = `${rounded}%`;
        if (progressBar) {
          progressBar.style.width = `${counterObj.val}%`;
        }
        if (counterPin) {
          counterPin.style.left = `${counterObj.val}%`;
          counterPin.style.setProperty('--progress-pct', `${counterObj.val}%`);
        }
      },
      onComplete: () => {
        const revealTl = gsap.timeline({
          onComplete: () => {
            preloader.style.display = 'none';
            if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
          }
        });

        // At 100%, fade out the loader and show the main page
        revealTl
          .to(preloader, {
            opacity: 0,
            duration: 0.5,
            ease: 'power2.inOut',
          })
          .from('.hero-main-title .reveal-inner', {
            yPercent: 120,
            opacity: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
          }, '-=0.25')
          .from('.hero-left-column', {
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out',
          }, '-=0.4')
          .from('.hero-copy-group, .hero-cta-group', {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
          }, '-=0.4')
          .from('.hero-editorial-gallery', {
            y: 30,
            opacity: 0,
            duration: 0.7,
            ease: 'power2.out',
          }, '-=0.4');

        initGuardedScrollAnimations();
      }
    });
  } else {
    initGuardedScrollAnimations();
  }

  // --- GUARDED SCROLL ANIMATIONS ---
  function initGuardedScrollAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    // 1. Heading reveals
    const headings = document.querySelectorAll(
      '.featured-heading, .statement-heading, .shaping-heading, .team-heading, .offer-heading, .section-title, .page-hero-title'
    );
    headings.forEach(heading => {
      gsap.from(heading, {
        scrollTrigger: {
          trigger: heading,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    });

    // 2. Parallax images: Enable subtle parallax on tablet/desktop, disable on small phones
    if (window.innerWidth >= 768) {
      const parallaxContainers = document.querySelectorAll('.parallax-container');
      parallaxContainers.forEach(container => {
        const img = container.querySelector('.parallax-image');
        if (!img) return;

        gsap.fromTo(img,
          { yPercent: -5 },
          {
            yPercent: 5,
            ease: 'none',
            scrollTrigger: {
              trigger: container,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            }
          }
        );
      });
    }

    // 3. Pinned Horizontal Scroll (Home Featured Cards) — DESKTOP ONLY (>=1024px)
    const featuredSection = document.getElementById('featured');
    const cardsTrack = document.getElementById('featuredCardsTrack');
    const cardsContainer = document.getElementById('featuredCardsContainer');

    if (featuredSection && cardsTrack && cardsContainer) {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 1024px)', () => {
        const calculateScroll = () => {
          const trackWidth = cardsTrack.scrollWidth;
          const containerWidth = cardsContainer.clientWidth;
          return Math.max(0, trackWidth - containerWidth + 60);
        };

        const xDist = calculateScroll();
        if (xDist > 0) {
          gsap.to(cardsTrack, {
            x: () => -calculateScroll(),
            ease: 'none',
            scrollTrigger: {
              trigger: featuredSection,
              pin: true,
              start: 'top top',
              end: () => `+=${calculateScroll() + 350}`,
              scrub: 1,
              invalidateOnRefresh: true,
            }
          });
        }

        return () => {
          // Revert when below 1024px: clear transform props so CSS scroll-snap works
          gsap.set(cardsTrack, { clearProps: 'all' });
        };
      });
    }

    // 4. Moments columns
    const momentsGrid = document.querySelector('.moments-columns-grid');
    if (momentsGrid) {
      const cols = momentsGrid.querySelectorAll('.moment-column');
      gsap.from(cols, {
        scrollTrigger: {
          trigger: momentsGrid,
          start: 'top 85%',
        },
        y: 35,
        opacity: 0,
        stagger: 0.15,
        duration: 0.75,
        ease: 'power3.out',
      });
    }

    // 5. Team items
    const teamList = document.querySelector('.team-articles-list');
    if (teamList) {
      const items = teamList.querySelectorAll('.team-member-item');
      gsap.from(items, {
        scrollTrigger: {
          trigger: teamList,
          start: 'top 88%',
        },
        y: 25,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: 'power2.out',
      });
    }

    // Initial refresh
    ScrollTrigger.refresh();
  }

  // --- SCROLLTRIGGER REFRESH HANDLERS ---
  window.addEventListener('load', () => {
    if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
  });

  window.addEventListener('orientationchange', () => {
    setTimeout(() => {
      if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
    }, 200);
  });

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
    }, 250);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFadeStudio);
} else {
  initFadeStudio();
}
