import { CircleAlert } from "lucide-react";
import { ReactNode } from "react";

const ValidationError: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="bg-warning p-4 rounded flex gap-4">
      <CircleAlert className="text-white" />
      {children}
    </div>
  );
};

export default ValidationError;
