import React, { useState } from 'react';

const Calculator: React.FC = () => {
  const [length, setLength] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const volume = length * width * height; // Rough estimation for generic rubble pile
    // Usually rubble expands, so we might add a factor, but simple volume is a good start
    setResult(parseFloat(volume.toFixed(2)));
  };

  const getRecommendation = (vol: number) => {
    if (vol <= 3) return "Caçamba 3m³";
    if (vol <= 5) return "Caçamba 5m³";
    if (vol <= 8) return "Caçamba 8m³";
    return "Múltiplas Caçambas ou 8m³";
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <h3 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-2">
        <i className="fas fa-calculator text-primary"></i> Calculadora de Entulho
      </h3>
      <p className="text-gray-600 mb-4 text-sm">Estime o volume do seu entulho (medidas aproximadas da pilha em metros).</p>
      
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold text-gray-500 mb-1">Comprimento (m)</label>
          <input 
            type="number" 
            className="w-full border border-gray-300 rounded p-2 focus:border-primary outline-none"
            value={length || ''} 
            onChange={(e) => setLength(parseFloat(e.target.value))}
            placeholder="0.0"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-500 mb-1">Largura (m)</label>
          <input 
            type="number" 
            className="w-full border border-gray-300 rounded p-2 focus:border-primary outline-none"
            value={width || ''} 
            onChange={(e) => setWidth(parseFloat(e.target.value))}
            placeholder="0.0"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-500 mb-1">Altura (m)</label>
          <input 
            type="number" 
            className="w-full border border-gray-300 rounded p-2 focus:border-primary outline-none"
            value={height || ''} 
            onChange={(e) => setHeight(parseFloat(e.target.value))}
            placeholder="0.0"
          />
        </div>
      </div>

      <button 
        onClick={calculate}
        className="w-full bg-secondary text-white font-bold py-2 rounded hover:bg-gray-800 transition-colors"
      >
        CALCULAR
      </button>

      {result !== null && (
        <div className="mt-4 p-4 bg-orange-50 rounded-lg text-center">
          <p className="text-gray-700">Volume estimado: <strong>{result} m³</strong></p>
          <p className="text-primary font-bold text-lg mt-1">Recomendação: {getRecommendation(result)}</p>
        </div>
      )}
    </div>
  );
};

export default Calculator;