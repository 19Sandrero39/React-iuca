import "./App.css";
import { useState } from "react";
import TankList from "./TankList";
import TankDetails from "./TankDetails";

export default function App() {
  const [tanks, setTanks] = useState([
    { id: 1, model: "T-34", country: "СССР", type: "Средний танк" },
    { id: 2, model: "Tiger I", country: "Германия", type: "Тяжёлый танк" },
    { id: 3, model: "M4 Sherman", country: "США", type: "Средний танк" },
    { id: 4, model: "Panther", country: "Германия", type: "Средний танк" },
    { id: 5, model: "ИС-2", country: "СССР", type: "Тяжёлый танк" },
    { id: 6, model: "Churchill", country: "Великобритания", type: "Пехотный танк" }
  ]);

  const [selectedTank, setSelectedTank] = useState(null);

  function deleteTank() {
    setTanks(tanks.filter(tank => tank.id !== selectedTank.id));
    setSelectedTank(null);
  }

  return (
    <div className="layout">

      <TankList
        tanks={tanks}
        selectedTank={selectedTank}
        setSelectedTank={setSelectedTank}
      />

      <div className="details">
        {selectedTank ? (
          <TankDetails
            selectedTank={selectedTank}
            onBack={() => setSelectedTank(null)}
            onDelete={deleteTank}
          />
        ) : (
          <p className="placeholder">Выберите танк слева</p>
        )}
      </div>

    </div>
  );
}
