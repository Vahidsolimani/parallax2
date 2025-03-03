///////for section///////////
const sections = document.querySelectorAll(".section");
const _Main = document.querySelector('.main')
// const box = document.querySelectorAll('.box')
    let lastScrollY = window.scrollY;
    let flag = true;

    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;
      lastScrollY = currentScrollY;
      // console.log(lastScrollY);
      
      //////////////section///////////
        sections.forEach((section, i) => {
        const shoro = (window.innerHeight) * (i);

        if (scrollingDown && window.scrollY >= shoro) {
          section.style.transform = "translateX(0)";
        } 
        else if (!scrollingDown && window.scrollY < shoro) {
          section.style.transform = "translateX(-100vw)";
       
        }
      });
    });


    ////////////////
    function startSite() {
      document.getElementById("welcome-text").classList.add("-translate-y-full", "opacity-0");

      setTimeout(() => {
          document.getElementById("start-screen").classList.add("opacity-0");
      }, 500);

      setTimeout(() => {
          document.getElementById("start-screen").classList.add("dis");
          document.getElementById("main-content").classList.remove("dis");
      }, 1000);
  }

