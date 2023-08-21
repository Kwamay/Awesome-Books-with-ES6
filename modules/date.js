const setCurrentDate = () => {
  const date = document.querySelector('.date');
  const currentDate = new Date().toLocaleString();
  date.innerHTML = currentDate;
};

export default setCurrentDate;
