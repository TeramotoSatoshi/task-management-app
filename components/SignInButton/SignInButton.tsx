import { auth, provider } from "@/firebase/client";
import { signInWithPopup } from "firebase/auth";

const signInButton: React.FC = () => {
  const signInWithGoogle = () => {
    // firebaseを使ってグーグルでログインする
    signInWithPopup(auth, provider);
  };
  return (
    <button onClick={signInWithGoogle}>
      <p>グーグルでログイン</p>
    </button>
  );
};

export default signInButton;
