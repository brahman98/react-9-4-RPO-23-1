import { useUser } from "../context/UserContext";
import { useRef, useState } from "react";

function Settings() {
    const { userName, setUserName, avatar, setAvatar} = useUser();
    const [error, setError] = useState("");
    const fileInputRef = useRef();

    function handleAvatarChange() {
        const file = event.target.files[0];
        if (!file) {
            return;
        }
        if (!file.type.startsWith("image/")) {
            setError("Выберите файл изображения");
            event.target.value = "";
            return;
        }
        if (file.size > 1024 * 1024) {
            setError("Размер изображения не должен превышать размер 1мб");
            event.target.value = "";
            return;
        }
        const reader = new FileReader();
        reader.onload = () => {
            setAvatar(reader.result);
            setError("");
        }
        reader.onerror = () => {
            setError("Не удалось прочитать изобржение");
        }
        reader.readAsDataURL(file);
    }

    function removeAvatar() {
        setAvatar("");
        setError("");
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    }

    return (
        <section className="page">
            <h1>Настройки</h1>
            <p>Потом добавим здесь настройки 🙌</p>
            <label>
                Имя пользователя:
                <input type="text" value={userName} 
                onChange={(event) =>
                    setUserName(event.target.value)
                }/>
            </label>
            <p>Текущее имя: {userName}</p>

            <div className="settings-avatar">
                {avatar ? (
                    <img src={avatar} alt="avatar" className="avatar-preview" />
                ) : (
                    <div className="avatar-placeholder">
                        {userName.charAt(0).toUpperCase() || "?"}
                    </div>
                )}
                <div className="avatar-controls">
                    <h3>Фотография профиля</h3>
                    <input ref={fileInputRef} type="file" accept="image/*" onChange={handleAvatarChange} />
                    <p>Изображение до 1мб</p>
                    {avatar && (<button type="button" onClick={removeAvatar}>Удалить фото</button>)}
                </div>
            </div>

        </section>
    );
}

export default Settings;