function handleAuth() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    if (!username || !password) {
        message.innerText = "Please enter a username and password!";
        return;
    }

    const storedUser = localStorage.getItem(username);

    if (storedUser) {
        // 🔹 Existing User (Login)
        const userData = JSON.parse(storedUser);
        if (userData.password === password) {
            localStorage.setItem("loggedInUser", username);
            alert("Login successful!");
            location.reload(); // Refresh page to show dashboard
        } else {
            message.innerText = "Incorrect password. Try again!";
        }
    } else {
        // 🔹 New User (Register)
        localStorage.setItem(username, JSON.stringify({ password }));
        localStorage.setItem("loggedInUser", username);
        alert("Registration successful! You are now logged in.");
        location.reload(); // Refresh page to show dashboard
    }
}

// 🔹 Function to Check Login Status
function checkLoginStatus() {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
        document.getElementById("auth-container").style.display = "none";
        document.getElementById("dashboard-container").style.display = "block";
        document.getElementById("user-name").innerText = loggedInUser;
    }
}

// 🔹 Function to Logout User
function logout() {
    localStorage.removeItem("loggedInUser");
    alert("Logged out successfully!");
    location.reload();
}

// Run checkLoginStatus() on page load
document.addEventListener("DOMContentLoaded", checkLoginStatus);
