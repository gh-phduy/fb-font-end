import { FaChevronRight } from "react-icons/fa6";

interface AvtModalButtonProps {
  children: React.ReactNode;
  title: string;
  chevron?: boolean;
}

const AvtModalButton: React.FC<AvtModalButtonProps> = ({
  children,
  title,
  chevron = false,
  ...props
}) => {
  return (
    <div className="h-[50px] text-text-1 p-2.5 flex-between w-full rounded-lg hover:bg-bg-5">
      <div className="flex-center space-x-3">
        <div className="h-10 w-10 bg-bg-4 rounded-full flex-center">
          {children}
        </div>
        <span className="text-[17px] font-bold text-text-1">{title}</span>
      </div>
      {chevron && <FaChevronRight size={22} />}
    </div>
  );
};

export default AvtModalButton;
