// ── Category Filter ──
const filterBtns = document.querySelectorAll('.filter-btn');
const blogCards  = document.querySelectorAll('.blog-card');
const featuredPost = document.querySelector('.blog-featured');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {

    // Update active state
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    // Filter blog cards
    blogCards.forEach(card => {
      const match = filter === 'all' ||
                    card.getAttribute('data-category') === filter;
      card.style.display = match ? 'flex' : 'none';
    });

    // Show/hide featured post
    if (filter === 'all') {
      featuredPost.style.display = 'grid';
    } else {
      const featuredMatch =
        featuredPost.getAttribute('data-category') === filter;
      featuredPost.style.display = featuredMatch ? 'grid' : 'none';
    }
  });
});

// ── Newsletter Form Feedback ──
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    newsletterForm.innerHTML =
      '<p class="form-success">✅ You\'re subscribed! Welcome to Hawthorn Works.</p>';
  });
}