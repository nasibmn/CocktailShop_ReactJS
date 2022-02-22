import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  ReviewForm,
  TitleLabel,
  TitleLabel1,
  TitleLabel2,
} from "./styledcomponents.style";

const Review = ({ listOfCocktailsFromApi, sendFormDataToReview }) => {
  return (
    <>
      <ReviewForm>
        <TitleLabel className="justify-content-center d-flex">
          <h4>Client Info</h4>
        </TitleLabel>
        <div className="card">
          <div className="card-body shadow">
            <div className="row">
              <div className="col-sm-12 col-lg-6">
                <TitleLabel1>
                  FIRST NAME :
                  <TitleLabel2>{sendFormDataToReview.firstName}</TitleLabel2>
                </TitleLabel1>
              </div>
              <div className="col-sm-12 col-lg-6">
                <TitleLabel1>
                  LAST NAME :
                  <TitleLabel2>{sendFormDataToReview.lastName}</TitleLabel2>
                </TitleLabel1>
              </div>
              <div className="col-sm-12 col-lg-6">
                <TitleLabel1>
                  PHONE :
                  <TitleLabel2>{sendFormDataToReview.phoneNumber}</TitleLabel2>
                </TitleLabel1>
              </div>
              <div className="col-sm-12 col-lg-6">
                <TitleLabel1>
                  EMAIL :
                  <TitleLabel2>{sendFormDataToReview.emailAddress}</TitleLabel2>
                </TitleLabel1>
              </div>
            </div>
          </div>
        </div>
        <TitleLabel className="justify-content-center d-flex mt-5">
          <h4>Order Info</h4>
        </TitleLabel>
        <div className="card shadow">
          <div className="card-body shadow ">
            <div className="row">
              <div className="col-lg-6 ">
                <div className="col-sm-12 col-lg-6">
                  <TitleLabel1>
                    TYPE:
                    <TitleLabel2>
                      {sendFormDataToReview.selectedType}
                    </TitleLabel2>
                  </TitleLabel1>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <TitleLabel1>
                    CATEGORY:
                    <TitleLabel2>
                      {sendFormDataToReview.selectedCategory}
                    </TitleLabel2>
                  </TitleLabel1>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <TitleLabel1>
                    GLASS:
                    <TitleLabel2>
                      {sendFormDataToReview.selectedGlass}
                    </TitleLabel2>
                  </TitleLabel1>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <TitleLabel1>
                    INGREDIENTS:
                    <TitleLabel2>
                      {sendFormDataToReview.selectedIngredients + "   /"}
                    </TitleLabel2>
                  </TitleLabel1>
                </div>
              </div>
              <div className="col-lg-6">
                <img
                  className="img-fluid rounded shadow mt-4"
                  src={
                    listOfCocktailsFromApi.data
                      ? listOfCocktailsFromApi.data.drinks
                          .filter(
                            (ingredient, index) =>
                              (ingredient.strAlcoholic ===
                                sendFormDataToReview.selectedType &&
                                ingredient.strCategory ===
                                  sendFormDataToReview.selectedCategory &&
                                ingredient.strGlass ===
                                  sendFormDataToReview.selectedGlass) ||
                              ingredient.strIngredient1 ===
                                sendFormDataToReview.selectedIngredients[
                                  index
                                ] ||
                              ingredient.strIngredient2 ===
                                sendFormDataToReview.selectedIngredients[
                                  index
                                ] ||
                              ingredient.strIngredient3 ===
                                sendFormDataToReview.selectedIngredients[
                                  index
                                ] ||
                              ingredient.strIngredient4 ===
                                sendFormDataToReview.selectedIngredients[
                                  index
                                ] ||
                              ingredient.strIngredient4 ===
                                sendFormDataToReview.selectedIngredients[
                                  index
                                ] ||
                              ingredient.strIngredient4 ===
                                sendFormDataToReview.selectedIngredients[index]
                          )
                          .map((ingredient) => ingredient.strDrinkThumb)
                      : ""
                  }
                ></img>
              </div>
              <Button className="btn-lg mt-4">
                <Link className="text-decoration-none text-white" to="/">
                  Create New Order
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </ReviewForm>
    </>
  );
};

export default Review;
