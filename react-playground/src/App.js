import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from './components/FriendCard';
import friends from "./friends.json";


function App() {
  return (
    <Wrapper>
      <Title>Friends List</Title>
      {/* spongebobs info */}
    <FriendCard
      image = {friends[0].image}
      name = {friends[0].name}
      occupation = {friends[0].occupation}
      location = {friends[0].location}


    />
{/* mr krabs info */}
<FriendCard

image = {friends[1].image}
name = {friends[1].name}
occupation = {friends[1].occupation}
location = {friends[1].location}

/>

{/* squidwards info */}
<FriendCard

image = {friends[2].image}
name = {friends[2].name}
occupation = {friends[2].occupation}
location = {friends[2].location}

    />
    </Wrapper>
  );
}

export default App;
