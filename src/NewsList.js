import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItems from './NewsItems';
import axios from 'axios';

//스타일이 적용된 div를 가진 컴포넌트. 
const NewsListBlcok = styled.div` 
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px){
        width:100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
    `;
a
const NewsList = () => {
    const [articles, setArticle] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect( () => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get("http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=@@@@@@@@@@@@@@@@@@@"); // 키값은 숨겼습니다.
                setArticle(response.data.articles);
                setLoading(false);
                console.log("Reading Complete 🔥");
            }catch (e){
                console.log(e);
            }
        };
          fetchData();
        },[]);

        if(loading) {
            return <NewsListBlcok>대기중 ....</NewsListBlcok>
        }

        if(!articles){
            console.log('articles is null');
            return null;
        }


    return (
        <NewsListBlcok>
            {articles.map(article => (
                <NewsItems key={article.url} article={article} />
            ))}
        </NewsListBlcok>
    );
};

export default NewsList;