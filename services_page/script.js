var coll = document.getElementsByClassName("collapsible");

    //Tradução 
    function setLanguage(lang) {
        document.querySelectorAll('[data-pt]').forEach(el => {
          el.innerText = el.getAttribute(`data-${lang}`);
        });
      }
    
      window.setLanguage = setLanguage;
    

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("activo");
        

        const parentElement = this.closest('.toggle_element');
        const content = parentElement.querySelector('.content');

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}