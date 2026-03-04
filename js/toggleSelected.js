function toggleSelected(element) {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('selected');
  });
  
  element.classList.add('selected');
}