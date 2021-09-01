function BookView({ cover, title, shortDescription }) {
  return (
    <div>
      <img src={cover} />
      <h1>{title}</h1>
      <p>{shortDescription}</p>
    </div>
  );
}

export default BookView;
