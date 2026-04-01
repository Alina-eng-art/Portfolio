<template>
  <nav class="nav">
    <div class="logo">Alina.dev</div>
    <ul>
      <li><router-link to="/" class="nav-link">Home</router-link></li>
      <li><router-link to="/projects" class="nav-link">Projects</router-link></li>
      <li><router-link to="/about" class="nav-link">About</router-link></li>
      <li><router-link to="/contact" class="nav-link">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script setup>
// Vue Router уже подключен через <router-link>
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 22px; /* фикс */
  background:#ff7f7f;
  color: white;
  width:100%;
}

/* УЛЬТРА ВАЖНО */
ul {
  display: flex;
  gap: 45px;
  list-style: none;
  flex-wrap: wrap; /* чтобы не вылазило */
}

/* ссылки */
.nav-link {
  color:#c40000;
  text-decoration:none;
  font-size:20px;
}

/* логотип */
.logo {
  font-size:28px;
  font-weight:bold;
  color:#c40000;
}
</style>
