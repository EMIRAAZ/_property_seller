const ListAgent = ({
  className = '',
  width = '14',
  height = '16',
  viewBox = '0 0 14 16',
}) => {
  return (
    <div className={className}>
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.99263 0.155884H2.01395V2.13456H0.0352783V14.0066H2.01395V15.9853H3.99263V14.0066H5.97131V2.13456H3.99263V0.155884ZM13.886 4.11324H11.9073V0.155884H9.92866V4.11324H7.94998V11.0386H9.92866V15.9853H11.9073V11.0386H13.886V4.11324Z"
          fill="black"
        />
      </svg>
    </div>
  );
};
export default ListAgent;
