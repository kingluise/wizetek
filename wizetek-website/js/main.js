document.documentElement.classList.add("js-reveal");

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    document.body.classList.toggle("menu-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    menuButton.textContent = isOpen ? "×" : "☰";
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      document.body.classList.remove("menu-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation menu");
      menuButton.textContent = "☰";
    });
  });
}

const currentPage = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a[data-page]").forEach(link => {
  if (link.dataset.page === currentPage) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
});

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add("is-visible"));
}

const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll("[data-category]");
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(item => {
      item.classList.remove("active");
      item.setAttribute("aria-pressed", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");
    const filter = button.dataset.filter;
    projectCards.forEach(card => {
      card.hidden = !(filter === "all" || card.dataset.category === filter);
    });
  });
});

const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", event => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;

    const formData = new FormData(contactForm);
    const email = contactForm.dataset.contactEmail || "YOUR-BUSINESS-EMAIL@example.com";
    const name = formData.get("name") || "";
    const senderEmail = formData.get("email") || "";
    const company = formData.get("company") || "Not provided";
    const service = formData.get("service") || "Not specified";
    const budget = formData.get("budget") || "Not specified";
    const message = formData.get("message") || "";

    const subject = encodeURIComponent(`Project enquiry: ${service}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${senderEmail}\nCompany: ${company}\nService: ${service}\nBudget: ${budget}\n\nProject details:\n${message}`
    );

    const status = document.querySelector("#form-status");
    if (email === "YOUR-BUSINESS-EMAIL@example.com" || !email.includes("@")) {
      status.textContent = "The form is validated, but the business email is still a placeholder. Update the email address in contact.html before using this form.";
      status.classList.add("show");
      return;
    }

    status.textContent = "Your email application should open with the enquiry prepared. You must send the email there; this static website does not send or store messages itself.";
    status.classList.add("show");
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  });
}

document.querySelectorAll("[data-year]").forEach(node => {
  node.textContent = new Date().getFullYear();
});
