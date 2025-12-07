export default function TankList({ tanks, selectedTank, setSelectedTank }) {
    return (
        <div className="list">
            {tanks.map((tank) => (
                <p
                    key={tank.id}
                    className={tank.id === selectedTank?.id ? "active" : ""}
                    onClick={() => setSelectedTank(tank)}
                >
                    {tank.model}
                </p>
            ))}
        </div>
    );
}
