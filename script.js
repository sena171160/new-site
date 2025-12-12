document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".cta-button");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.remove("is-pressed");
      // Force reflow to restart animation if clicked repeatedly
      void btn.offsetWidth;
      btn.classList.add("is-pressed");
      setTimeout(() => btn.classList.remove("is-pressed"), 320);
    });
  });
});
