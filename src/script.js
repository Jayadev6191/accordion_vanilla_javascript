const accordion = document.getElementById("accordion");
let lastSelectedSection = null; // stores last selection

// add event listener to the parent (accordion)
accordion.addEventListener("click", (e) => {
  // stop bubbling at accordion element
  e.stopPropagation();

  if (e.target) {
    let header = e.target;

    if (lastSelectedSection === header) {
      // When clicked on already opened section
      header.nextElementSibling.classList.remove("block");
      lastSelectedSection = null;
      return;
    }

    header.nextElementSibling.classList.add("block");
    if (lastSelectedSection) {
      lastSelectedSection.nextElementSibling.classList.remove("block");
    }
    lastSelectedSection = header;
  }
});
