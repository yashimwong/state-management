const Lists = ({ list = {}, removeList }) => {
    return (
        <article>
            <h2>{list.title}</h2>
            <div>
                {list.cards.map((card_id) => (
                    <Card key={card_id} card_id={card_id} list_id={list.id} />
                ))}
            </div>
        </article>
    );
};

export default Lists;
