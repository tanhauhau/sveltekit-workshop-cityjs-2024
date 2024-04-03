<script>
  export let data;
</script>

<form>
  <label>Song name <input name="name" placeholder="Song Name" /></label>
  <label>Artist name <input name="singer" placeholder="Artist Name" /></label>
  <label>
    Star
    <select name="star">
      <option>1 star</option>
      <option>2 stars</option>
      <option>3 stars</option>
      <option>4 stars</option>
      <option>5 stars</option>
    </select></label
  >
  <button>Submit</button>
</form>

<hr />
<table>
  <tr>
    <th>Name</th>
    <th>Singer</th>
    <th>Star</th>
  </tr>
  {#each data.reviews as { name, singer, star }}
    <tr>
      <td>{name}</td>
      <td>{singer}</td>
      <td>{star}</td>
    </tr>
  {/each}
</table>

<style>
  label {
    display: block;
    margin-bottom: 6px;
  }
</style>
