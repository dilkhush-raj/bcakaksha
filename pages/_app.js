import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import '../styles/globals.css'
import "../styles/sidebar.css"

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
