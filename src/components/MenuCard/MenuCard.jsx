import './MenuCard.css';

function MenuCard({ item }) {
  return (
    <div className="menu_card">
      {item.recommended && <span className="menu_card_badge">Chef's Pick</span>}
      <img src={item.image} alt={item.name} />
      <div className="menu_card_body">
        <h3>{item.name}</h3>
        <p className="menu_card_desc">{item.category} · {item.calories} cal</p>
        <p className="menu_card_price">{item.price}</p>
      </div>
    </div>
  );
}

export default MenuCard;