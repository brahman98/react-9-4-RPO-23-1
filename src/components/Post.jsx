import Actions from "./Actions";

function Post({ author, title, text, onDelete, id }) {
    return (
        <div>
            <article className="post">
                <div>
                    <h2>{title}</h2>
                    {onDelete && (
                        <button
                            className="delete-button"
                            onClick={() => onDelete(id)}>
                            Удалить
                        </button>
                    )}
                </div>
                <p className="post-text">{text}</p>
                <p className="post-author">Автор: {author}</p>

                <Actions />

            </article>
        </div>
    )
}

export default Post;