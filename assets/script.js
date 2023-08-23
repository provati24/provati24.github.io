document.addEventListener('DOMContentLoaded', () => {

  // --- script from https://bulma.io/documentation/components/navbar/ ---
  
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {
      
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);
      
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');
      
    });
  });
  
  // --- script from https://codepen.io/malsu/pen/VwKzoPG ---
  
  function navHighlighter() {
    
    // Get all sections that have an ID defined
    const $sections = document.querySelectorAll("section[id]");
    
    // Get current scroll position
    let scrollY = window.pageYOffset;
    
    // Now we loop through sections to get height, top and ID values for each
    $sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute("id");
      
      /*
      - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
      - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
      */
      if (
        scrollY > sectionTop &&
        scrollY <= sectionTop + sectionHeight
        ){
          document.querySelector(".navbar a[href*=" + sectionId + "]").classList.add("is-active");
        } else {
          document.querySelector(".navbar a[href*=" + sectionId + "]").classList.remove("is-active");
        }
      });
    }

    navHighlighter();

    // Add an event listener listening for scroll
    window.addEventListener("scroll", navHighlighter);
    
  });
  