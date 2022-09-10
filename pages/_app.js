import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import "../styles/globals.css";
import "../styles/sidebar.css";
import { UserAuthContextProvider } from "../firebase/UserAuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <UserAuthContextProvider>
        <Navbar />
        <Sidebar />
        <div className="page-wrap">
          <Component {...pageProps} />
        </div>
        <Footer />
      </UserAuthContextProvider>
    </>
  );
}

export default MyApp;
