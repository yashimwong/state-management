import ListContainer from "../containers/list-container";

const Lists = ({ lists = [] }) => {
    return (
        <section className="Lists">
            {lists.map((list) => (
                <ListContainer />
            ))}
        </section>
    );
};
export default Lists;
