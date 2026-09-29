import { useState } from "react";
import Post from "./Post";
import avatar from "../assets/logo.png";

function ProfileCard() {
    const [posts, setPosts] = useState([
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
    ])

    const [title, setTitle] = useState('');
    const [text, setText] = useState("")

    function addPost(event) {
        event.preventDefault();

        const newPost = {
            id: Date.now(),
            title: title,
            text: text,
            author: "Viktor"
        }

        setPosts([...posts, newPost]);
        setTitle("");
        setText("");
    }

    function deletePost(id) {
        setPosts(
            posts.filter((post) => post.id !== id
            ));
    }

    return (
        <section className="profile-card">
            <div className="profile">
                <div className="avatar">
                    <img src={avatar} alt="" />
                </div>
                <div className="profile-info">
                    <h2>Name</h2>
                    <p>@nickname</p>
                </div>
            </div>
            <img src="../assets/logo.png" alt="" />
            <form className="post-form" onSubmit={addPost}>
                <input
                    id="post-input"
                    type="text"
                    placeholder="Заголовок"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <textarea
                    id="post-textarea"
                    placeholder="текст для поста"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />
                <button id="post-button" type="submit">
                    Опубликовать
                </button>
            </form>

            {/* if (5 > 0): console.log('true') else: console.logg(false) */}
            {/* 5 > 0 ? comand : comand2 */}
            {posts.length > 0 ? (
                posts.map((post) => (
                    <Post
                        key={post.id}
                        id={post.id}
                        author={post.author}
                        title={post.title}
                        text={post.text}
                        onDelete={deletePost} />
                ))
            ) : (
                <p className="empty-message">Опубликуйте первый пост</p>
            )}

            {/* <Post author="Alex" title="Backend developers" text="lorem10Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, qui?" />
        <Post author="Sam" title="Design system" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque tenetur eligendi ipsa nobis? Quae cum sapiente inventore sed esse quaerat distinctio, enim dignissimos quos fugit tempora veniam non, ratione qui laudantium saepe, ut ducimus consequuntur est quibusdam libero. Aliquam sint soluta similique nulla quaerat officia, accusantium pariatur veritatis facere iure." /> */}
        </section>
    )
}

// git add .
// git commit -m "text commit"
// git push


export default ProfileCard;

