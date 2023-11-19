import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js';
import { getDatabase, ref,push, set } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js';


const firebaseConfig = {
  apiKey: "AIzaSyCkC1wtb888skiSNqeCdpzQP40wO66rTGc",
  authDomain: "pentarivertechnologies-6fd54.firebaseapp.com",
  databaseURL: "https://pentarivertechnologies-6fd54-default-rtdb.firebaseio.com",
  projectId: "pentarivertechnologies-6fd54",
  storageBucket: "pentarivertechnologies-6fd54.appspot.com",
  messagingSenderId: "55988809377",
  appId: "1:55988809377:web:38c4f2b379504a9be10ae0",
  measurementId: "G-WHT6CJX73Z"
};

//   initialise friebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


  // reference database
  const contactFormDB = ref(database, "contactForm");
  document.getElementById("contactForm").addEventListener("submit", submitForm);

  function submitForm(e){
    e.preventDefault();

    var fname = getElementVal('fname');
    var lname = getElementVal('lname');
    var email1 = getElementVal('email1');
    var phone1 = getElementVal('phone1');
    var orgname = getElementVal('orgname');
    var msg = getElementVal('msg');
    saveMessages(fname, lname, email1, phone1, orgname, msg);
  }
  const saveMessages = (fname, lname, email1, phone1, orgname, msg) => {
    const newContactFormRef = push(contactFormDB); // Get a new reference for a child
    set(newContactFormRef, {
        fname: fname,
        lname: lname,
        email1: email1,
        phone1: phone1,
        orgname: orgname,
        msg: msg,
    })
    .then(() => {
        console.log("Data saved succesfully")// Data saved successfully
        // You can add any post-save actions here
    })
    .catch((error) => {
      console.log("error ")// Data saved successfully
      // Handle any errors here
    });
};

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };