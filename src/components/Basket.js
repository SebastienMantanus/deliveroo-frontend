const Basket = (props) => {
  const { basket, setBasket, panier } = props;

  return (
    <div className="panier">
      <button>Valider mon panier</button>
      <section>
        if({basket.length}>0){<p>Panier</p>}else{<p>panier vide</p>}
      </section>
    </div>
  );
};

export default Basket;
