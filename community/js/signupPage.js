import { signup } from "../services/userApi.js";

const signupForm = document.querySelector("#signupForm");
const signupMessage = document.querySelector("#signupMessage");

function setMessage(element, message, type) {
    element.textContent = message;
    element.className = `message ${type}`;
}

signupForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(signupForm);
  const values = Object.fromEntries(formData);

  try {
    const result = await signup({
      email: values.email,
      password: values.password,
      passwordConfirm: values.passwordConfirm,
      nickname : values.nickname,
      profileImageUrl : values.profileImageUrl
    });
    setMessage(signupMessage, result.message || "회원가입 성공", "success");
    signupForm.reset();
    window.location.href = "./login.html";
  } catch (error) {
    signupMessage.textContent = error.message;
  }
});