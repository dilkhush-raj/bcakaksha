import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useUserAuth } from "../firebase/UserAuthContext";

export default function Login(prop) {
  const { logOut } = useUserAuth();
  const { user } = useUserAuth();
  let auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleSubmit = () => {
    signInWithPopup(auth, provider)
      .then((response) => {})
      .catch((err) => {
        alert(err.message);
      });
  };

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error.message);
    }
  };
  function CheckUser(user) {
    if (user) {
      return true;
    }
  }

  return (
    <>
      <div>
        {CheckUser(user) ? (
          <div onClick={handleLogout} className="cursor-pointer">
            {prop.logout}
          </div>
        ) : (
          <>
            <div onClick={handleSubmit} className="cursor-pointer">
              {prop.login}
            </div>
          </>
        )}
      </div>
    </>
  );
}
