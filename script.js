const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const openItem = document.querySelector(".accordion-content[style*='max-height']");
    if (openItem && openItem !== content) {
      openItem.style.maxHeight = null;
    }
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});