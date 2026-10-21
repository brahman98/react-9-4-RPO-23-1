import { useUser } from "../context/UserContext";

function Settings() {
    const { userName, setUserName} = useUser();
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
        </section>
    );
}

export default Settings;