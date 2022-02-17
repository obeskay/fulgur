const Price = ({ quantity, currency = "MX", size = "md", className = "" }) => {
  switch (size) {
    case "lg":
      return (
        <p
          className={`flex items-center text-2xl font-bold pointer-events-none text-bright ${className}`}
        >
          <span className="text-sm font-normal opacity-50">{currency}</span>
          <span>$</span>
          <span>{quantity}</span>
        </p>
      );
    case "sm":
      return (
        <p
          className={`flex items-center font-bold pointer-events-none text-md text-bright ${className}`}
        >
          <span className="text-sm font-normal opacity-50">{currency}</span>
          <span>$</span>
          <span>{quantity}</span>
        </p>
      );
    default:
      return (
        <p
          className={`flex items-center text-lg font-bold pointer-events-none text-bright ${className}`}
        >
          <span className="text-sm font-normal opacity-50">{currency}</span>
          <span>$</span>
          <span>{quantity}</span>
        </p>
      );
  }
};

export default Price;
