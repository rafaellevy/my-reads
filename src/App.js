import BookView from "./components/BookView";
import './App.css';

const bookData = [
  {
    cover: "https://pictures.abebooks.com/inventory/30329881180.jpg",
    title: "Git for Dummies",
    authors:
      "For Dummies",
  },
  {
    cover: "https://www.cl.cam.ac.uk/~rja14/Papers/SEv3-cover.jpg",
    title: "Security Engineering",
    authors: "Ross Anderson",
  },
];

function App() {
  return (
    <div className="app" >
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {bookData.map((book) => {
                    return (<li>
                      <BookView {...book} />
                    </li>);
                  })}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
