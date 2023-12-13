import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Card from "../../components/Card/Card";
//import { news } from "../../Data";
import { HomeBody } from "./HomeStyled";
import { getAllPosts } from "../../services/postsService";

function Home() {
  const [news, setNews] = useState([]);

  async function findAllPosts() {
    const response = await getAllPosts();
    setNews(response.data.results);
  }

 // findAllPosts();
 useEffect(() => {
  findAllPosts()
 }, [])

  return (
    <> 
      <NavBar />
      <HomeBody>
        {news.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.title}
              text={item.text}
              banner={item.banner}
              likes={item.likes.length}
              comments={item.comments.length}
            />
          );
        })}
      </HomeBody>
    </>
  );
}

export default Home;
