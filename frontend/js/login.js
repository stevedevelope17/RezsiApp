function register() {
  window.location.href = "/register";
}

document.getElementById("loginForm").onsubmit = async function (event) {
  event.preventDefault();

  const email = event.target.elements.email.value;
  const password = event.target.elements.psw.value;

  const res = await fetch("/login", {
    method: "POST",
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  const data = await res.json();

  if (data.success) {
    if (data.user.role === 1) {
      window.location.href = "/home";
    }
  } else {
    alert(JSON.stringify(data));
  }
};
