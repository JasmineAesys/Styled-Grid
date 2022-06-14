import "./App.css";
import React, { useState } from "react";
import dogs from "./data/data";
import { Container } from "./components/Container";
import { Title } from "./components/Title";
import { Header } from "./components/Header";
import { Item } from "./components/Item";
import { Grid } from "./components/Grid";
import { MdDelete, MdInsertPhoto } from "react-icons/md";
import { BsFillPencilFill } from "react-icons/bs";

function App() {
  const [index, setIndex] = useState(-1);

  return (
    <Container>
      <Title>Dogs List</Title>
      <Grid>
        <Header>Name</Header>
        <Header>Breed</Header>
        <Header>Age</Header>
        <Header>Gender</Header>
        <Header></Header>

        {dogs.map((dog, i) => {
          let color;
          i === index ? (color = "violet") : i % 2 ? (color = "azure") : (color = "white");
          return (
            <React.Fragment key={i}>
              {dog.map((dogItem, j) => (
                <Item
                  key={j}
                  onMouseEnter={() => {
                    setIndex(i);
                  }}
                  onMouseLeave={() => {
                    setIndex(-1);
                  }}
                  inputColor={color}
                >
                  {Object.values(dogItem)}
                </Item>
              ))}
              <Item
                key={i}
                onMouseEnter={() => {
                  setIndex(i);
                }}
                onMouseLeave={() => {
                  setIndex(-1);
                }}
                inputColor={color}
              >
                <MdDelete />
                <MdInsertPhoto />
                <BsFillPencilFill />
              </Item>
            </React.Fragment>
          );
        })}
      </Grid>
    </Container>
  );
}

export default App;
