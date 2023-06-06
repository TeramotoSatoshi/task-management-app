import { initializeApp } from "firebase/app";

// 必要な機能をインポート
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBj5KHLa5QU_X6vtk1_qgkl20-dxlt6DX4",
  authDomain: "task-management-app-01.firebaseapp.com",
  projectId: "task-management-app-01",
  storageBucket: "task-management-app-01.appspot.com",
  messagingSenderId: "676471400049",
  appId: "1:676471400049:web:42093cbae522f4372fddd0",
};

export const app = initializeApp(firebaseConfig);
// 他ファイルで使うために機能をエクスポート
export const db = getFirestore();
export const storage = getStorage();
export const funcions = getFunctions();
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
