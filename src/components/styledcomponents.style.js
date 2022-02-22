import styled from "styled-components";

export const Container = styled.div`
  &::before {
    content: "";
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    background: url("https://savonfoodssupermarket.com/wp-content/uploads/2017/06/Backgroud-img.jpg")
      no-repeat center center fixed;
    background-size: cover;
    z-index: -1;
  }
`;

export const BarName = styled.div`
  position: relative;
  top: 30px;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: top;
  flex-direction: column;
  color: #fff;
  mix-blend-mode: darken;
  text-shadow: 0 0 0.05em rgba(0, 0, 0, 0.2), -0.025em 0.025em 0.1em #000,
    -0.05em 0.05em 0.1em #000, -0.1em 0.1em 0.3em #000,
    -0.1em 0.1em 0.5em rgba(0, 0, 0, 0.5);
  translate: translate3d(0, 0, 0);
  font-family: "Muli", sans-serif;
  font-size: 4rem;
  line-height: 1;
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;

  @media (max-width: 768px) {
    margin-top: 2rem;
    font-size: 2rem;
  }
`;

export const Form = styled.div`
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(1px);
  margin-left: 25%;
  width: 50%;
  font-weight: 700;
  padding: 30px;
  border: 5px solid rgba(255, 255, 255, 0.15);
  margin-top: 5%;
  @media (max-width: 1200px) {
    margin-left: 20px;
    font-size: 1rem;
    width: 90%;
  }
  @media (max-width: 768px) {
    margin-top: 4rem;
  }
`;
export const ReviewForm = styled.div`
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(1px);
  margin-left: 25%;
  width: 70%;
  font-weight: 700;
  padding: 30px;
  border: 5px solid rgba(255, 255, 255, 0.15);
  margin-top: 5%;
  @media (max-width: 1200px) {
    margin-left: 20px;
    font-size: 1rem;
    width: 90%;
  }
  @media (max-width: 768px) {
    margin-top: 4rem;
  }
`;

export const Button = styled.button`
  color: #fff;
  transition: 0.5s;
  mix-blend-mode: darken;
  text-shadow: 0 0 0.05em rgba(0, 0, 0, 0.2), -0.025em 0.025em 0.1em #000,
    -0.05em 0.05em 0.1em #000, -0.1em 0.1em 0.3em #000,
    -0.1em 0.1em 0.5em rgba(0, 0, 0, 0.5);
  translate: translate3d(0, 0, 0);
  font-weight: 500;
  text-transform: uppercase;
  font-family: "Muli", sans-serif;
  white-space: nowrap;
  border-color: #772f1a;
  background-color: #f7b42c;
  background-image: linear-gradient(315deg, #f7b42c 0%, #fc575e 74%);
  &:hover {
    background-color: #f5d020;
    transform: scale(1.03);
    background-image: linear-gradient(315deg, #f5d020 0%, #f53803 74%);
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-right: 2rem;
    /* display: flex;
    flex-direction: column; */
  }
`;

export const Radio = styled.div`
  display: inline-flex;
  overflow: hidden;
  width: 100%;
  border-radius: 15px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
  transition: 0.5s;
`;

export const RadioLabel = styled.label`
  transition: 0.5s;
  padding: 15px 20px;
  background: #fc4a1a; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #f7b733,
    #fc4a1a
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #f7b733,
    #fc4a1a
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  color: #fff;
  mix-blend-mode: darken;
  text-shadow: 0 0 0.05em rgba(0, 0, 0, 0.2), -0.025em 0.025em 0.1em #000,
    -0.05em 0.05em 0.1em #000, -0.1em 0.1em 0.3em #000,
    -0.1em 0.1em 0.5em rgba(0, 0, 0, 0.5);
  translate: translate3d(0, 0, 0);
  font-family: "Muli", sans-serif;
  font-size: 0.8rem;
  width: 60%;
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;

  cursor: pointer;
  transition: background 0.4s;

  &:not(:last-of-type) {
    border-radius: 1px solid black;
  }
  &:hover {
    transition: 0.5s;
    transform: scale(1.1);
    background: #833ab4; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #fcb045,
      #fd1d1d,
      #833ab4
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #fcb045,
      #fd1d1d,
      #833ab4
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  @media (max-width: 1200px) {
    &:hover {
      transform: scale(1) !important;
    }
    font-size: 0.6rem;
    font-weight: 900;
    padding: 10px 5px;
  }
`;

export const RadioInput = styled.input`
  transition: 0.5s;
  display: none;
  &:checked + ${RadioLabel} {
    color: chocolate;
    transform: scale(1.2);
  }
`;

export const TitleLabel = styled.label`
  color: #fff;
  mix-blend-mode: darken;
  text-shadow: 0 0 0.05em rgba(0, 0, 0, 0.2), -0.025em 0.025em 0.1em #000,
    -0.05em 0.05em 0.1em #000, -0.1em 0.1em 0.3em #000,
    -0.1em 0.1em 0.5em rgba(0, 0, 0, 0.5);
  translate: translate3d(0, 0, 0);
  font-family: "Muli", sans-serif;
  font-size: 1rem;
  margin-bottom: 10px;
  line-height: 1;
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 10px 5px;
    margin: 0;
  }
`;
export const TitleLabel1 = styled.label`
  color: purple;
  mix-blend-mode: darken;
  text-shadow: 0 0 0.05em rgba(0, 0, 0, 0.2), -0.0025em 0.0025em 0.01em #000,
    -0.005em 0.005em 0.01em #000, -0.01em 0.01em 0.03em red,
    -0.01em 0.01em 0.05em rgba(0, 0, 0, 0.1);
  translate: translate3d(0, 0, 0);
  font-family: "Muli", sans-serif;
  font-size: 0.8rem;
  font-weight: 800;
  /* text-transform: uppercase; */
  white-space: nowrap;
`;
export const TitleLabel2 = styled.label`
  color: lightslategray;
  mix-blend-mode: darken;
  text-shadow: 0 0 0.05em rgba(0, 0, 0, 0.2), -0.0025em 0.0025em 0.01em #000,
    -0.005em 0.005em 0.01em #000, -0.01em 0.01em 0.03em red,
    -0.01em 0.01em 0.05em rgba(0, 0, 0, 0.1);
  translate: translate3d(0.8, 0.4, 0);
  font-family: "Muli", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  margin-left: 10%;
  text-align: start;
  white-space: nowrap;
  @media (max-width: 768px) {
  }
`;
