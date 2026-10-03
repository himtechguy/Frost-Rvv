function explore() {
  document.getElementById("features").scrollIntoView({
    behavior: "smooth"
  });
}

function activate() {
  alert("FROST SYSTEM ACTIVATED ⚡");
}

let users = 12847;

setInterval(() => {
  users += Math.floor(Math.random() * 3);

  const userElement = document.getElementById("users");

  if (userElement) {
    userElement.textContent = users.toLocaleString();
  }
}, 3000);
