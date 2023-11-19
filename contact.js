document.getElementById("contactForm").addEventListener("submit", submitForm);

const contactFormDB = collection(db, "contactForm");

function submitForm(e) {
    e.preventDefault();

    var fname = getElementVal("fname");
    var lname = getElementVal("lname");
    var email1 = getElementVal("email1");
    var phone1 = getElementVal("phone1");
    var orgname = getElementVal("orgname");
    var msg = getElementVal("msg");

    addDoc(contactFormDB, {
        fname: fname,
        lname: lname,
        email1: email1,
        phone1: phone1,
        orgname: orgname,
        msg: msg,
        timestamp: serverTimestamp(),
    })
        .then(() => {
            alert("Message Sent");
        })
        .catch((error) => {
            alert(error.message);
        });

    document.getElementById("contactForm").reset();
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
};
