document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".read-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      // Find the nearest card (works for team pages)
      const card = button.closest(".team-card");

      // Prefer the content inside the same card
      let content = card ? card.querySelector(".read-more-content") : null;

      // Fallback for other pages where content is immediately after the button
      if (!content) {
        const next = button.nextElementSibling;
        if (next && next.classList.contains("read-more-content")) content = next;
      }

      // Safety check
      if (!content) return;

      const isOpen = content.style.display === "block";

      const openText = button.dataset.open || "Read less";
      const closedText = button.dataset.closed || "Read more";

      content.style.display = isOpen ? "none" : "block";
      button.textContent = isOpen ? closedText : openText;
    });
  });
});
