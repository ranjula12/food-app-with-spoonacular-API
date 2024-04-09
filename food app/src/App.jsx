import { useState } from "react";
import Search from "./components/search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetail";
function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodID, setFoodID] = useState("656329");
  const customStyle1 = {
    maxWidth: "30%",
  };
  const customStyle2 = {
    maxWidth: "70%",
  };

  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer style={customStyle1}>
          <FoodList foodData={foodData} setFoodID={setFoodID} />
        </InnerContainer>
        <InnerContainer style={customStyle2}>
          <FoodDetails foodID={foodID} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
