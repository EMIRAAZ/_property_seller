const Instagram = ({
  width = '22',
  height = '23',
  viewBox = '0 0 22 23',
  fill = 'none',
  customClass,
  onClick,
}) => {
  return (
    <div className={customClass} onClick={onClick}>
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.875 0.980469H15.125C18.9214 0.980469 22 4.05909 22 7.85547V16.1055C22 19.9018 18.9214 22.9805 15.125 22.9805H6.875C3.07862 22.9805 0 19.9018 0 16.1055V7.85547C0 4.05909 3.07862 0.980469 6.875 0.980469ZM15.125 20.918C17.7787 20.918 19.9375 18.7592 19.9375 16.1055V7.85547C19.9375 5.20172 17.7787 3.04297 15.125 3.04297H6.875C4.22125 3.04297 2.0625 5.20172 2.0625 7.85547V16.1055C2.0625 18.7592 4.22125 20.918 6.875 20.918H15.125Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.5 11.9805C5.5 8.94309 7.96263 6.48047 11 6.48047C14.0374 6.48047 16.5 8.94309 16.5 11.9805C16.5 15.0178 14.0374 17.4805 11 17.4805C7.96263 17.4805 5.5 15.0178 5.5 11.9805ZM7.5625 11.9805C7.5625 13.8752 9.10525 15.418 11 15.418C12.8948 15.418 14.4375 13.8752 14.4375 11.9805C14.4375 10.0843 12.8948 8.54297 11 8.54297C9.10525 8.54297 7.5625 10.0843 7.5625 11.9805Z"
          fill="white"
        />
        <path
          d="M16.9126 6.80169C17.3173 6.80169 17.6454 6.47357 17.6454 6.06881C17.6454 5.66406 17.3173 5.33594 16.9126 5.33594C16.5078 5.33594 16.1797 5.66406 16.1797 6.06881C16.1797 6.47357 16.5078 6.80169 16.9126 6.80169Z"
          fill="white"
        />
      </svg>
    </div>
  );
};
export default Instagram;
