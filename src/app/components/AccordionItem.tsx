import { useContext } from "react";
import { AccordionContext } from "./Accordion";

const AccordionItem: React.FC<{
  id: number;
  title: string;
  children: React.ReactNode;
}> = (props) => {
  const { openItemId, toggleItem } = useContext(AccordionContext);
  return (
    <li>
      <h3 onClick={() => toggleItem(props.id)}>{props.title}</h3>
      <div className={openItemId === props.id ? "open" : ""}>
        {props.children}
      </div>
    </li>
  );
};
