
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOfhx4SBPl-KIxy18A9jaHf9RsuEdFoiU",
  authDomain: "tpfinal-react2023.firebaseapp.com",
  projectId: "tpfinal-react2023",
  storageBucket: "tpfinal-react2023.appspot.com",
  messagingSenderId: "184594641565",
  appId: "1:184594641565:web:d46b05cbc7013cffec9a74"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);