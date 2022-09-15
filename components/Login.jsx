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

  const loginWithGithub = () => {
    signInWithPopup(auth, githubProvider)
  .then((result) => {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    console.log(token);
    console.log(user);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GithubAuthProvider.credentialFromError(error);
    // ...
  });
  }

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
            <li onClick={handleLogout} className="nav-text"><Image src="/images/icons8-login-rounded-50.svg" width="20px" height="20px" />Log Out</li>
          ) : (
            <>
            <li onClick={handleSubmit} className="nav-text"><Image src="/images/icons8-login-rounded-50.svg" width="20px" height="20px" />Google</li>
            <li onClick={loginWithGithub} className="nav-text"><Image src="/images/icons8-login-rounded-50.svg" width="20px" height="20px" />Github</li>
            </>
          )}
        </div>

      </div>
    </>
  );
}
