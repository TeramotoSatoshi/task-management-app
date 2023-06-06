import { auth } from "@/firebase/client";

const UserInfo: React.FC<{}> = () => {
  return (
    <div className="userInfo">
      <img src={auth.currentUser?.photoURL ?? ""} />
    </div>
  );
};
export default UserInfo;
