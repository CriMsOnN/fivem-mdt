<template>
  <div class="app-wrapper">
    <Navbar/>
    <div class="content bg-gray-900 rounded-br-2xl rounded-tr-2xl">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar";
export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
</style>
