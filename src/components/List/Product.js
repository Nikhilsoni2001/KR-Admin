import React, { useState } from "react";
import styled from "styled-components";
import { db } from "../../Firebase";
import { Modal, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 350,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #000",
    borderRadius: "8px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),

    "@media screen and (max-width: 481px)": {
      width: 200,
    },
  },
}));

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${50}%`,
    left: `${50}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const Product = ({ id, name, description, quantity, price, type, image }) => {
  const [openModal, setOpenModal] = useState(false);
  const [inpName, setInpName] = useState(name);
  const [inpPrice, setInpPrice] = useState(price);
  const [inpDescription, setInpDescription] = useState(description);
  const [inpQuantity, setInpQuantity] = useState(quantity);
  const [inpType, setInpType] = useState(type);
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const updateProduct = () => {
    db.collection("products").doc(id).set({
      name: inpName,
      price: inpPrice,
      description: inpDescription,
      type: inpType,
      quantity: inpQuantity,
      image: image,
    });
    setOpenModal(false);
  };

  return (
    <Container>
      <Modal open={openModal} onClose={(e) => setOpenModal(false)}>
        <div style={modalStyle} className={classes.paper}>
          <InputContainer>
            <ModalTitle>Name: </ModalTitle>
            <Input
              type="name"
              placeholder="Enter item name"
              onChange={(event) => setInpName(event.target.value)}
              value={inpName}
            />
          </InputContainer>

          <InputContainer>
            <ModalTitle>Price: </ModalTitle>
            <Input
              type="number"
              placeholder="Enter item price"
              onChange={(event) => setInpPrice(event.target.value)}
              value={inpPrice}
            />
          </InputContainer>

          <InputContainer>
            <ModalTitle>Description: </ModalTitle>
            <TextArea
              placeholder="Enter Product Description"
              onChange={(event) => setInpDescription(event.target.value)}
              value={inpDescription}
            />
          </InputContainer>

          <InputContainer>
            <ModalTitle>Quantity: </ModalTitle>
            <Input
              placeholder="Quantity"
              type="number"
              onChange={(event) => setInpQuantity(event.target.value)}
              value={inpQuantity}
            />
          </InputContainer>

          <InputContainer>
            <ModalTitle>Type: </ModalTitle>
            <Select
              onChange={(event) => setInpType(event.target.value)}
              value={inpType}
            >
              <Option>Crockery</Option>
              <Option>Utensils</Option>
              <Option>Accessories</Option>
              <Option>Daily Use</Option>
              <Option>Electronics</Option>
            </Select>
          </InputContainer>

          <Button onClick={updateProduct}>Update</Button>
        </div>
      </Modal>

      <LeftContainer>
        <ProductImage src={image} />
      </LeftContainer>
      <MiddleContainer>
        <AboutSection>
          <Title>{name}</Title>
          <Description>{description}</Description>
          <Quantity>{quantity}</Quantity>
          <Type>{type}</Type>
        </AboutSection>
        <Price>{price}</Price>
      </MiddleContainer>
      <ButtonsContainer>
        <Button onClick={() => setOpenModal(true)}>Update</Button>
        <Button onClick={(e) => db.collection("products").doc(id).delete()}>
          Remove
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default Product;

const Container = styled.div`
  display: flex;
  background: white;
  justify-content: space-around;
  border-radius: 4px;
  margin: 0 10px 14px 10px;

  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: all 0.6s ease;
  }

  @media screen and (max-width: 481px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const LeftContainer = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 481px) {
    display: block;
  }
`;
const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 481px) {
    flex-direction: row;
  }
`;
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 481px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
`;
const ProductImage = styled.img`
  width: 120px;

  @media screen and (max-width: 1024px) {
    width: 100px;
  }

  @media screen and (max-width: 768px) {
    width: 80px;
  }
`;
const Title = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 2px;
  margin: 2px 0;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
const Description = styled.p`
  margin-top: 2px;
  font-size: 0.8rem;
  color: #616161;

  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
const Quantity = styled.p`
  :before {
    content: "Qnt. ";
  }

  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  background: #3f51b5;
  outline: none;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;

  :hover {
    color: #3f51b5;
    background-color: #f5f5f5;
    transition: all 1s;
  }

  @media screen and (max-width: 1200px) {
    width: 95px;
    height: 35px;
  }
  @media screen and (max-width: 768px) {
    width: 90px;
    height: 30px;
  }

  @media screen and (max-width: 481px) {
    width: 70px;
    height: 25px;
    font-size: 0.8rem;
    margin: 0 15px;
  }
`;
const Price = styled.p`
  font-style: italic;
  font-weight: 400;
  letter-spacing: 2px;

  :before {
    content: "Rs.";
  }

  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
  }

  @media screen and (max-width: 481px) {
    margin-left: 10px;
  }
`;

const Type = styled.p`
  :before {
    content: "Type: ";
  }

  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const InputContainer = styled.div`
  display: flex;
  height: 40px;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px 0;

  @media screen and (max-width: 768px) {
    margin: 6px;
  }
`;
const Input = styled.input`
  outline: none;
  border: 1px solid;
  height: 25px;
  border-radius: 4px;

  @media screen and (max-width: 768px) {
    height: 20px;
  }
`;

const Select = styled.select``;
const Option = styled.option`
  width: 120px;
`;
const TextArea = styled.textarea`
  outline: none;
  border: 1px solid;
  height: 50px;
  margin: 10px 0;
  border-radius: 4px;
  @media screen and (max-width: 768px) {
    height: 30px;
  }
`;

const ModalTitle = styled(Title)`
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 481px) {
    font-size: 0.7rem;
    margin-right: 10px;
  }
`;
