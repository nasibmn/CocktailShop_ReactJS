import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FillTheForm from "./components/FillTheForm_step1";
import { BarName, Container } from "./components/styledcomponents.style";
import { useEffect, useState } from "react";
import axios from "axios";
import ChooseYourCocktail from "./components/ChooseYourCocktaill_step2";
import Review from "./components/ReviewTheOrder_step3";

const App = () => {
  // fetch All cocktails list from api
  const [listOfCocktailsFromApi, setlistOfCocktailsFromApi] = useState({});

  useEffect(() => {
    const getCocktails = async () => {
      try {
        const listOfCocktailsFromApi = await axios.get(
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?s"
        );
        setlistOfCocktailsFromApi(listOfCocktailsFromApi);
      } catch {
        console.log("No data found");
        return;
      }
    };
    getCocktails();
  }, []);

  const [getDataFromChildComponents, setGetDataFromChildCompoents] = useState({
    barName: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailAddress: "",
    selectedType: "",
    selectedCategory: "",
    selectedGlass: "",
    selectedIngredients: "",
  });

  const getDataFromChooseYourCocktailComponent = (
    type,
    category,
    glass,
    ingredient
  ) => {
    setGetDataFromChildCompoents({
      ...getDataFromChildComponents,
      selectedType: type,
      selectedCategory: category,
      selectedGlass: glass,
      selectedIngredients: ingredient,
    });
  };
  const getDataFromFillTheForm = (
    barName,
    firstName,
    lastName,
    phoneNumber,
    emailAddress
  ) => {
    setGetDataFromChildCompoents({
      ...getDataFromChildComponents,
      barName: barName,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      emailAddress: emailAddress,
    });
  };
  return (
    <Router>
      <div className="container">
        <div className="row">
          <div className="col col-lg-12 col-sm-12">
            <Container>
              <BarName>
                <div>Enjoy Cocktail</div>
              </BarName>
            </Container>
          </div>
          <div className="col col-lg-12 col-sm-12">
            <Switch>
              <Route exact path="/">
                <FillTheForm getDataFromFillTheForm={getDataFromFillTheForm} />
              </Route>
              <Route exact path="/chooseyourcocktail">
                <ChooseYourCocktail
                  listOfCocktailsFromApi={listOfCocktailsFromApi}
                  getDataFromChooseYourCocktail={
                    getDataFromChooseYourCocktailComponent
                  }
                />
              </Route>
              <Route exact path="/review">
                <Review
                  listOfCocktailsFromApi={listOfCocktailsFromApi}
                  sendFormDataToReview={getDataFromChildComponents}
                />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
