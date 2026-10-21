import { useState } from "react";
import ProfileCard from "../components/ProfileCard";
import Post from "../components/Post";
import { usePosts } from "../context/PostsContext";
import { useUser } from "../context/UserContext";

function Profile() {
    const { posts, setPosts } = usePosts();
    // const [posts, setPosts] = useState(() => {
    //     const savedPosts = localStorage.getItem("posts");
    //     if (savedPosts) {
    //         return JSON.parse(savedPosts);
    //     }
    //     return [
    //         {
    //             id: 1,
    //             author: 'Viktor',
    //             title: 'Study React for frontend',
    //             text: "какой-то осмысленный текст"
    //         },
    //     ]
    // });

    const [title, setTitle] = useState('');
    const [text, setText] = useState("");
    const [error, setError] = useState("");
    const { userName} = useUser();

    // useEffect(() => {
    //     console.log("Количество постов", posts.length);
    //     localStorage.setItem("posts", JSON.stringify(posts))
    // }, [posts]
    // );

    function addPost(event) {
        event.preventDefault();
        if (!title.trim() || !text.trim()) {
            setError("Заполните заголовок и текст");
            return;
        }

        const newPost = {
            id: Date.now(),
            title: title,
            text: text,
            author: userName
        }

        setPosts([...posts, newPost]);
        setTitle("");
        setText("");
        setError("");
    }

    function deletePost(id) {
        setPosts(
            posts.filter((post) => post.id !== id
            ));
    }

    function clearPosts() {
        setPosts([]);
    }

    return (
        <section>
            <h1>Мой профиль</h1>
            <ProfileCard />
            <div className="feed">
                <h2>Мои публикации</h2>
                {/* <p>Всего публикаций {posts.length}</p> */}

                <form className="post-form" onSubmit={addPost}>
                    {error && (
                        <p className="form-error">
                            {error}
                        </p>
                    )}
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
                <button onClick={clearPosts}>Удалить все посты</button>

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

            </div>
        </section>
    );
}

export default Profile;