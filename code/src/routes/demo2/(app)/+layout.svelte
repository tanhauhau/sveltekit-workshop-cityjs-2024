<nav>
  <ul>
    <li><a href="/demo1/about">Home</a></li>
    <li><a href="/demo1/item">Item</a></li>
    <li><a href="/demo1/dashboard">Dashboard</a></li>
  </ul>
</nav>
<div>
  <slot />
</div>

<style>
  div {
    border: 1px solid black;
    margin: 18px;
    padding: 18px;
  }
</style>