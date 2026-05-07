const StrengthCard = ({ text }) => {
  return (
    <div className="flex items-center gap-4 bg-[#110101] border border-red-600 px-3 py-2 rounded-full text-sm">
      <span className="w-3 h-3 bg-gradient-to-r from-[#FFFFFF] via-[#FF0404] to-[#CF0000] rounded-full "></span>
      {text}
    </div>
  );
};

export default StrengthCard;