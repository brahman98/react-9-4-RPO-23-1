import Post from "../components/Post";

function Home() {
    const posts = [
        {
            id: 1,
            author: 'Viktor',
            title: 'Study React for frontend',
            text: "какой-то осмысленный текст"
        },
        {
            id: 2,
            author: 'Alex',
            title: 'Backend developers',
            text: "какой-то осмысленный текст"
        },
        {
            id: 3,
            author: 'Michael',
            title: 'Design system',
            text: "какой-то осмысленный текст"
        },
    ]

    return (
        <section>
            <h1>Главная страница</h1>
            <div className="feed">
                <h2>Лента</h2>
                {posts.map((post) => (
                    <Post
                        key={post.id}
                        id={post.id}
                        author={post.author}
                        title={post.title}
                        text={post.text} />
                ))}
            </div>
        </section>
    )
}

export default Home;