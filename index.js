const menu = document.getElementById('menu');
const tgl = document.getElementById('tgl');

const tog = () => menu.classList.toggle("hidden");
tgl.addEventListener("click", tog);