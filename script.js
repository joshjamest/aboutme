const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      document.querySelectorAll(".accordion-content").forEach(c => c.style.maxHeight = null);
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});