/* ======================================================
   DatoClaro - JS
   - Menú móvil
   - Animaciones (IntersectionObserver)
   - Modal "Solicitar demo"
   - Submit simulado (sin backend)
====================================================== */

(function () {
  // Año footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Menú móvil
  const burger = document.getElementById("burger");
  const mobileNav = document.getElementById("mobileNav");

  function toggleMobileNav(force) {
    const isOpen = typeof force === "boolean" ? force : !mobileNav.classList.contains("is-open");
    mobileNav.classList.toggle("is-open", isOpen);
    burger.setAttribute("aria-expanded", String(isOpen));
    mobileNav.setAttribute("aria-hidden", String(!isOpen));
  }

  if (burger && mobileNav) {
    burger.addEventListener("click", () => toggleMobileNav());
    mobileNav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => toggleMobileNav(false));
    });
  }

  // Animaciones suaves al hacer scroll
  const animated = document.querySelectorAll(".fade-in");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("is-visible");
      });
    },
    { threshold: 0.15 }
  );
  animated.forEach((el) => io.observe(el));

  // Modal demo
  const demoModal = document.getElementById("demoModal");
  const openDemo = document.getElementById("openDemo");
  const closeDemo = document.getElementById("closeDemo");
  const cancelDemo = document.getElementById("cancelDemo");
  const sendDemo = document.getElementById("sendDemo");

  function setModal(open) {
    if (!demoModal) return;
    demoModal.classList.toggle("is-open", open);
    demoModal.setAttribute("aria-hidden", String(!open));
    document.body.style.overflow = open ? "hidden" : "";
  }

  if (openDemo) openDemo.addEventListener("click", () => setModal(true));
  if (closeDemo) closeDemo.addEventListener("click", () => setModal(false));
  if (cancelDemo) cancelDemo.addEventListener("click", () => setModal(false));

  if (demoModal) {
    demoModal.addEventListener("click", (e) => {
      const target = e.target;
      if (target && target.dataset && target.dataset.close === "true") setModal(false);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && demoModal.classList.contains("is-open")) setModal(false);
    });
  }

  if (sendDemo) {
    sendDemo.addEventListener("click", () => {
      // Simulación de envío
      setModal(false);
      alert("Listo. Tu solicitud de demo fue registrada (simulación). Conectamos esto a un backend cuando quieras.");
    });
  }

  // Form contacto (simulado)
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Acá podés integrar Formspree / Netlify Forms / un endpoint en Vercel
      if (formStatus) {
        formStatus.textContent = "Mensaje enviado (simulación). Si querés, lo conectamos a un servicio real en 5 minutos.";
      }

      contactForm.reset();
    });
  }
})();
