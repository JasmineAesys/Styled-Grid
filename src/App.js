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
          const color = i % 2 ? "azure" : "white";
          return (
            <>
              <Item inputColor={color}>{dog.name}</Item>
              <Item inputColor={color}>{dog.breed}</Item>
              <Item inputColor={color}>{dog.age}</Item>
              <Item inputColor={color}>{dog.gender}</Item>
              <Item inputColor={color}>
                <MdDelete />
                <MdInsertPhoto />
                <BsFillPencilFill />
              </Item>
            </>
          );
        })}
      </Grid>
    </Container>
  );
}

export default App;
