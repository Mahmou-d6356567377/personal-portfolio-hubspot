// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Global Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, { threshold: 0.1 });

// Observe all sections
document.querySelectorAll('section[id]').forEach(section => {
  observer.observe(section);
});

// HubSpot form loading (if needed)
if (window.hbspt) {
  hbspt.forms.create({
    region: "na1",
    portalId: "{{ module.hubspot_portal_id|default('your-portal-id') }}",
    target: '.hubspot-form'
  });
}
