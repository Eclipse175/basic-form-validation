const signUp = document.getElementById('sign-in')
const logIn = document.getElementById('log-in')
const UserID = document.getElementById('username')
const Password = document.getElementById('password')
// this is the array where all the users will be added
let userData = [];

const RegisterUser = (username, password) => {
    username = UserID.value;
    password = Password.value;

    const passwordRegex = /\d.*\d.*\d/;

    if (passwordRegex.test(password)) {
        console.log('UserID : ' + username);
        console.log('Password : ' + password);
        // Create a new user object
        const newUser = {
            username: username,
            password: password
        };

        userData.push(newUser);
        alert('User registered successfully, Enjoy!');
        // clear the input fields
        UserID.value = " ";
        Password.value = " ";
        
    } else if (UserID.value === '' || Password.value === '') {
        alert('Please fill all the fields');
    } else {
        alert('Password must contain at least three numbers');
    }
}

const LoginUser = () => {
    console.log('logging in user...')
};

signUp.addEventListener('click', RegisterUser)
logIn.addEventListener('click', LoginUser)
