document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;

  const title = document.querySelector("title");
  if (title && page && page !== "home") {
    title.textContent = `${title.textContent} | Foundry Demo`;
  }

  document.querySelectorAll("[data-reveal-button]").forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-reveal-button");
      const target = document.getElementById(targetId);
      if (!target) {
        return;
      }

      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", expanded ? "false" : "true");
      target.hidden = expanded;
    });
  });
});