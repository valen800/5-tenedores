import firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyAvq2i7qOVdzYevbxikC414o8cQTJvpWLE",
  authDomain: "tenedores-807f9.firebaseapp.com",
  databaseURL: "https://tenedores-807f9.firebaseio.com",
  projectId: "tenedores-807f9",
  storageBucket: "tenedores-807f9.appspot.com",
  messagingSenderId: "831583790183",
  appId: "1:831583790183:web:c74e8aba4306cd15d2e0c2"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
