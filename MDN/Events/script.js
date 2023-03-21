
      const body = document.querySelector("body");
      const input = document.querySelector("input");

      body.addEventListener("click", search);

      function search (event) {
        if (event.target.closest('.search-form_btn')) {
          input.classList.toggle('search-form__active');
        }
        if (!event.target.closest('.serch-form')) {
          input.classList.remove('search-form__active');
        }
      }