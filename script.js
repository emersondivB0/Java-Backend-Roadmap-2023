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

function changeLanguage(language) {
  var currentLanguage = localStorage.getItem('language');
   if (currentLanguage !== language) {
    // Guardar preferencia de idioma en las cookies o almacenamiento local
    // Aquí se utiliza el almacenamiento local como ejemplo
    localStorage.setItem('language', language);
     // Redireccionar al usuario a la página correspondiente al idioma seleccionado
     var path = language === 'es' ? '/':'/en/';
    window.location.href = path;
  }
}
 // Cargar idioma almacenado previamente en el almacenamiento local (si existe)
window.addEventListener('DOMContentLoaded', function () {
  var savedLanguage = localStorage.getItem('language');
  if (savedLanguage) {
    changeLanguage(savedLanguage);
  }
});

window.addEventListener('DOMContentLoaded', function () {
  var savedLanguage = localStorage.getItem('language');
  if (!savedLanguage) {
    // Obtener el idioma del navegador
    var browserLanguage = navigator.language || navigator.userLanguage;
     // Redireccionar al usuario al idioma del navegador
    if (browserLanguage.startsWith('en')) {
      changeLanguage('en');
    } else if (browserLanguage.startsWith('es')) {
      changeLanguage('es');
    }
  }
});