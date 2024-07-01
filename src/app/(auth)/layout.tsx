interface layoutProps {
  children: React.ReactNode;
}

const layout: React.FC<layoutProps> = ({ children }) => {
  return <div className="bg-[#f0f2f5] h-screen">{children}</div>;
};

export default layout;
