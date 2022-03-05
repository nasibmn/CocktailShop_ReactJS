import "./App.css";
import FillTheForm from "./components/FillTheForm_step1";
import { BarName, Container } from "./components/styledcomponents.style";
import { useEffect, useState } from "react";
import axios from "axios";
import ChooseYourCocktail from "./components/ChooseYourCocktaill_step2";
import Review from "./components/ReviewTheOrder_step3";

const App = () => {
  const [step, setStep] = useState(1);
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

  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  const reseet = () => {
    setStep(1);
  };
  switch (step) {
    case 1:
      return (
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
              <FillTheForm
                getDataFromFillTheForm={getDataFromFillTheForm}
                nextStep={nextStep}
              />
            </div>
          </div>
        </div>
      );
    case 2:
      return (
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
              <ChooseYourCocktail
                listOfCocktailsFromApi={listOfCocktailsFromApi}
                getDataFromChooseYourCocktail={
                  getDataFromChooseYourCocktailComponent
                }
                nextStep={nextStep}
                prevStep={prevStep}
              />
            </div>
          </div>
        </div>
      );
    case 3:
      return (
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
              <Review
                listOfCocktailsFromApi={listOfCocktailsFromApi}
                sendFormDataToReview={getDataFromChildComponents}
                reseet={reseet}
              />
            </div>
          </div>
        </div>
      );
    default:
      break;
  }
};

export default App;
