import React, { useState } from "react";
import styled from "styled-components";
import { db, storage } from "../../Firebase";

const New = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [type, setType] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  console.log(type);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              name: name,
              price: price,
              description: description,
              quantity: quantity,
              type: type,
              image: url,
            });
            setProgress(0);
            setName("");
            setPrice(0);
            setDescription("");
            setQuantity(0);
            setType("");
            setImage(null);
          });
      }
    );
  };

  return (
    <Container>
      <MainContent>
        <HeadingContainer>
          <Heading>Add New Product</Heading>
        </HeadingContainer>

        <InputContainer>
          <Title>Name: </Title>
          <Input
            type="name"
            placeholder="Enter item name"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
        </InputContainer>

        <InputContainer>
          <Title>Price: </Title>
          <Input
            type="text"
            placeholder="In Rupees"
            onChange={(event) => setPrice(event.target.value)}
            value={price}
          />
        </InputContainer>

        <InputContainer>
          <Title>Description: </Title>
          <TextArea
            placeholder="Enter Product Description"
            onChange={(event) => setDescription(event.target.value)}
            value={description}
          />
        </InputContainer>

        <InputContainer>
          <Title>Quantity: </Title>
          <Input
            placeholder="Quantity"
            type="number"
            onChange={(event) => setQuantity(event.target.value)}
            value={quantity}
          />
        </InputContainer>

        <InputContainer>
          <Title>Type: </Title>
          <Select
            onChange={(event) => setType(event.target.value)}
            value={type}
          >
            <Option>Crockery</Option>
            <Option>Utensils</Option>
            <Option>Accessories</Option>
            <Option>Daily Use</Option>
            <Option>Electronics</Option>
          </Select>
        </InputContainer>

        <InputContainer>
          <Title>Image: </Title>
          <Input type="file" onChange={handleChange} />
        </InputContainer>

        <ProgressContainer>
          <Progress value={progress} max="100" />
        </ProgressContainer>

        <ButtonContainer>
          <Button onClick={handleUpload}>Add</Button>
        </ButtonContainer>
      </MainContent>
    </Container>
  );
};

export default New;

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 91vh;
`;

const MainContent = styled.div`
  background: #f1f1f1;
  height: 550px;
  margin: 50px 0;
  width: 800px;
  display: flex;
  flex-direction: column;
`;
const Heading = styled.h1`
  border-bottom: 1px solid black;
`;
const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const InputContainer = styled.div`
  display: flex;
  height: 40px;
  justify-content: space-around;
  align-items: center;
  margin: 10px 0;
`;
const Title = styled.h3``;
const Input = styled.input`
  outline: none;
  border: none;
  height: 25px;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  outline: none;
  border: none;
  height: 50px;
  margin: 10px 0;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin: 50px 0;
  justify-content: center;
`;
const Button = styled.button`
  margin-right: 30px;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: none;
  width: 80px;
  background: #3f51b5;
  height: 30px;
  color: white;
  border-radius: 6px;
  cursor: pointer;

  :hover {
    color: #3f51b5;
    background-color: #f5f5f5;
    transition: all 1s;
  }
`;

const Select = styled.select``;
const Option = styled.option`
  width: 120px;
`;

const ProgressContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Progress = styled.progress``;
