import React from "react";

//server side rendering
export async function getServerSideProps() {
    const resp = await fetch("http://localhost:4000/news");
    const news = await resp.json();
    return {
        props: {
            articles: news,
        },
    };
}

const NewsList = ({ articles }) => {
    return (
        <>
            <h1>List of News Articles</h1>
            {articles.map((article) => {
                return (
                    <div key={article.id}>
                        <h2>
                            {article.id} {article.title} | {article.category}
                        </h2>
                        <hr />
                    </div>
                );
            })}
        </>
    );
};

export default NewsList;
