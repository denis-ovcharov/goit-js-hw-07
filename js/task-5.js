function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('button.change-color');
const handleClick = () => {
  const bodyElem = document.body;
  const newColor = getRandomHexColor();
  bodyElem.classList.add('style');
  bodyElem.style.backgroundColor = newColor;
  
  const spanElem = document.querySelector('span.color');
  spanElem.textContent = newColor;
};
btn.addEventListener("click", handleClick);












