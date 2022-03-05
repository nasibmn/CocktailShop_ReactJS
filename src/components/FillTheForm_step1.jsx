import React from "react";
import { Form, Button, TitleLabel } from "./styledcomponents.style";
import { useForm } from "react-hook-form";

const FillTheForm = ({ getDataFromFillTheForm, nextStep }) => {
  // useForm for inputs and it's validtion
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  // useHistory for redirecting after form submit

  const onSubmit = (data, e) => {
    e.preventDefault();
    nextStep();
    getDataFromFillTheForm(
      data.BarName,
      data.FName,
      data.LName,
      data.Phone,
      data.Email
    );
  };
  return (
    <>
      <Form>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-row">
            <div className="form-group col-md-10 mb-3">
              {/* bar title */}
              <TitleLabel>Bar Name</TitleLabel>
              <input
                maxLength={20}
                className={`form-control shadow ${errors.BarName && "invalid"}`}
                {...register("BarName", {
                  required: "Please Enter Bar Name",
                })}
                onKeyUp={() => {
                  trigger("BarName");
                }}
                type="text"
                id="barname"
                placeholder="Bar Name"
              />
              {errors.BarName && (
                <small className="text-danger ms-2">
                  {errors.BarName.message}
                </small>
              )}
            </div>
            <div className="form-group col-md-10 mb-3">
              {/* first name */}
              <TitleLabel>First Name</TitleLabel>
              <input
                maxLength={20}
                {...register("FName", {
                  required: "Please Enter First Name",
                })}
                onKeyUp={() => {
                  trigger("FName");
                }}
                type="text"
                className={`form-control shadow ${errors.FName && "invalid"}`}
                id="fname"
                placeholder="First Name of Owner"
              />
              {errors.FName && (
                <small className="text-danger ms-2">
                  {errors.FName.message}
                </small>
              )}
            </div>
            <div className="form-group col-md-10 mb-3">
              {/* last name */}
              <TitleLabel>Last Name</TitleLabel>
              <input
                maxLength={20}
                {...register("LName", {
                  required: "Please Enter Last Name",
                })}
                onKeyUp={() => {
                  trigger("LName");
                }}
                type="text"
                className={`form-control shadow ${errors.LName && "invalid"}`}
                id="lname"
                placeholder="Last Name of Owner"
              />
              {errors.LName && (
                <small className="text-danger ms-2">
                  {errors.LName.message}
                </small>
              )}
            </div>
            <div className="form-group col-md-10 mb-3">
              {/* phone number */}
              <TitleLabel>Phone Number</TitleLabel>

              <input
                maxLength={11}
                {...register("Phone", {
                  required: "Please Enter Phone Number",
                  pattern: {
                    value:
                      /^(05)([0-9]{2})\s?([0-9]{3})\s?([0-9]{2})\s?([0-9]{2})$/, // eslint-disable-next-line
                    message: "Wrong Format !",
                  },
                })}
                onKeyUp={() => {
                  trigger("Phone");
                }}
                type="tel"
                className={`form-control shadow ${errors.Phone && "invalid"}`}
                id="phonenumber"
                placeholder="05123456789..."
              />
              {errors.Phone && (
                <small className="text-danger ms-2">
                  {errors.Phone.message}
                </small>
              )}
            </div>
            <div className="form-group col-md-10 mb-3">
              {/* email address */}
              <TitleLabel>Email Address</TitleLabel>

              <input
                maxLength={30}
                {...register("Email", {
                  required: "Please Enter Email Address",
                  pattern: {
                    value:
                      /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/, // eslint-disable-next-line
                    message: "Please Enter a Valid Email Address",
                  },
                })}
                onKeyUp={() => {
                  trigger("Email");
                }}
                type="text"
                className={`form-control shadow ${errors.Email && "invalid"}`}
                id="email"
                placeholder="Email Address"
              />
              {errors.Email && (
                <small className="text-danger ms-2">
                  {errors.Email.message}
                </small>
              )}
            </div>
          </div>

          <Button type="submit" className="btn btn-primary mt-3">
            Next Step
          </Button>
        </form>
      </Form>
    </>
  );
};

export default FillTheForm;
