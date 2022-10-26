<script lang="ts">
  import Image from "./lib/Image.svelte";
  import { images } from "./lib/images";

  let idx = 1;
  let name: string = "Igor";
</script>

<main>
  <div class="form">
    <label for="nome">Seu nome aqui:</label><input
      id="nome"
      type="text"
      bind:value={name}
    />
  </div>
  <div class="images">
    <Image imageConfig={images[0]} {name} />
    <Image imageConfig={images[1]} {name} />
  </div>
</main>

<style lang="scss">
  .form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    white-space: nowrap;
    padding: 20px;
    label {
      font-size: 18px;
      
    }
    input {
      height: 20px;
      font-size: 18px;
      min-width: 100px;
      max-width: 300px;
    }
  }
  .images {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 40px;
    :global(.image) {
      min-width: 300px;
      max-width: 500px;
    }
  }
</style>
