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
