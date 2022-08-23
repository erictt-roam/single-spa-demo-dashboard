<script>
  import { store } from "@roam/demo-dashboard-utilities";

  let counter = store.counter;
  store.subscribe(() => {
    counter = store.counter;
  });

  function handleClick() {
    store.incrementCounter();
  }
</script>

<div>
  <p><b>Clicks:</b> {counter}</p>
  <button on:click={handleClick}>Click to add</button>
</div>

<style>
  div {
    border-radius: 10px;
    border: 1px solid gray;
    padding: 20px;
    font-size: 1.5rem;
  }

  p {
    margin: 0 0 20px;
  }

  button {
    padding: 10px;
    font-size: 20px;
    cursor: pointer;
  }
</style>
