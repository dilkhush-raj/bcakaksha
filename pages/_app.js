import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import "../styles/globals.css";
// import "../styles/sidebar.css";
import { UserAuthContextProvider } from "../firebase/UserAuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <div className="App">
      <UserAuthContextProvider>
        {/* <Navbar /> */}
        <Sidebar />
        <div className="page-wrap">
          <Component {...pageProps} />
          {/* <Footer /> */}
        </div>
      </UserAuthContextProvider>
    </div>
  );
}

export default MyApp;
