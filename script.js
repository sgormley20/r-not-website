document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".read-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      // Find the nearest card (works for team pages)
      const card = button.closest(".team-card");

      // Prefer the content inside the same card
      let content = card ? card.querySelector(".read-more-content") : null;

         // Fallback for other pages: find the next .read-more-content after the button
      if (!content) {
        let next = button.nextElementSibling;
        while (next && !next.classList.contains("read-more-content")) {
          next = next.nextElementSibling;
        }
        content = next;
      }

      // Safety check
      if (!content) return;

      const isOpen = getComputedStyle(content).display !== "none";

      const openText = button.dataset.open || "Read less";
      const closedText = button.dataset.closed || "Read more";

      content.style.display = isOpen ? "none" : "block";
      button.textContent = isOpen ? closedText : openText;
    });
  });

   const sidebar = document.querySelector(".sidebar.section-nav");
  const mobileLinks = document.querySelector(".mobile-nav-links");

  if (sidebar && mobileLinks) {
    const links = sidebar.querySelectorAll("a.pill");

    links.forEach(link => {
      const clone = link.cloneNode(true);
      mobileLinks.appendChild(clone);
    });

    // Optional: close dropdown after tapping a link
    mobileLinks.addEventListener("click", (e) => {
      if (e.target.closest("a")) {
        const nav = document.querySelector(".mobile-nav");
        if (nav) nav.open = false;
      }
    });
  }
});
