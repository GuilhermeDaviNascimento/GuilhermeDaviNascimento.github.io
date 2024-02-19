
let users = [
  { email: 'guiguidavi9@gmail.com', user: 'Gui', pass: '123' },
  { email: 'kdosakodasod@gmail.com', user: 'Leo', pass: '123456' }
];
const isvalidpass = (pass, cpass) => {
  if (pass !== cpass) {
      return false
  } else {
      return true
  }
};

const isValidEmail = (email) => {
  if (users.some(login => login.email === email)) {
      return false
  } else {
      return true
  }
};

const isValidUser = (name) => {
  if (users.some(login => login.user === name)) {
      return false
  } else {
      return true
  }
};
console.log(isValidUser('Gui'))
console.log(isValidEmail('guiguidavi10@gmail.com'))