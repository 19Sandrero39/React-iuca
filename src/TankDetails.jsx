export default function TankDetails({ selectedTank, onBack, onDelete }) {
    if (!selectedTank) return null;

    return (
        <div>
            <h2>{selectedTank.model}</h2>
            <p><strong>Страна:</strong> {selectedTank.country}</p>
            <p><strong>Тип:</strong> {selectedTank.type}</p>

            <button onClick={onBack} className="back-btn">Назад</button>
            <button onClick={onDelete} className="delete-btn">Удалить</button>
        </div>
    );
}
