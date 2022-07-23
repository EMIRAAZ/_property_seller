const Favourite = ({
  width = "13",
  height = "10",
  viewbox = "0 0 13 10",
  fill = "#2D79FC",
  customClass,
}) => {
  return (
    <div className={customClass}>
      <svg
        width={width}
        height={height}
        viewBox={viewbox}
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.6803 0.647461C12.0564 0.647461 12.3903 0.819482 12.6005 1.08556L6.49748 5.96942L0.448854 1.17424C0.651092 0.858327 1.01585 0.647461 1.43223 0.647461H11.6803ZM0.280762 8.77749V2.04087L4.62081 5.48153L0.289708 8.91511C0.283805 8.87003 0.280762 8.8241 0.280762 8.77749ZM0.677686 9.60741C0.879769 9.77482 1.1436 9.87614 1.43223 9.87614H11.6803C11.9284 9.87614 12.1581 9.80129 12.3461 9.67396L7.7343 5.9834L6.90497 6.64707C6.67042 6.83477 6.32873 6.83552 6.09327 6.64885L5.25143 5.98147L0.677686 9.60741ZM8.36146 5.48153L12.8003 9.03367C12.8209 8.95147 12.8318 8.8657 12.8318 8.77749V1.90421L8.36146 5.48153Z"
          // fill="#2D79FC"
          fill={fill}
        />
      </svg>
    </div>
  );
};
export default Favourite;
