import React from "react";

function HomeIcon({fill = "#000",svgClassName = 'w-[3.823vh] 3.058vh' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
    className={svgClassName}
      viewBox="0 0 25 20"
      fill="none"
    >
      <path
        d="M12.1685 5.32271L4.16634 11.9134V19.0267C4.16634 19.2109 4.2395 19.3875 4.36974 19.5177C4.49997 19.648 4.67661 19.7211 4.86078 19.7211L9.7245 19.7086C9.90808 19.7076 10.0838 19.6341 10.2133 19.5039C10.3428 19.3738 10.4155 19.1977 10.4155 19.0141V14.86C10.4155 14.6759 10.4886 14.4992 10.6189 14.369C10.7491 14.2388 10.9257 14.1656 11.1099 14.1656H13.8877C14.0719 14.1656 14.2485 14.2388 14.3787 14.369C14.509 14.4992 14.5821 14.6759 14.5821 14.86V19.0111C14.5819 19.1025 14.5996 19.193 14.6344 19.2775C14.6691 19.362 14.7203 19.4388 14.7848 19.5035C14.8493 19.5682 14.9259 19.6196 15.0103 19.6546C15.0947 19.6897 15.1852 19.7077 15.2766 19.7077L20.1386 19.7211C20.3227 19.7211 20.4994 19.648 20.6296 19.5177C20.7598 19.3875 20.833 19.2109 20.833 19.0267V11.9086L12.8326 5.32271C12.7385 5.24689 12.6213 5.20555 12.5005 5.20555C12.3797 5.20555 12.2626 5.24689 12.1685 5.32271ZM24.8087 9.80231L21.1802 6.81142V0.799703C21.1802 0.661569 21.1254 0.529093 21.0277 0.431418C20.93 0.333743 20.7975 0.27887 20.6594 0.27887H18.2288C18.0907 0.27887 17.9582 0.333743 17.8606 0.431418C17.7629 0.529093 17.708 0.661569 17.708 0.799703V3.95118L13.8222 0.75413C13.4492 0.447263 12.9813 0.279483 12.4984 0.279483C12.0154 0.279483 11.5475 0.447263 11.1746 0.75413L0.188042 9.80231C0.135302 9.8459 0.0916684 9.89945 0.0596336 9.95991C0.0275989 10.0204 0.00779113 10.0866 0.00134208 10.1547C-0.00510697 10.2228 0.00192911 10.2915 0.0220483 10.3569C0.0421674 10.4223 0.0749754 10.4831 0.118598 10.5358L1.22537 11.8813C1.26887 11.9342 1.32238 11.978 1.38283 12.0102C1.44328 12.0424 1.50949 12.0623 1.57766 12.0689C1.64584 12.0755 1.71464 12.0685 1.78013 12.0485C1.84561 12.0284 1.9065 11.9957 1.95931 11.952L12.1685 3.54319C12.2626 3.46738 12.3797 3.42604 12.5005 3.42604C12.6213 3.42604 12.7385 3.46738 12.8326 3.54319L23.0422 11.952C23.0949 11.9957 23.1557 12.0285 23.2211 12.0486C23.2865 12.0687 23.3552 12.0758 23.4234 12.0693C23.4915 12.0629 23.5576 12.043 23.6181 12.011C23.6786 11.979 23.7321 11.9353 23.7757 11.8826L24.8825 10.5371C24.9261 10.4841 24.9587 10.423 24.9786 10.3573C24.9985 10.2916 25.0052 10.2227 24.9983 10.1544C24.9915 10.0861 24.9712 10.0198 24.9387 9.95941C24.9061 9.89899 24.8619 9.8456 24.8087 9.80231Z"
        fill={fill}
      />
    </svg>
  );
}

export default HomeIcon;
