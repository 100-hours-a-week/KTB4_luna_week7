import { modifyPassword } from "../services/userApi.js";
import { renderHeader } from "../components/header.js";
import { requireLogin } from "../utils/auth.js";

const modifyPwForm = document.querySelector("#modifyPwForm");
const passwordInput = document.querySelector("#password");
const passwordConfirmInput = document.querySelector("#passwordConfirm");
const message = document.querySelector("#message");
const successPopup = document.querySelector("#successPopup");

const accessToken = requireLogin();
const userId = localStorage.getItem("userId");

passwordInput.value = "";
passwordConfirmInput.value = "";

modifyPwForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    const newPassword = passwordInput.value.trim();
    const newPasswordConfirm = passwordConfirmInput.value.trim();

    const result = await modifyPassword({
      userId,
      accessToken,
      password: newPassword,
      passwordConfirm: newPasswordConfirm,
    });

    message.textContent = result.message;

    successPopup.hidden = false;

    setTimeout(() => {
      successPopup.hidden = true;
    }, 1200);
  } catch (error) {
    message.textContent = error.message;
  }
});

renderHeader();