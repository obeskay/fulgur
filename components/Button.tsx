const Button = ({ children, className = "" }) => {
  return <button className={`btn bg-orange ${className}`}>{children}</button>;
};

export default Button;
