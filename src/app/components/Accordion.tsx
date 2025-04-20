"use client";
import { createContext, useState } from "react";

export const AccordionContext = createContext<{
  openItemId: number | null;
  toggleItem: (id: number) => void;
}>({
  openItemId: null,
  toggleItem: (id: number) => {},
});

const Accordion: React.FC<{ children: React.ReactNode }> = (props) => {
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  function toggleItem(id: number) {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  }

  const ctxValue = {
    openItemId,
    toggleItem,
  };

  return (
    <AccordionContext.Provider value={ctxValue}>
      <ul>{props.children}</ul>
    </AccordionContext.Provider>
  );
};

export default Accordion;
