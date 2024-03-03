import LikeButton from "./like-button"

export default function HomePage() {
    return (
        <>
            <Header />
            <Article title="AAA BaaBBaaa" />
            <Article />
            <Article title="BaaBBaaa" />
            <p>This is HomePage</p>
            <Names />
            <LikeButton />
            <Footer />
        </>
    );
}

function Names() {
    const names = ["Alicia", "Bob", "Charlie"];

    return (
        <>
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
        </>
    );
}

function Header() {
    return <h1>Develop2. Preview2. Ship2.</h1>;
}

function Article({ title }) {
    return (
        <>
            <hr />
            <h2>{title ? title : "This is it!"}</h2>
            <p>AAA aaaa aaaaaaaaaa</p>
        </>
    );
}

function Footer() {
    return <p>All rights reserved 2024</p>;
}