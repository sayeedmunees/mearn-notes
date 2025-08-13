document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const errorMsg = document.getElementById("error-msg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Example: Hardcoded credentials
    const USERNAME = "admin";
    const PASSWORD = "123";

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === USERNAME && password === PASSWORD) {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("username", username);
      window.location.href = "dashboard.html";
    } else {
      errorMsg.textContent = "Invalid username or password!";
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  // Check login status and redirect if needed
  if (window.location.pathname.includes("dashboard.html")) {
    if (localStorage.getItem("loggedIn") !== "true") {
      window.location.href = "index.html";
      return;
    }
    // Add logout click event
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", function (e) {
        e.preventDefault();
        localStorage.removeItem("loggedIn");
        localStorage.removeItem("username");
        window.location.href = "index.html";
      });
    }
  }
});

