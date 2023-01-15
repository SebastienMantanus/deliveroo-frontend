const Menu = ({ catArray }) => {
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
                  <div key={meal.id} className="mealBox">
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
