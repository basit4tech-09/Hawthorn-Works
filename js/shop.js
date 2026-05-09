// ── Filter Buttons ──
const filterBtns = document.querySelectorAll('.filter-btn');
const officeCards = document.querySelectorAll('.office-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {

    // Update active button
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    officeCards.forEach(card => {
      if (filter === 'all' || card.getAttribute('data-size') === filter) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
 // Quick view modal (shop)
  var quickButtons = document.querySelectorAll('.quick-view');
  var modal = document.getElementById('quick-modal');
  var modalClose = document.getElementById('modal-close');
  if(quickButtons && modal){
    quickButtons.forEach(function(btn){
      btn.addEventListener('click', function(e){
        var card = e.target.closest('.product-card');
        if(!card) return;
        var name = card.dataset.name || card.querySelector('h3')?.innerText || '';
        var price = card.dataset.price || card.querySelector('.price')?.innerText || '';
        var img = card.dataset.img || card.querySelector('img')?.src || '';
        var desc = card.dataset.desc || card.querySelector('desc')?.innerText ||'';
        document.getElementById('modal-name').innerText = name;
        document.getElementById('modal-price').innerText = price;
        document.getElementById('modal-desc').innerText = desc;
        document.getElementById('modal-img').src = img;
        modal.setAttribute('aria-hidden','false');
      });
    });

    if(modalClose){
      modalClose.addEventListener('click', function(){
        modal.setAttribute('aria-hidden','true');
      });
    }

    // close on overlay click
    modal.addEventListener('click', function(e){
      if(e.target === modal) modal.setAttribute('aria-hidden','true');
    });
  }
