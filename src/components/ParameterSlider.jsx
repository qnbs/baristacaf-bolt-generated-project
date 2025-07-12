import React from 'react';

    const ParameterSlider = ({ label, value, onChange, options, min, max, step }) => {
      return (
        <div className="mb-4">
          <label className="block text-lg font-medium">{label}</label>
          {options ? (
            <select className="mt-1 block w-full p-2 border border-gray-300 rounded" value={value} onChange={(e) => onChange(e.target.value)}>
              {options.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          ) : (
            <input
              type="range"
              className="mt-1 block w-full"
              value={value}
              onChange={(e) => onChange(Number(e.target.value))}
              min={min}
              max={max}
              step={step}
            />
          )}
        </div>
      );
    };

    export default ParameterSlider;
