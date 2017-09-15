const button = document.querySelector('.generate');
const printButton = document.querySelector('.print');
const names = document.querySelector('.name');

button.addEventListener('click', () => {
  for (var i = names.children.length; i >= 0; i--) {
      names.appendChild(names.children[Math.random() * i | 0]);
  }
});
printButton.addEventListener('click', () => {
  window.print();
});
