import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import '../styles/globals.css'
import "../styles/sidebar.css"
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Navbar />
  <Sidebar />
  <div className="page-wrap">
  <Component {...pageProps} />
  </div>
  <Footer />
  </>
  )
}

export default MyApp
