const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;

const handleUpdateCount = () => {
  number.innerText = count;
};

const handlePlus = () => {
  count += 1;
  handleUpdateCount();
};
const handleMinus = () => {
  count -= 1;
  handleUpdateCount();
};

plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);
