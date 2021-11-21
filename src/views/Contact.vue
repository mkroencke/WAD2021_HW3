<template>
  <section id="sectionContact">
    <h1>PostIt</h1>
    <br>
    <h3>Address: </h3><p>Narva mnt 18, 51009 Tartu, Eesti</p>
    <h3>Phone: </h3><p>+372 5512 3456</p>
    <h3>Email: </h3><a href="mailto:info@postit.com.ee">info@postit.com.ee</a>
  </section>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>
#sectionContact {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 60px auto;
  background-color: white;
  padding: 50px;
}
</style>