import BookView from "./components/BookView";

const bookData = [
  {
    cover: "https://pictures.abebooks.com/inventory/30329881180.jpg",
    title: "Git for Dummies",
    shortDescription:
      "GitHub For Dummies is the next step on your journey as a developer.",
  },
  {
    cover: "https://www.cl.cam.ac.uk/~rja14/Papers/SEv3-cover.jpg",
    title: "Security Engineering",
    shortDescription: "A Guide to Building Dependable Distributed Systems.",
  },
];

function App() {
  return (
    <div>
      {bookData.map((book) => {
        return <BookView {...book} />;
      })}
    </div>
  );
}

export default App;
