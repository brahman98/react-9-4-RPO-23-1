import { useState } from "react";
import Post from "./Post";

function ProfileCard() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: "Моё первое React-приложение 🚀",
            text: "Сегодня я изучаю React, компоненты и useState.",
            author: "Виктор"
        },
        {
            id: 2,
            title: "Изучаем props",
            text: "Props позволяют передавать данные между компонентами.",
            author: "Алексей"
        },
        {
            id: 3,
            title: "React становится интереснее",
            text: "Постепенно собираем настоящее приложение.",
            author: "Мария"
        }
    ]);

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    function addPost(event) {
        event.preventDefault();

        const newPost = {
            id: Date.now(),
            title: title,
            text: text,
            author: "Виктор"
        };

        setPosts([...posts, newPost]);

        setTitle("");
        setText("");
    }

    return (
        <section className="profile-card">

            <div className="profile">
                <div className="avatar">V</div>

                <div className="profile-info">
                    <h2>Виктор</h2>
                    <p>@victor_react</p>
                </div>
            </div>

            <form className="post-form" onSubmit={addPost}>

                <input
                    type="text"
                    placeholder="Заголовок поста"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />

                <textarea
                    placeholder="Текст поста"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />

                <button type="submit">
                    Опубликовать
                </button>

            </form>

            {posts.map((post) => (
                <Post
                    key={post.id}
                    title={post.title}
                    text={post.text}
                    author={post.author}
                />
            ))}

        </section>
    );
}

export default ProfileCard;