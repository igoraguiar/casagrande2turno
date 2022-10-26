<script lang="ts">
  import type { ImageConfig } from "./images";
  import * as htmlToImage from "html-to-image";
  import { onDestroy, onMount } from "svelte";

  export let ratio = 1;
  export let imageConfig: ImageConfig;
  export let name: string = "Alessandra";
  let div: HTMLDivElement;
  let hideSaveBtn = false;

  let labelX: number,
    labelY: number,
    labelW: number,
    labelH: number,
    labelFontSize: number,
    width: number,
    height: number;
  $: {
    labelX = imageConfig.label.x * ratio;
    labelY = imageConfig.label.y * ratio;
    labelW = imageConfig.label.w * ratio;
    labelH = imageConfig.label.h * ratio;
    labelFontSize = imageConfig.label.fontSize * ratio;
    width = imageConfig.w * ratio;
    height = imageConfig.h * ratio;
  }

  function updateRatio() {
    let xR = div.clientWidth / imageConfig.w;
    let yR = div.clientHeight / imageConfig.h;
    ratio = Math.min(xR, yR);
    console.log("ratio", ratio);
  }

  onMount(() => {
    updateRatio();
    window.addEventListener("resize", updateRatio);
  });

  onDestroy(() => {
    window.removeEventListener("resize", updateRatio);
  });

  function exportImage() {
    hideSaveBtn = true;
    htmlToImage
      .toPng(div)
      .then(function (dataUrl) {
        const a = document.createElement("a");
        a.setAttribute("href", dataUrl);
        a.setAttribute("download", name);
        a.click();
        a.remove();      
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      })
      .finally(() => (hideSaveBtn = false));
  }
</script>

{#if !!imageConfig}
  <div
    bind:this={div}
    class="image"
    style="width: {width}px; height: {height}px; background-image: url({imageConfig.image});"
  >
    <!-- content here -->

    <input
      style="left: {labelX}px; top: {labelY}px; width: {labelW}px; height: {labelH}px; font-size: {labelFontSize}px; {imageConfig
        .label.style || ''}"
      type="text"
      bind:value={name}
    />
    {#if !hideSaveBtn}
      <button on:click={exportImage}>SALVAR</button>
    {/if}
  </div>
{/if}

<style lang="scss">
  .image {
    background-size: cover;
    display: block;
    position: relative;
    input {
      position: absolute;
    }
    button {
      position: absolute;
      bottom: -30px;
      width: 60%;
      left: 20%;
      border-radius: 15px;
      border: none;
      height: 40px;
      background-color: #1976d2;
      color: white;
      font-weight: bold;
      font-size: 20px;
    }
  }
</style>
