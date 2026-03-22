import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
getFirestore,
collection,
addDoc,
getDocs
}

from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


const firebaseConfig = {

apiKey: "YOUR_KEY",
authDomain: "YOUR_DOMAIN",
projectId: "YOUR_PROJECT_ID"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


window.addReview = async function(){

const name = document.getElementById("name").value;
const review = document.getElementById("review").value;

await addDoc(collection(db,"reviews"),{

name:name,
review:review

});

loadReviews();

}


async function loadReviews(){

const querySnapshot = await getDocs(collection(db,"reviews"));

let html="";

querySnapshot.forEach((doc)=>{

const data = doc.data();

html += `<p><b>${data.name}</b>: ${data.review}</p>`;

});

document.getElementById("reviewList").innerHTML = html;

}

loadReviews();
