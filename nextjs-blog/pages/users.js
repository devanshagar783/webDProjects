import React from "react";

//for static site generation with data and only pre-rendering
//it runs only on server side
export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return {
        props: {
            data,
        },
        revalidate: 1000, //regenerate the page every 1000 seconds( Incremental Static Regeneration (ISR))
    };
}

const users = ({data}) => {
    return <div>List of users
        <ul>
            {data.map((user) => (
                <li key={user.id}>
                    {user.name}
                </li>
            ))}
        </ul>
    </div>;
};

export default users;
