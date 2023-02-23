import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
      <div >
        <div>
          {CheckUser(user) ? (
            <div onClick={handleLogout}>
              Log Out
            </div>
          ) : (
            <>
              <div onClick={handleSubmit}>
                Log In
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
