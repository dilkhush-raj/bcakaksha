import { UserAuthContextProvider } from "../firebase/UserAuthContext";
import Sidebar from "../components/Sidebar";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="App">
      <Head>
        <title>IGNOU BCA Kaksha</title>
        <meta
          name="description"
          content="Get books, assignments, grade calculator, exam countdown timer and many more."
        />
        <meta
          name="keywords"
          content="ignou, bca, kaksha, exam, ignou bca kaksha, ignou marks claculator, ignou exam countdown timer"
        />
        <meta name="author" content="Dilkhush Raj" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <UserAuthContextProvider>
        <Sidebar />
        <div className="h-screen overflow-y-auto">
        <Component {...pageProps} />
        </div>
      </UserAuthContextProvider>
    </div>
  );
}

export default MyApp;
