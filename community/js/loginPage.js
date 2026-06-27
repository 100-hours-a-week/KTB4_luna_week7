import { login } from "../services/userApi.js";
import { redirectIfLoggedIn } from "../utils/auth.js";

// 만약 로그인 되어있는 유저라면, 로그인 화면이 아니라 다른 화면(게시글 페이지 등 기본 설정)으로 이동. => 공통 함수로 변경.
// const accessToken = localStorage.getItem("accessToken");
// if(accessToken) window.location.href = "./index.html";
redirectIfLoggedIn();
 
const loginForm = document.querySelector("#loginForm");
const loginMessage = document.querySelector("#loginMessage");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const values = Object.fromEntries(formData);

  try {
    const result = await login({
      email: values.email,
      password: values.password,
    });
    localStorage.setItem("userId", result.data.userId);
    localStorage.setItem("nickname", result.data.nickname);
    localStorage.setItem("accessToken", result.data.accessToken);
    localStorage.setItem("refreshToken", result.data.refreshToken);
    localStorage.setItem("profileImageUrl", result.data.profileImageUrl);

    window.location.href = "./postList.html";
  } catch (error) {
    loginMessage.textContent = error.message;
  }
});