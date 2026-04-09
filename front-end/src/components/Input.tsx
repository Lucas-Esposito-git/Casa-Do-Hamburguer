const Imput = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className="w-[350px] bg-white py-2 text-xs px-2 outline-none rounded-md text-[#32343E] placeholder-[#32343E]"
    />
  );
};

export default Imput;
