import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchNews } from "../../services/newsService";
import { ContainerResults, TextResults } from "./SearchStyled";
import Card from "../../components/Card/Card";

function Search() {
  const { title } = useParams();
  const [news, setNews] = useState([]);

  async function search() {
    try {
      const newsApi = await searchNews(title);
      console.log(newsApi);
      setNews(newsApi.data.results);
    } catch (err) {
      console.log(err);
      setNews([]);
    }
  }

  useEffect(() => {
    search();
  }, [title]);

  return (
    <ContainerResults>
      <TextResults>
        <span>
          {news.length !== 0
            ? `Encontramos ${news.length} ${
                news.length > 1 ? "resultados" : "resultado"
              } para: `
            : "Não encontramos resultados para:"}
        </span> 
        <h2>{title}</h2>
      </TextResults>
      <searchNews>
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
      </searchNews>
    </ContainerResults>
  );
}

export default Search;
