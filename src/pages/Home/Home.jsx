import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Card from "../../components/Card/Card";
import { HomeBody } from "./HomeStyled";
import { getAllNews } from "../../services/newsService";

function Home() {
  const [news, setNews] = useState([]);

  async function findAllNews() {
    const response = await getAllNews();
    setNews(response.data.results);
  }

 // findAllPosts();
 useEffect(() => {
  findAllNews()
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
