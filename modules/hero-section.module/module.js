// Hero animation
if (document.querySelector('#hero')) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelector('.hero-title').classList.add('fade-in-up');
        entry.target.querySelector('.hero-subtitle').classList.add('fade-in-up');
      }
    });
  });
  observer.observe(document.querySelector('#hero'));
}
