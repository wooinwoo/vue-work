<template>
  <div class="login">
    <h3>Sign in</h3>
    <input type="text" v-model="email" placeholder="email" /><br />
    <input type="password" v-model="password" placeholder="password" /><br />
    <button @click="signIn">로그인</button>
    <p>
      만약 계정이 없다면, <router-link to="/sign-up">회원가입</router-link>을
      먼저 진행해주세요!
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import firebase from "firebase/compat/app";
import { useRouter } from "vue-router"; // import router
import "firebase/compat/auth";
import "firebase/compat/firestore";
const email = ref("");
const password = ref("");
const router = useRouter(); // get a reference to our vue router

const firebaseConfig = {
  apiKey: "AIzaSyAi26xf3awBYtNlS_oaCdEp0FNMI7GhoVk",
  authDomain: "vue-test-sign-7d4c9.firebaseapp.com",
  projectId: "vue-test-sign-7d4c9",
  storageBucket: "vue-test-sign-7d4c9.appspot.com",
  messagingSenderId: "518026962783",
  appId: "1:518026962783:web:0c258fbe59c8bb7fea78ea",
  measurementId: "G-47KH6CTY9S",
};

firebase.initializeApp(firebaseConfig);

const signIn = () => {
  // we also renamed this method
  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, password.value) // THIS LINE CHANGED
    .then((data) => {
      console.log("Successfully logged in!");
      router.push("/home"); // redirect to the feed
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};
</script>

<style scoped>
.login {
  margin-top: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 15px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
