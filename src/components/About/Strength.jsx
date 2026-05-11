const StrengthCard = ({ text }) => {
  return (
    <div className="flex items-center gap-4 bg-[#110101] border border-red-600 w-[280px]
max-[1365px]:w-[420px]
max-[992px]:w-[320px]
max-[768px]:w-full
max-[768px]:max-w-[320px]
px-4 py-3 font-['Montserrat'] rounded-full text-sm">
      <span className="w-3 h-3 bg-gradient-to-r from-[#FFFFFF] via-[#FF0404] to-[#CF0000] rounded-full "></span>
      {text}
    </div>
  );
};

export default StrengthCard;