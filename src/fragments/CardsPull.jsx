import Card from "./Card";

function CardsPull(props) {
    const { cards } = props;
    return <div className="cards">
        {cards.map(card => <card />)}
    </div>
}