import React, { useState } from 'react';
    import BrewMethodSelector from './components/BrewMethodSelector';
    import ParameterSlider from './components/ParameterSlider';
    import TasteFeedback from './components/TasteFeedback';

    const App = () => {
      const [method, setMethod] = useState('espresso');
      const [grind, setGrind] = useState('fine');
      const [temperature, setTemperature] = useState(92);
      const [time, setTime] = useState(25);
      const [taste, setTaste] = useState('');

      const handleBrew = () => {
        const result = calculateTaste(grind, temperature, time, method);
        setTaste(result);
      };

      const calculateTaste = (grind, temperature, time, method) => {
        if (method === "espresso") {
          if (grind === "fine" && temperature >= 90 && temperature <= 94 && time >= 20 && time <= 30) {
            return "balanced";
          } else if (temperature < 90 || time < 20) {
            return "underextracted";
          } else {
            return "overextracted";
          }
        }
        // Similar logic for Pour-Over and French Press
      };

      return (
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Barista & Kaffee Simulator</h1>
          <BrewMethodSelector method={method} onChange={setMethod} />
          <ParameterSlider label="Mahlgrad" value={grind} onChange={setGrind} options={['fein', 'mittel', 'grob']} />
          <ParameterSlider label="Wassertemperatur (°C)" value={temperature} onChange={setTemperature} min={88} max={96} step={1} />
          <ParameterSlider label="Brühzeit (s)" value={time} onChange={setTime} min={20} max={60} step={1} />
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4" onClick={handleBrew}>Brühen</button>
          <TasteFeedback taste={taste} />
        </div>
      );
    };

    export default App;
