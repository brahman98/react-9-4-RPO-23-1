import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

const PostsContext = createContext();

export function PostsProvider({ children }) {
    const [posts, setPosts] = useState(() => {
        const savedPosts = localStorage.getItem("posts");
        if (savedPosts) {
            return JSON.parse(savedPosts);
        }
        return [
            {
                id: 1,
                author: 'Viktor',
                title: 'Study React for frontend',
                text: "какой-то осмысленный текст"
            },
        ];
    });

    useEffect(() => {
        console.log("Количество постов", posts.length);
        localStorage.setItem("posts", JSON.stringify(posts))
    }, [posts]
    );

    return (
        <PostsContext.Provider value={{posts, setPosts}}>
            {children}
        </PostsContext.Provider>
    );
}
export function usePosts() {
    return useContext(PostsContext);
}
