<template>
  <div class="sidebar">
    <router-link to="/" class="item" active-class="active">Home</router-link>
    <router-link to="/reports" class="item" active-class="active">Crimes</router-link>
    <router-link to="/civilians" class="item" active-class="active">Civilians</router-link>
    <router-link to="/vehicles" class="item" active-class="active">Vehicles</router-link>
    <router-link to="/" class="item profile"><img src="https://i.pinimg.com/originals/f1/4b/83/f14b8353b05e2ce61b7fb7febf61f41f.jpg"/><span class="profile-name">Officer Cr1MsOn</span></router-link>
  </div>
</template>

<script>
export default {
  data() {

  }
}
</script>
