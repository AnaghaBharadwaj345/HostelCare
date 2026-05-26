// =============================
// SIMULATED DATABASE (like Python state)
// =============================
let state = {
  complaints: [],
  accounts: {},
  counter: 0,
  session: null
};

// =============================
// REGISTER STUDENT
// =============================
function registerStudent() {
  let usn = document.getElementById("usn").value.toUpperCase();
  let name = document.getElementById("name").value;
  let password = document.getElementById("password").value;

  if (state.accounts[usn]) {
    alert("USN already registered");
    return;
  }

  state.accounts[usn] = { name, password };
  alert("Student registered");
}

// =============================
// LOGIN STUDENT
// =============================
function loginStudent() {
  let usn = document.getElementById("loginUsn").value.toUpperCase();
  let password = document.getElementById("loginPass").value;

  let user = state.accounts[usn];

  if (!user) {
    alert("User not found");
    return;
  }

  if (user.password !== password) {
    alert("Wrong password");
    return;
  }

  state.session = user;
  alert("Login successful");
}

// =============================
// ADD COMPLAINT
// =============================
function addComplaint() {
  let title = document.getElementById("title").value;
  let desc = document.getElementById("desc").value;
  let category = document.getElementById("category").value;
  let location = document.getElementById("location").value;

  state.counter++;
  let id = "C" + String(state.counter).padStart(3, "0");

  let complaint = {
    id,
    title,
    desc,
    category,
    location,
    status: "Assigned"
  };

  state.complaints.push(complaint);

  displayComplaints();
}

// =============================
// DISPLAY COMPLAINTS
// =============================
function displayComplaints() {
  let out = document.getElementById("output");
  out.innerHTML = "";

  state.complaints.forEach(c => {
    out.innerHTML += `
      <div class="card">
        <p><b>${c.id}</b></p>
        <p>${c.title}</p>
        <p>${c.status}</p>
      </div>
    `;
  });
}
