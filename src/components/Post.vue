<template>
  <div>
    <section>
      <div>
        <button class="reset-button" v-on:click="resetLikes">
          Reset Likes
        </button>
      </div>
      <article v-for="post in postList" :key="post.id">
        <header class="post-info">
          <div class="header-user">
            <img v-if="post.author.profilepic" :src="post.author.profilepic" alt="User" width="40" />
            <p class="author">
              {{ post.author.firstname }} {{ post.author.lastname }}
            </p>
          </div>
          <time> {{ post.createdAt.date }} {{ post.createdAt.time }} </time>
        </header>
        <img v-if="post.content.pic" :src="post.content.pic" :alt="post.content.alt" />
        <p>{{ post.content.text }}</p>
        <div class="like-button">
          <button v-on:click="incrementLikes(post)">
            <img
              src="@/assets/like.png"
              alt="Like this post"
              width="30"
              height="28"
            />
          </button>
          <p>{{ post.likes }}</p>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: "Post",
  data: function () {
    return {};
  },
  computed: {
    postList() {
      return this.$store.state.posts;
    },
  },
  methods: {
    resetLikes: function () {
      this.$store.commit("resetLikes", );
    },
    incrementLikes: function (post) {
      this.$store.commit("incrementLikes", post);
    },
  },
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 60px auto;
  background-color: white;
  padding: 50px;
}

article {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
  margin: 10px;
  border-radius: 5px;
}

.post-info {
  padding: 10px;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header + img {
  width: 100%;
}

header ~ p {
  padding: 10px;
  font-weight: bold;
}

.reset-button {
  margin-left: 10px;
  border-radius: 5px;
  border-style: solid;
  font-weight: bold;
  color: white;
  border-color: rgb(16, 114, 212);
  background-color: rgb(16, 114, 212);
}

.reset-button:hover {
  border-color: rgb(24, 5, 104);
  background-color: rgb(24, 5, 104);
}

.reset-button:active {
  transform: scale(0.9);
  transition-duration: 0.1s;
}

.like-button {
  display: flex;
  padding: 10px;
}

.like-button button {
  margin-right: 10px;
  border-radius: 5px;
  border-style: solid;
  border-color: rgb(16, 114, 212);
  background-color: rgb(16, 114, 212);
}

#pageHeader {
  width: 100%;
  position: fixed;
}

#namemail {
  background-color: white;
  width: 15%;
  position: relative;
  float: right;
}

.header-user {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.author {
  margin-left: 12px;
}
</style>
