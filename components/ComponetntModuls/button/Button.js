function Button({ children, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`max-w-orderBtn w-full bg-[#f2f2f2] text-[#282f3c] hover:bg-[#fb923c] p-2 md:p-13 text-center rounded-xl hover:text-white shadow-order_btn ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
