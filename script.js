document.addEventListener("DOMContentLoaded", function() {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach(function(header) {
    header.addEventListener("click", function() {
      const accordionContent = this.nextElementSibling;

      if (accordionContent.style.display === "block") {
        accordionContent.style.display = "none";
        this.classList.remove("active");
      } else {
        accordionContent.style.display = "block";
        this.classList.add("active");
      }
    });
  });
});
