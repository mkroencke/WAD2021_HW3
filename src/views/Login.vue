<template>
  <section id="sectionlogin">
    <div class="container">
      <div class="login-form-holder">
        <header>
          <div class="login-form-header">
            <div class="login-header-left">
              <img src="@/assets/postit-logo.png" />
            </div>
            <div class="login-header-center">
              <h1>Welcome to postIt!</h1>
            </div>
            <div class="login-header-right"></div>
          </div>
        </header>
        <a href="#">Create an Account</a>
        <p>Or</p>
        <p>Please Log In</p>
        <form action="\">
          <input type="text" placeholder="Email" /><br />
          <input type="password" placeholder="Password" />
          <div class="login-button-holder">
            <input id="login-button" type="submit" value="Log In" />
          </div>
        </form>
        <a href="#">Forgot password?</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scoped>
form {
  flex-direction: column;
}

form input {
  margin-top: 5px;
  margin-bottom: 5px;
  line-height: 2em;
}

a:hover {
  color: green;
}

img {
  width: 80px;
}

div > h1 {
  font-size: x-large;
  border-left: 10px;
  border-right: 10px;
}

.container {
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 60px;
}

.login-form-holder {
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  background-color: white;
  text-align: center;
  align-content: center;
  justify-content: center;
}

.login-form-header {
  display: flex;
  flex-direction: row;
}

.login-header-left,
.login-header-right {
  flex: 1;
}

.login-header-center {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.login-form-holder a {
  margin-top: 10px;
  margin-bottom: 10px;
}

.login-form-holder p {
  margin-top: 10px;
  margin-bottom: 10px;
}

.login-button-holder {
  text-align: center;
}

#login-button {
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 5px;
  border-style: solid;
  border-color: rgb(16, 114, 212);
  background-color: rgb(16, 114, 212);
  color: white;
  font-weight: bolder;
}

#login-button:hover {
  border-color: rgb(24, 5, 104);
  background-color: rgb(24, 5, 104);
  transform: scale(0.9);
  transition-duration: 0.3s;
}
</style>
