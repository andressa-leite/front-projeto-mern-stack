import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Card from "../../components/Card/Card";
import { HomeBody, HomeHeader } from "./HomeStyled";
import { getAllNews, getTopNews } from "../../services/newsService";

function Home() {
  const [news, setNews] = useState([]);
  const [topNews, setTopNews] = useState({});

  async function findAllNews() {
    const response = await getAllNews();
    setNews(response.data.results);

    const topNewsResponse = await getTopNews();
    setTopNews(topNewsResponse.data.news);
    console.log(topNewsResponse.data.news);
  }

  useEffect(() => {
    findAllNews();
  }, []);

  return (
    <>
      <NavBar />
      <HomeHeader>
        <Card
          top={true}
          title={topNews.title}
          text={topNews.text}
          banner={topNews.banner}
          likes={topNews.likes}
          comments={topNews.comments}
        />
      </HomeHeader>
      <HomeBody>
        {news.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.title}
              text={item.text}
              banner={item.banner}
              likes={item.likes}
              comments={item.comments}
            />
          );
        })}
      </HomeBody>
    </>
  );
}

export default Home;
