export const print = (title) => `
<nav class="navbar fixed-top navbar-dark bg-dark">
  <span class="navbar-brand mb-0 h1">${title}</span>
  <button class="btn btn-primary" type="button" onClick="window.print();">Печать</button>
</nav>
  `;
