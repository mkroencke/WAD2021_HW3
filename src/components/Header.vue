<template>
  <div class="header">
    <header id="pageHeader">
      <nav>
        <div class="navHeader">
          <div class="navHeaderLeft">
            <div id="logo">
              <router-link :to="{ name: 'home' }"><img src="@/assets/postit-logo.png" alt="PostIt" width="40" /></router-link>
            </div>
          </div>
          <div class="navHeaderCenter">
            <div id="search">
              <input type="text" />
              <button>Search</button>
            </div>
          </div>
          <div class="navHeaderRight">
            <div id="nav">
              <router-link :to="{ name: 'home' }">Home</router-link> |
              <router-link :to="{ name: 'login' }">Login</router-link> |
              <router-link :to="{ name: 'contact' }">Contact</router-link>
            </div>
            <div id="userpic">
              <img src="@/assets/userpic.png" alt="User" width="40" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {},
};
</script>

<style scoped lang="scss">
#pageHeader {
  width: 100%;
  position: fixed;
}

header + img {
  width: 100%;
}

header ~ p {
  padding: 10px;
  font-weight: bold;
}

header > nav {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  padding: 5px;
  width: 100%;
  background-color: white;
  justify-content: space-between;
}

.navHeader {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.navHeaderLeft {
  display: flex;
  justify-content: start;
  align-items: center;
  width: 30%;
}

.navHeaderCenter {
  width: 40%;
  align-items: center;
  justify-content: center;
}

.navHeaderRight {
  display: flex;
  align-items: center;
  justify-content: end;
  width: 30%;
}

.navHeaderLeft,
.navHeaderRight {
  flex: 1;
}

#nav {
  margin-right: 20px;
}

#logo {
  padding-left: 20px;
}

#userpic {
  padding-right: 20px;
}

#search {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: 100%;
}

#search > input {
  box-sizing: border-box;
  border-style: solid;
  border-right: none;
  border-radius: 3px 0px 0px 3px;
  width: 100%;
}

#search > button {
  box-sizing: border-box;
  border-radius: 0px 5px 5px 0px;
  border-style: solid;
  background-color: rgb(16, 114, 212);
  border-color: rgb(16, 114, 212);
  color: white;
}

#search > button:hover {
  border-color: rgb(24, 5, 104);
  background-color: rgb(24, 5, 104);
}
</style>
