// endings.js
// ネタバレ防止・検索・タイプ絞り込みのみ（ロック/進捗なし）

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('grid');
  const q = document.getElementById('q');
  const filter = document.getElementById('filter');
  const spoilerToggle = document.getElementById('spoilerToggle');

  if (!grid) return;

  const cards = Array.from(grid.querySelectorAll('.card'));

  function render() {
    const term = (q?.value || '').trim().toLowerCase();
    const mode = (filter?.value || 'all').toLowerCase(); // all / happy / complicated / good / bad / true
    const hideSpoiler = !!(spoilerToggle?.checked);

    for (const card of cards) {
      // ネタバレ防止（ロック概念なし：トグルで全体に適用）
      card.classList.toggle('needs-unblur', hideSpoiler);
      card.classList.toggle('spoiled', !hideSpoiler);

      // 検索＆タイプ絞り
      const hay = (
        card.querySelector('.name')?.textContent +
        ' ' + (card.dataset.tags || '') +
        ' ' + (card.dataset.type || '')
      ).toLowerCase();

      let pass = true;
      if (term && !hay.includes(term)) pass = false;
      if (mode !== 'all' && (card.dataset.type || '').toLowerCase() !== mode) pass = false;

      card.parentElement.style.display = pass ? '' : 'none';
      card.tabIndex = pass ? 0 : -1;
    }
  }

  q?.addEventListener('input', render);
  filter?.addEventListener('change', render);
  spoilerToggle?.addEventListener('change', render);

  render();
});
