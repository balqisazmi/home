<template>
  <section class="register">
    <h2>Register Now</h2>
    <div class="form">
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <div class="buttons">
        <button class="btn btn-primary">Sign Up</button>
        <button class="btn btn-secondary">Sign In</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "RegisterSection",
};
</script>

<style>
.register {
  padding: 20px;
  background-color: #f9f9f9;
  text-align: center;
  margin: 20px 0;
}
.register h2 {
  font-size: 24px;
  margin-bottom: 15px;
}
.form {
  max-width: 400px;
  margin: 0 auto;
}
.form input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.buttons {
  display: flex;
  justify-content: space-around;
}
.btn {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
}
.btn-primary {
  background-color: #007bff;
  color: white;
}
.btn-secondary {
  background-color: #6c757d;
  color: white;
}
</style>
