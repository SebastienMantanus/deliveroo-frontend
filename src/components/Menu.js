const Menu = (props) => {
  const { catArray, basket, setBasket } = props;
  //   console.log(catArray);

  return (
    <div>
      {catArray.map((element, index) => {
        return (
          <>
            {element.meals.length > 0 && <h2 key={index}>{element.name}</h2>}

            <div className="mealsGrid">
              {element.meals.map((meal, index) => {
                return (
                  <div
                    className="mealBox"
                    onClick={() => {
                      for (let i = 0; i < basket.length; i++) {
                        if (basket[i].item === meal.title) {
                          const newBasket = [...basket];
                          newBasket[i].quantity = newBasket[i].quantity + 1;
                          newBasket[i].total =
                            newBasket[i].price * newBasket[i].quantity;
                          setBasket(newBasket);

                          // basket[i].quantity = basket[i].quantity + 1;
                          // basket[i].total =
                          //   basket[i].price * basket[i].quantity;
                        } else {
                          const newBasket = [...basket];
                          newBasket.push({
                            item: meal.title,
                            price: meal.price,
                            quantity: 1,
                            total: meal.price,
                          });
                          setBasket(newBasket);
                        }
                      }

                      console.log(basket);
                    }}
                  >
                    <div className="mealBoxDetailsSplit">
                      <div className="mealDetails">
                        <h3>{meal.title}</h3>
                        <p>{meal.description}</p>
                      </div>
                      <div className="priceAndPopular">
                        <span className="mealBoxPrice">{meal.price} €</span>
                        {meal.popular && (
                          <span className="popular">⭐️ Populaire</span>
                        )}
                      </div>
                    </div>
                    {meal.picture && <img src={meal.picture} alt="Meal" />}
                  </div>
                );
              })}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Menu;
