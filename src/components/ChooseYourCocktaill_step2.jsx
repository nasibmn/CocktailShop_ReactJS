import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Select from "react-select";
import {
  Form,
  Radio,
  RadioInput,
  RadioLabel,
  TitleLabel,
  Button,
} from "./styledcomponents.style";
const ChooseYourCocktail = ({
  listOfCocktailsFromApi,
  getDataFromChooseYourCocktail,
  nextStep,
  prevStep,
}) => {
  // All useStates for saving selected values
  const [selectedType, setSelectedType] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedGlass, setSelectedGlass] = useState();
  const [selectedIngredients, setSelectedIngredients] = useState();

  // All objective useStates for values fetched from api and filter as type catgry etc
  const [cocktailsData, setCocktailsData] = useState({
    typesList: "",
    categoriesList: "",
    glassesList: "",
    ingredientsList: "",
    cocktailsList: "",
  });

  // use effect
  useEffect(() => {
    setCocktailsData({
      cocktailsList: listOfCocktailsFromApi,

      typesList: Array.from(
        new Set(
          listOfCocktailsFromApi.data
            ? listOfCocktailsFromApi.data.drinks.map(
                (type) => type.strAlcoholic
              )
            : null
        )
      ),
    });
  }, [listOfCocktailsFromApi]);

  // All on change functions //

  const typeHandleRadioClick = (event) => {
    setSelectedCategory();
    setSelectedIngredients([]);
    setSelectedGlass();
    const selected = event.target.value;
    setSelectedType(selected);
    setCocktailsData({
      ...cocktailsData,
      categoriesList: Array.from(
        new Set(
          listOfCocktailsFromApi.data.drinks
            .filter((category) => category.strAlcoholic === selected)
            .map((category) => category.strCategory)
        )
      ),
      glassesList: [],
      ingredientsList: [],
    });
  };

  const categoriesonChangeHandler = (event) => {
    setSelectedIngredients([]);
    setSelectedGlass();
    setSelectedCategory(event);
    setCocktailsData({
      ...cocktailsData,
      glassesList: Array.from(
        new Set(
          listOfCocktailsFromApi.data.drinks
            .filter(
              (glass) =>
                glass.strCategory === event &&
                glass.strAlcoholic === selectedType
            )
            .map((glass) => glass.strGlass)
        )
      ),
      ingredientsList: [],
    });
  };

  const glassonChangeHandler = (event) => {
    setSelectedIngredients([]);
    setSelectedGlass(event);
    setCocktailsData({
      ...cocktailsData,
      ingredientsList: listOfCocktailsFromApi.data.drinks
        .filter(
          (ingredient) =>
            ingredient.strAlcoholic === selectedType &&
            ingredient.strCategory === selectedCategory &&
            ingredient.strGlass === event
        )
        .flatMap((ingredient) => [
          ingredient.strIngredient1,
          ingredient.strIngredient2,
          ingredient.strIngredient3,
          ingredient.strIngredient4,
          ingredient.strIngredient5,
          ingredient.strIngredient6,
        ]),
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      selectedType &&
      selectedCategory &&
      selectedGlass &&
      selectedIngredients
    ) {
      nextStep();
    }
    getDataFromChooseYourCocktail(
      selectedType,
      selectedCategory,
      selectedGlass,
      selectedIngredients
    );
  };

  return (
    <>
      <Form>
        <form onSubmit={onSubmit}>
          <div className="form-row">
            {/* Type of Drink using radio button  */}
            <div className="form-group col-md-10 mb-3">
              <TitleLabel>Type of Drinks</TitleLabel>
              <Radio>
                {cocktailsData.typesList
                  ? cocktailsData.typesList.map((item, index) => (
                      <Fragment>
                        <RadioInput
                          onChange={typeHandleRadioClick}
                          type="radio"
                          name="type"
                          id={index}
                          value={item}
                        ></RadioInput>
                        <RadioLabel htmlFor={index}>{item}</RadioLabel>
                      </Fragment>
                    ))
                  : null}
              </Radio>
            </div>
            {/* Category List */}
            <div className="form-group col-md-10 mt-4">
              <TitleLabel>Category</TitleLabel>
              <Select
                key="1"
                onChange={categoriesonChangeHandler}
                value={[selectedCategory]}
                getOptionLabel={(label) => label}
                getOptionValue={(value) => value}
                className="shadow"
                placeholder="Select Category"
                options={cocktailsData.categoriesList}
              />
            </div>
            {/* Glass List */}
            <div className="form-group col-md-10 mt-4">
              <TitleLabel>Glasses</TitleLabel>
              <Select
                key="1"
                getOptionLabel={(label) => label}
                getOptionValue={(value) => value}
                value={[selectedGlass]}
                className="shadow"
                placeholder="Select Glass"
                options={cocktailsData.glassesList}
                onChange={glassonChangeHandler}
              />
            </div>
            {/* ingredients list */}
            <div className="form-group col-md-10 mt-4">
              <TitleLabel>List of ingredients</TitleLabel>
              <Select
                key="1"
                onChange={(selectedIngredients) =>
                  setSelectedIngredients(selectedIngredients)
                }
                className="shadow"
                value={selectedIngredients}
                placeholder="Select Ingredients"
                getOptionLabel={(label) => label}
                getOptionValue={(value) => value}
                isMulti
                closeMenuOnSelect={false}
                options={
                  cocktailsData.ingredientsList
                    ? cocktailsData.ingredientsList.filter(
                        (removeEmtpy) => removeEmtpy != null
                      )
                    : []
                }
              />
            </div>
          </div>
          <Button
            type="button"
            onClick={() => prevStep()}
            className="btn btn-primary-outline mt-5 me-lg-5"
          >
            Back
          </Button>
          <Button type="submit" className="btn btn-danger-outline mt-5 shadow">
            Review Order
          </Button>
        </form>
      </Form>
    </>
  );
};

export default ChooseYourCocktail;
