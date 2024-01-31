const SearchIcon = ({
  className,
  width = '16',
  height = '24',
  viewbox = '0 0 16 24',
  fill = '#ffffff',
}) => {
  return (
    <div className={className}>
      <svg
        width="3.823vh"
        height="3.058vh"
        viewBox="0 0 15 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.60268 3.9707C3.7176 3.9707 0.556641 7.13166 0.556641 11.0167C0.556641 14.902 3.7176 18.0628 7.60268 18.0628C11.488 18.0628 14.6487 14.902 14.6487 11.0167C14.6487 7.13166 11.488 3.9707 7.60268 3.9707ZM7.60268 16.762C4.43479 16.762 1.85745 14.1847 1.85745 11.0168C1.85745 7.84888 4.43479 5.27151 7.60268 5.27151C10.7706 5.27151 13.3479 7.84885 13.3479 11.0167C13.3479 14.1846 10.7706 16.762 7.60268 16.762Z"
          fill={fill}
        />
        <path
          d="M16.3666 18.86L12.6376 15.131C12.3835 14.8769 11.972 14.8769 11.7179 15.131C11.4638 15.3849 11.4638 15.7968 11.7179 16.0507L15.4469 19.7797C15.5739 19.9067 15.7402 19.9702 15.9067 19.9702C16.073 19.9702 16.2395 19.9067 16.3666 19.7797C16.6207 19.5258 16.6207 19.1139 16.3666 18.86Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};
export default SearchIcon;
