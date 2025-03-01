const filterButtons = document.querySelectorAll('.filter-list button');
const productItems = document.querySelectorAll('.products-list li');

filterButtons.forEach(button => {
  button.addEventListener('click', function () {
    const filter = this.textContent.trim(); // Отримуємо текст кнопки

    productItems.forEach(item => {
      const productDesc = item
        .querySelector('.products-list-desc')
        .textContent.trim();

      if (filter === 'Всі' || productDesc === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
