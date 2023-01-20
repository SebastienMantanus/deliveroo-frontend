const Restaurant = ({ image, name, description }) => {
  return (
    <section className="restaurant">
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
      <img src={image} alt="Restaurant"></img>
    </section>
  );
};

export default Restaurant;
