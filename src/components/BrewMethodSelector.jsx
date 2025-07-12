import React from 'react';

    const BrewMethodSelector = ({ method, onChange }) => {
      return (
        <div className="mb-4">
          <label className="block text-lg font-medium">Brühmethode:</label>
          <select className="mt-1 block w-full p-2 border border-gray-300 rounded" value={method} onChange={(e) => onChange(e.target.value)}>
            <option value="espresso">Espresso</option>
            <option value="pour-over">Pour-Over</option>
            <option value="french-press">French Press</option>
          </select>
        </div>
      );
    };

    export default BrewMethodSelector;
