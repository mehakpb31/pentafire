import { onSnapshot, collection, db } from "./firebase.js";

const contactFormDB = collection(db, "contactForm");

const tableBody = document.getElementById("tbody");
onSnapshot(contactFormDB, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
            addRow(change.doc);
        }
    });
});

function addRow(doc) {
    tableBody.innerHTML += `
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td class="px-6 py-4">${doc.data().fname}</td>
            <td class="px-6 py-4">${doc.data().lname}</td>
            <td class="px-6 py-4">${doc.data().orgname}</td>
            <td class="px-6 py-4">${doc.data().email1}</td>
            <td class="px-6 py-4">${doc.data().phone1}</td>
            <td class="px-6 py-4">${doc.data().msg}</td>
        </tr>
    `;
}
