<template>
  <footer id="pageFooter">
    <div id="footerDiv">
      <p><router-link id="footerLink" :to="{ name: 'contact' }">Contact us</router-link> © PostIt 2021</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
#pageFooter {
  width: 100%;
  position: fixed;
}
#footerDiv {
  width: 100%;
  display: flex;
  position: fixed;
  bottom: 0;
  background-color: white;
  align-items: center;
  justify-content: center;
}
</style>