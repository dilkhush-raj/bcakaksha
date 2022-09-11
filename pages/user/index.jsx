import { useUserAuth } from "../../firebase/UserAuthContext";
import { useRouter } from "next/router";
import Link from "next/dist/client/link";

export default function User() {
  const { user } = useUserAuth();
  function CheckUser(user) {
    if (user) {
      return true;
    }
  }

  return (
    <>
      {CheckUser(user) ? (
        <div>
          <h1 className="page-heading">{user.displayName + "Account"}</h1>
          <ul className="breadcrumbs">
            <li>
              <Link underline="hover" key="1" color="inherit" href="/">
                Home
              </Link>
            </li>
            <li>Account</li>
          </ul>
          <div>
            {user.email}
          </div>
        </div>
      ) : (
        <>
          <h1 className="page-heading">Account</h1>
          <ul className="breadcrumbs">
            <li>
              <Link underline="hover" key="1" color="inherit" href="/">
                Home
              </Link>
            </li>
            <li>Account</li>
          </ul>
          Login
        </>
      )}
    </>
  );
}
