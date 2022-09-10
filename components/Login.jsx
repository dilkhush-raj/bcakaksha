import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase/config";
import Image from "next/image";

import { useUserAuth } from "../firebase/UserAuthContext";

export default function Login() {
  const { logOut } = useUserAuth();
  const { user } = useUserAuth();
  let auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleSubmit = () => {
    signInWithPopup(auth, provider)
      .then((response) => {
        console.log(response.user);
      })
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

console.log(user);
  return (
    <>
      <div className="login">
        <div>
          {CheckUser(user) ? (
            <li onClick={handleLogout} className="nav-text"><Image src="/images/icons8-login-rounded-50.svg" width="20px" height="20px" />Log Out</li>
          ) : (
            <li onClick={handleSubmit} className="nav-text"><Image src="/images/icons8-login-rounded-50.svg" width="20px" height="20px" />Login</li>
          )}
        </div>
      </div>
    </>
  );
}
