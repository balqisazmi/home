<template>
  <section class="feedback">
    <h2>Share Your Feedback</h2>
    <div class="form">
      <select>
        <option>Feedback</option>
        <option>Railway Services</option>
        <option>Station Facilities</option>
      </select>
      <textarea placeholder="Enter your feedback here"></textarea>
      <button class="btn btn-primary">Submit</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "FeedbackSection",
};
</script>

<style>
.feedback {
  padding: 20px;
  text-align: center;
  background-color: #f1f1f1;
}
.feedback h2 {
  font-size: 24px;
  margin-bottom: 15px;
}
.feedback .form {
  max-width: 400px;
  margin: 0 auto;
}
.feedback select,
.feedback textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.feedback textarea {
  height: 100px;
}
.feedback .btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
