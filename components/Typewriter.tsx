import React, { useState, useEffect } from 'react';

const TEXTS = [
  "Caçambas no Xaxim com entrega relâmpago",
  "Reformando no Pinheirinho? Alugue agora",
  "Melhor preço do Capão Raso e região",
  "Entulho na Fanny? Chama A Baratona!",
  "Atendimento VIP no Sítio Cercado",
  "Obras no Batel com descarte legal",
  "Caçamba rápida no Boqueirão é aqui",
  "Serviço expresso em Santa Felicidade",
  "Remoção de entulho no CIC e arredores",
  "Construindo no Uberaba? Conte conosco",
  "Limpeza de terrenos no Tatuquara",
  "Caçambas 5m³ no Portão em promoção",
  "Agilidade total no Novo Mundo",
  "Descarte consciente no Água Verde",
  "A melhor caçamba de Curitiba!"
];

const Typewriter: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  // Typing logic
  useEffect(() => {
    if (subIndex === TEXTS[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000); // Wait before deleting
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % TEXTS.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 30 : 60); // Delete faster than type

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <div className="h-20 md:h-24 flex items-center">
      <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-400 drop-shadow-sm">
        {`${TEXTS[index].substring(0, subIndex)}${blink ? "|" : " "}`}
      </h2>
    </div>
  );
};

export default Typewriter;