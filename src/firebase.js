import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAZY4c1dOGHXxMenGAqE_ZtIvEtgOTDGeE",
    authDomain: "idobatakaigi-with-ham-1fa71.firebaseapp.com",
    databaseURL: "https://idobatakaigi-with-ham-1fa71.firebaseio.com",
    projectId: "idobatakaigi-with-ham-1fa71",
    storageBucket: "idobatakaigi-with-ham-1fa71.appspot.com",
    messagingSenderId: "256111363111",
    appId: "1:256111363111:web:b79370e88ab2445fa2fa02",
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef = database.ref("messages");

export const pushMessage = ({ name, text }) => {
    messagesRef.push({ name, text });
};
