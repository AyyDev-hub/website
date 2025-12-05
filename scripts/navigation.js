<ul id="nav"></ul>

<script>
const pages = [
  { name: "Home", link: "index.html" },
  { name: "Download", link: "download.html" },
  { name: "About", link: "about.html" }
];

const nav = document.getElementById("nav");
pages.forEach(p => {
  nav.innerHTML += `<li><a href="${p.link}">${p.name}</a></li>`;
});
</script>

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const menuOverlay = document.getElementById('menuOverlay');

function toggleMenu() {
  navMenu.classList.toggle('active');
  menuOverlay.classList.toggle('show');
  document.body.classList.toggle('no-scroll');
}

hamburger.addEventListener('click', toggleMenu);
menuOverlay.addEventListener('click', toggleMenu);
