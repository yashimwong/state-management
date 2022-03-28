import CreateList from "./components/create-lists";
import ListsContainer from "./containers/lists-container";
import Users from "./components/users";
import "./App.css";

const App = () => {
    return (
        <main className="main-wrapper">
            <Users />
            <section>
                <CreateList />
                <ListsContainer />
            </section>
        </main>
    );
};

export default App;
