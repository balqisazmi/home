<template>
  <section class="register">
    <h2>Register Now</h2>
    <div class="content">
      <!--REGISTER IMAGE-->
      <div class="register-img">
        <img src="/images/REGISTER.png" alt="News Image 1" />
      </div>

      <!--REGISTER FORM-->
      <div class="form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        
        <div class="buttons">
          <button class="btn btn-signup">Sign Up</button>
          <button class="btn btn-signin">Sign In</button>
        </div>
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
  padding: 10px;
  background-color: #f9f9f9;
  text-align: center;
  margin: 20px 0;
}

.register h2 {
  font-size: 24px;
  margin-bottom: 15px;
}

.content {
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  justify-content: auto;

}

.register-img,
.form {
  flex: 1;
  width: 50%; /* Adjust width to distribute space evenly */
}

.register-img img {
  max-width: 100%;
  width: auto;
  display: block;
  margin: 0 auto;
  justify-items: auto;
}

.form {
  text-align: left;
  padding: 10px;
  max-width: 50%;
  margin: 0 auto;
  justify-items: auto;
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

.btn-signup {
  background-color: #007bff;
  color: white;
}

.btn-signin {
  background-color: #6c757d;
  color: white;
}
</style>
