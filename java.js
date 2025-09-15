// === Scroll to Top Button ===
window.onscroll = function () {
  document.getElementById("scrollTopBtn").style.display =
    document.documentElement.scrollTop > 100 ? "block" : "none";
};

function topFunction() {
  document.documentElement.scrollTop = 0;
}
// header footer start

document.addEventListener("DOMContentLoaded", () => {
  // Load header
  fetch('header.html')
    .then(res => {
      if (!res.ok) throw new Error('Failed to load header.html');
      return res.text();
    })
    .then(data => {
      const header = document.getElementById('header');
      if (header) header.innerHTML = data;
    })
    .catch(err => console.error(err));

  // Load footer
  fetch('footer.html')
    .then(res => {
      if (!res.ok) throw new Error('Failed to load footer.html');
      return res.text();
    })
    .then(data => {
      const footer = document.getElementById('footer');
      if (footer) footer.innerHTML = data;
    })
    .catch(err => console.error(err));
});

// Scroll behavior for navbar
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
});

// hero js start
const images = ['assets/4.jfif', 'assets/6.jfif', 'assets/7.jfif'];
images.forEach(src => {
  const img = new Image();
  img.src = src;
});
    // hero js end



window.addEventListener("scroll", () => {
  const logo = document.getElementById("logo-img");
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.remove("bg-transparent", "navbar-dark");
    navbar.classList.add("bg-white", "navbar-light");

    logo.src = "assets/icon.png";
  } else {
    navbar.classList.remove("bg-white", "navbar-light");
    navbar.classList.add("bg-transparent", "navbar-dark");

    logo.src = "assets/icon2.png";
  }
});

// destnation start
 // Animation on scroll
  document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('[data-animate]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    animateElements.forEach(element => {
      observer.observe(element);
    });
    
    // Add hover effect to paragraphs
    const paragraphs = document.querySelectorAll('.content p');
    paragraphs.forEach(p => {
      p.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
      });
      p.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    });
  });
  // destination end