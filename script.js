/* Basic interactive behaviors: search toggle, service slider arrows, footer year */

document.addEventListener('DOMContentLoaded', function(){
  // search toggle
  const searchBtn = document.getElementById('searchBtn');
  const searchBar = document.getElementById('searchBar');
  const closeSearch = document.getElementById('closeSearch');

  searchBtn.addEventListener('click', () => {
    if (searchBar.style.display === 'block') {
      searchBar.style.display = 'none';
    } else {
      searchBar.style.display = 'block';
      document.getElementById('searchInput').focus();
    }
  });
  closeSearch.addEventListener('click', () => searchBar.style.display = 'none');

  // services slider controls
  const slider = document.getElementById('servicesSlider');
  const prev = document.getElementById('srvPrev');
  const next = document.getElementById('srvNext');

  prev.addEventListener('click', () => {
    slider.scrollBy({left: -300, behavior: 'smooth'});
  });

  next.addEventListener('click', () => {
    slider.scrollBy({left: 300, behavior: 'smooth'});
  });

  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Basic focus style for accessibility (keyboard)
  const iconBtns = document.querySelectorAll('.icon-btn');
  iconBtns.forEach(b => b.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') b.click();
  }));
});
