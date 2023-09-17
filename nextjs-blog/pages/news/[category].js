import React from "react";

export async function getServerSideProps(context) {
    const { params, req, res } = context;
    const { category } = params;
    const resp = await fetch(`http://localhost:4000/news?category=${category}`);
    const news = await resp.json();
    return {
        props: {
            articles: news,
            category,
        },
    };
}

const ArticleListByCategory = ({ articles, category }) => {
    return (
        <>
            <h1>Showing news for category "{category}"</h1>
            {articles.map((article) => {
                return (
                    <div key={article.id}>
                        <h2>
                            {article.id} {article.title}
                        </h2>
                        <p>{article.description}</p>
                        <hr />
                    </div>
                );
            })}
        </>
    );
};

export default ArticleListByCategory;
