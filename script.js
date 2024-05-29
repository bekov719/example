const userCredentials = {
    login: "mmm",
    password: "123mmm"
};

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === userCredentials.login && password === userCredentials.password) {
        alert("Siz ro'yxatdan o'tdingiz!");
        document.getElementById('username').style.display = 'none';
        document.getElementById('password').style.display = 'none';
        document.querySelector('button').style.display = 'none';
    } else {
        alert("Login yoki parol noto'g'ri!");
    }
}

function addQuestion() {
    const question = prompt("Iltimos, savolingizni kiriting:");
    if (question) {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.textContent = question;
        document.getElementById('questions').appendChild(questionDiv);
    }
}