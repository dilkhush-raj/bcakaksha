import { useUserAuth } from "../../firebase/UserAuthContext";
import { useRouter } from "next/router";
import Link from "next/dist/client/link";

import { app, database } from "../../firebase/config";
import {
  collection,
  addDoc,
  getDoc,
  doc,
  updateDoc,
  setDoc,
} from "firebase/firestore";

export default function User() {
  const { user } = useUserAuth();
  function CheckUser(user) {
    if (user) {
      return true;
    }
  }
  const id = user.uid;

  const dbInstance = collection(database, "users");

  const saveNote = async () => {
    const userRef = doc(database, "users", id);
    await setDoc(userRef, {
      semester: 3,
      cycle: "July",
    });
  };

  const getData = async () => {
    
    const noteSnapshot = await getDoc(doc(database, 'users', id));
    if (noteSnapshot.exists()) {
      console.log(noteSnapshot.data());
      return noteSnapshot.data();
    } else {
      console.log("Note doesn't exist");
    }
  };


  return (
    <>
      {CheckUser(user) ? (
        <div>
          <h1 className="page-heading">{user.displayName + " Account"}</h1>
          <ul className="breadcrumbs">
            <li>
              <Link underline="hover" key="1" color="inherit" href="/">
                Home
              </Link>
            </li>
            <li>Account</li>
          </ul>
          <div>Welcome! {user.displayName}</div>
          <div>Your email: {user.email}</div>
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
