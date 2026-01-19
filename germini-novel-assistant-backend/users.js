const users = [];

const registerUser = (username, password) => {
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return "User already exists!";
    }
    users.push({ username, password });
    return "Registration successful!";
};

const loginUser = (username, password) => {
    const user = users.find(user => user.username === username && user.password === password);
    return user ? "Login successful!" : "Invalid credentials!";
};

module.exports = { registerUser, loginUser };
