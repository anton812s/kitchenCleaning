const button = document.querySelector('.generate');
const name = document.querySelector('.name');
const printButton = document.querySelector('.print');

button.addEventListener('click', () => {
  for (var i = name.children.length; i >= 0; i--) {
      name.appendChild(name.children[Math.random() * i | 0]);
  }
});

printButton.addEventListener('click', () => {
  window.print();
});
