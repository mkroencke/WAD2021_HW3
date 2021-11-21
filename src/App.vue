<template>
  <Header />
  <router-view />
  <Footer />
</template>

<style lang="scss">
* {
  font-family: "Open Sans", sans-serif;
}

html,
body {
  background-color: rgb(16, 114, 212);
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>

<script>
import Header from "@/components/Header.vue";
import Footer from "./components/Footer";

export default {
  components: {
    Footer,
    Header,
  },
};
</script>
