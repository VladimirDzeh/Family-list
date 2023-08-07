<template>
  <div class="wrapper">
    <header class="header">
      <div class="header__container container">
        <a class="header__logo" @click="$router.push('/')">
          <img src="@/assets/img/logo.png" alt="alef logo" />
        </a>
        <nav class="header__nav nav">
          <router-link class="nav__link" to="/">Форма</router-link>
          <router-link class="nav__link" to="/preview">Превью</router-link>
        </nav>
      </div>
    </header>
    <main class="main">
      <div class="container">
        <router-view />
      </div>
    </main>
    <footer class="footer">
      <p class="footer__text">all rights reserved</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss"></style>
