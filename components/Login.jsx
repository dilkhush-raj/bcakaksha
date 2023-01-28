import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { app } from "../firebase/config";
import Image from "next/image";

import { useUserAuth } from "../firebase/UserAuthContext";

export default function Login() {
  const { logOut } = useUserAuth();
  const { user } = useUserAuth();
  let auth = getAuth();
  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleSubmit = () => {
    signInWithPopup(auth, provider)
      .then((response) => {
        // console.log(response.user);
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

  return (
    <>
      <div className="login">
        <div>
          {CheckUser(user) ? (
            <div onClick={handleLogout} className="login-btn">
              <Image
                src="/images/icons8-login-rounded-50.svg"
                width="20px"
                height="20px"
              />
              LogOut
            </div>
          ) : (
            <>
              <div onClick={handleSubmit}  className="login-btn">
                <Image
                  src="/images/icons8-login-rounded-50.svg"
                  width="20px"
                  height="20px"
                />
                LogIn
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
