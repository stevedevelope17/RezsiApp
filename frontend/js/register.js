function login() {
  window.location.href = "/";
}

document.getElementById("registerForm").onsubmit = function (event) {
  event.preventDefault();

  const username = event.target.elements.usrnm.value;
  const email = event.target.elements.email.value;
  const password = event.target.elements.psw.value;

  if (!username && !email && !password) {
    alert("Minden mezőt ki kell tölteni!");
    return;
  }
  reg(username, email, password);
};

async function reg(username, email, password) {
  const res = await fetch("/reg", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  });

  const data = await res.json();

  if (res) {
    alert(JSON.stringify(data));
  } else {
    alert(JSON.stringify(data));
  }
}
