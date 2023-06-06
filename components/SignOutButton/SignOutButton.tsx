import { auth } from "@/firebase/client";

const SignOutButton: React.FC = () => {
  return (
    <button onClick={() => auth.signOut()}>
      <p>サインアウト</p>
    </button>
  );
};

export default SignOutButton;
