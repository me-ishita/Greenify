let userData = {
    name: '',
    email: '',
    points: 0,
    tasks: []
  };
  
  function toggleForm(form) {
    document.getElementById('register-form').classList.toggle('hidden', form !== 'register');
    document.getElementById('login-form').classList.toggle('hidden', form !== 'login');
  }
  
  function register() {
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const pass = document.getElementById('reg-pass').value;
  
    if (name && email && pass) {
      userData.name = name;
      userData.email = email;
      alert("Registered Successfully!");
      toggleForm('login');
    } else {
      alert("Please fill all fields");
    }
  }
  
  function login() {
    const email = document.getElementById('login-email').value;
    const pass = document.getElementById('login-pass').value;
  
    if (email === userData.email && pass) {
      document.getElementById('auth-section').classList.add('hidden');
      document.getElementById('dashboard').classList.remove('hidden');
      document.getElementById('navbar').classList.remove('hidden');
      document.getElementById('user-name').innerText = userData.name;
      updateProfile();
    } else {
      alert("Invalid credentials");
    }
  }
  
  function uploadTask() {
    const file = document.getElementById('task-file').files[0];
    if (file) {
      userData.tasks.push(file.name);
      userData.points += 10;
      document.getElementById('upload-status').innerText = "✅ Task uploaded successfully!";
      document.getElementById('reward-points').innerText = userData.points;
      updateProfile();
    } else {
      alert("Please upload a file");
    }
  }
  
  function redeem() {
    if (userData.points >= 10) {
      alert("Points redeemed on Swiggy/Zomato/Amazon!");
      userData.points -= 10;
      document.getElementById('reward-points').innerText = userData.points;
      updateProfile();
    } else {
      alert("Not enough points to redeem!");
    }
  }
  
  function showSection(sectionId) {
    ['dashboard', 'about', 'profile'].forEach(id => {
      document.getElementById(id).classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
  }
  
  function updateProfile() {
    document.getElementById('profile-reward').innerText = userData.points;
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = "";
    userData.tasks.forEach(task => {
      const li = document.createElement('li');
      li.innerText = task;
      taskList.appendChild(li);
    });
  }
  