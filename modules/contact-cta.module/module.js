(() => {
  const cta = document.querySelector('.contact-cta');
  if (!cta) return;

  cta.addEventListener('mousemove', (e) => {
    const rect = cta.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;

    cta.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  });

  cta.addEventListener('mouseleave', () => {
    cta.style.transform = 'translate3d(0,0,0)';
  });
})();
