import CreateList from "./components/create-lists";
import Lists from "./components/lists";
import Users from "./components/users";
import "./App.css";

const App = () => {
    return (
        <main className="main-wrapper">
            <Users />
            <section>
                <CreateList />
                <Lists />
            </section>
        </main>
    );
};

export default App;
