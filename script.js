document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section"); // Semua section
  const navLinks = document.querySelectorAll(".nav-2 a"); // Semua link navigasi

  let currentSection = ""; // ID section yang terlihat saat ini

  sections.forEach((section) => {
      const sectionTop = section.offsetTop - 50; // Offset 50px untuk header tetap
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute("id"); // Dapatkan ID section
      }
  });

  navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
          link.classList.add("active");
      }
  });
});



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nav-bg").style.width = "90%";
  } else {
    document.getElementById("nav-bg").style.width = "296px";

  }
}

const categoryTitle = document.querySelectorAll('.category-title');
const allCategoryPosts = document.querySelectorAll('.all');

for(let i = 0; i < categoryTitle.length; i++){
    categoryTitle[i].addEventListener('click', filterPosts.bind(this, categoryTitle[i]));
}

function filterPosts(item){
    changeActivePosition(item);
    for(let i = 0; i < allCategoryPosts.length; i++){
        if(allCategoryPosts[i].classList.contains(item.attributes.id.value)){
            allCategoryPosts[i].style.display = "block";
        } else {
            allCategoryPosts[i].style.display = "none";
        }
    }
}

function changeActivePosition(activeItem){
    for(let i = 0; i < categoryTitle.length; i++){
        categoryTitle[i].classList.remove('active');
    }
    activeItem.classList.add('active');
};

var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});


document.getElementById('.category-select').addEventListener('change', function () {
  const selectedCategory = this.value; 
  const posts = document.querySelectorAll('.blog-slider'); 

  posts.forEach(post => {
    if (selectedCategory === 'all') {
      post.style.display = 'block';
    } else if (post.classList.contains(selectedCategory)) {
      post.style.display = 'block'; 
    } else {
      post.style.display = 'none'; 
    }
  });
});
