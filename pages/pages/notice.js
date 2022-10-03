import Link from "next/dist/client/link";
import NoticeBoard from "../../components/NoticeBoard";

import Head from "next/head";


function Notice() {

  const { user } = useUserAuth();
  const adminID = "oRhlndZYfgROLUpRb9x9Uhj86623";

  function CheckUser(user) {
    if (!user) {
      return false;
    } else if ( user.uid == adminID) {
      return true;
    }
  }

  const [notice, setNotice] = useState("");
  const [link, setLink] = useState("");
  const [notices, setNotices] = useState([]);

  const date = new Date();


  const calculate = (e) => {
    e.preventDefault();
    const addNotice = async () => {
    
      await addDoc(collection(database, 'notice'), {
        title: notice,
        link: link,
        date: date,
      });
    };
    addNotice();
    setNotice("");
    setLink("");
    
  }

  const colRef = collection(database, 'notice')

  getDocs(colRef)
  .then((snapshot) => {
    const notesList = snapshot.docs.map((doc) => doc.data());
    setNotices(notesList)
  })


  return (
    <div className="page">
      <Head>
        <title>{"Notice Board - IGNOU की BCA कक्षा"}</title>
        <meta
          name="description"
          content="IGNOU की BCA कक्षा: Ebooks, Syllabus, Previous Year Question Paper, Assignments, Notes and many more."
        />
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </Head>
    <h1 className="page-heading">Notice Board</h1>
      <ul className="breadcrumbs">
        <li>
          <Link underline="hover" key="1" color="inherit" href="/">
            Home
          </Link>
        </li>
        <li>Notice Board</li>
      </ul>

        <div className="notice-board">
        <h2>Notice Board</h2>
        <ul>
          {notices.map((item, index) => {
            return (
              <Link key={index} className="nav-text" href={item.link}>
                <a target="_blank">
                  <li>{item.title}</li>
                  <br />
                </a>
              </Link>
            );
          })}
        </ul>
      </div>

          {CheckUser(user) ? (
            <>
            <form onSubmit={calculate} className="grade-form">
          <div>
            <label>Notice</label>
            <br />
            <input
              value={notice}
              onChange={(e) => setNotice(e.target.value)}
            />
          </div>
          <div>
            <label>Link</label>
            <br />
            <input
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
          <Button type="submit" variant="contained">
            Add
          </Button>
        </form>
        <br /></>
          ) : (
            <></>
          )}

        
    </div>
  );
}

export default Notice;