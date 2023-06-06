import Header from "@/components/Header/Header";
import SignInButton from "@/components/SignInButton/SignInButton";
import SignOutButton from "@/components/SignOutButton/SignOutButton";
import UserInfo from "@/components/UserInfo/UserInfo";
import { auth } from "@/firebase/client";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <>
      <Header />
      <div>
        <h1>Firebaseでログイン機能を実装しよう</h1>
        {user ? (
          <>
            <UserInfo />
            <SignOutButton />
          </>
        ) : (
          <SignInButton />
        )}
      </div>
    </>
  );
}
