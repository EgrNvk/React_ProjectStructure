import './Filters.css'

const filterTypes = [
  'Ціна',
  'Тип',
  'Відвантаження',
  'Бренд',
  "Об'єм накопичувача",
  'Навігація',
  'Формат SIM-карти',
  'Основна камера',
  'Колір',
]

function Filters() {
  return (
    <aside className="filters">
      <ul className="filters-list">
        {filterTypes.map((title) => (
          <li className="filters-item" key={title}>
            <span className="filters-title">{title}</span>
            <span className="filters-arrow"></span>
          </li>
        ))}
      </ul>
      <div className="filters-controls">
        <button className="filters-button filters-button-show">Показати</button>
        <button className="filters-button filters-button-reset">Скинути</button>
      </div>
    </aside>
  )
}

export default Filters