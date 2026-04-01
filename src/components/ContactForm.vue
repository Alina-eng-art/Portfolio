<template>
  <section id="contact">
    <h2>Контакти</h2>
    <form class="contact-form">
      <input type="text" placeholder="Ваше ім'я" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Повідомлення"></textarea>
      <button type="submit">Відправити</button>
    </form>
  </section>
</template>

<style scoped>
.contact-form {
  max-width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
input, textarea {
  padding: 12px;
  border-radius: 10px;
  border: none;
  background: #1e293b;
  color: white;
}
button {
  padding: 12px;
  border-radius: 20px;
  background: linear-gradient(135deg,#38bdf8,#6366f1);
  color: white;
  cursor: pointer;
}
</style>
