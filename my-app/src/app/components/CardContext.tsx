// CardContext.tsx
import React, { createContext, useState, useContext } from "react";

interface CardInfo {
  title: string;
  artist: string;
  Image: any;
  imageHeart: any;
}

interface CardContextProps {
  cardInfo: CardInfo[];
  updateCardInfo: (info: CardInfo) => void;
}

const CardContext = createContext<CardContextProps | undefined>(undefined);

export const CardProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cardInfo, setCardInfo] = useState<CardInfo[]>([]);

  const updateCardInfo = (info: CardInfo) => {
    setCardInfo((prevInfo) => [...prevInfo, info]);
  };

  return (
    <CardContext.Provider value={{ cardInfo, updateCardInfo }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("useCardContext must be used within a CardProvider");
  }
  return context;
};
