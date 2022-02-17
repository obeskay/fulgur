const MenuIcon = (props, { height = 24, width = height, className = "" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.75 12.3631C19.75 11.9489 19.4142 11.6131 19 11.6131H5C4.58579 11.6131 4.25 11.9489 4.25 12.3631C4.25 12.7773 4.58579 13.1131 5 13.1131H19C19.4142 13.1131 19.75 12.7773 19.75 12.3631Z"
        className="fill-current"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.75 7.3631C19.75 6.94888 19.4142 6.6131 19 6.6131H5C4.58579 6.6131 4.25 6.94888 4.25 7.3631C4.25 7.77731 4.58579 8.1131 5 8.1131H19C19.4142 8.1131 19.75 7.77731 19.75 7.3631Z"
        className="fill-current"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.75 17.3631C19.75 16.9489 19.4142 16.6131 19 16.6131H5C4.58579 16.6131 4.25 16.9489 4.25 17.3631C4.25 17.7773 4.58579 18.1131 5 18.1131H19C19.4142 18.1131 19.75 17.7773 19.75 17.3631Z"
        className="fill-current"
      />
    </svg>
  );
};

export default MenuIcon;
