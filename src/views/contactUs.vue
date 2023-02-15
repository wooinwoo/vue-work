<template>
  <div class="container">
    <form @submit.prevent="sendMail">
      <label>Company</label>
      <input
        type="text"
        v-model="company"
        name="name"
        placeholder="Your company" />
      <label>Name</label>
      <input type="text" v-model="name" name="name" placeholder="Your Name" />
      <label>Phone</label>
      <input
        type="text"
        v-model="phone"
        name="phone"
        placeholder="Your Phone" />
      <label>Email</label>
      <input
        type="email"
        v-model="email"
        name="email"
        placeholder="Your Email" />
      <label>Message</label>
      <textarea
        name="message"
        v-model="message"
        cols="30"
        rows="5"
        placeholder="Message">
      </textarea>

      <input type="submit" value="Send" />
    </form>
  </div>
</template>

<script setup lang="ts">
import { Email } from "@/assets/smtp/smtp.js";
import { ref } from "vue";

const company = ref("");
const name = ref("");
const phone = ref("");
const email = ref("");
const message = ref("");

// user: "wiw@rs-team.com",
// pass: "tksjzlzhrajjeant",

const sendMail = () => {
  Email.send({
    // Host: "smtp.elasticemail.com",
    SecureToken: "9077cdaf-3e0b-4b82-b592-9dc26aa72279",
    // Username: "wiw@rs-team.com",
    // Password: "zoroxoro132$",
    To: "wiw@rs-team.com",
    From: "wiw@rs-team.com",
    Subject: `문의 - [${company.value}][${name.value}]`,
    Body: `
    <strong>회사명</strong>: ${company.value}<br>
    <strong>이름</strong>: ${name.value}<br>
    <strong>이메일</strong>: ${email.value}<br>
    <strong>번호</strong>: ${phone.value}<br>
    <strong>내용</strong>: ${message.value}`,
  }).then((message2: string) => alert(message2));
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  display: block;
  width: 50%;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  margin: auto;
  margin-top: 50px;
}

label {
  float: left;
  color: black;
}

input[type="text"],
[type="email"],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}
</style>
