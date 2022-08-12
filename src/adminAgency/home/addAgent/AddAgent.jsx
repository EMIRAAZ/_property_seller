import React from "react";
import "./addAgent.scss";

function AddAgent() {
  return (
    <div className="add-main">
      <div className="text-div">
        <div className="inside-icon-div">
          <div className="icon">
            <svg
              width="27"
              height="27"
              viewBox="0 0 20 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.1138 0C12.633 0.040304 13.0374 0.175872 13.315 0.497388C13.6293 0.860123 13.8416 1.42255 13.9344 2.11871V5.25784C13.9344 5.21021 13.9335 5.22578 13.9325 5.28165C13.9325 5.35219 13.9344 5.35035 13.9344 5.31005V5.56195C13.6817 5.42079 13.4076 5.32178 13.1229 5.26883C12.486 5.1525 11.8252 5.20105 11.1883 5.22761C10.5514 5.25509 9.94118 5.25875 9.44215 5.12227C8.94219 4.98487 8.54793 4.74121 8.21799 4.17421C8.17255 4.09604 8.10493 4.033 8.02364 3.99304C7.94234 3.95308 7.85101 3.93797 7.76112 3.94962C7.67123 3.96128 7.58681 3.99916 7.51847 4.05852C7.45014 4.11788 7.40094 4.19606 7.37708 4.28321C7.38903 4.23925 7.29804 4.42794 7.1464 4.60748C6.83227 4.97744 6.4686 5.30261 6.06562 5.57386V5.30913C6.06562 5.35951 6.06746 5.34302 6.06746 5.2844C6.06746 5.21387 6.06562 5.21662 6.06562 5.25692V3.07959C6.06562 1.96573 6.94146 1.08821 8.04522 1.08821H10.5101C10.9245 1.06073 11.3519 0.931571 11.7122 0.67784C11.9208 0.53128 11.986 0.241824 12.1147 0.00183198L12.1138 0ZM7.87795 5.14883C8.27038 5.56103 8.71427 5.87156 9.19952 6.00438C9.87777 6.19032 10.5744 6.17109 11.226 6.14361C11.8785 6.11704 12.4878 6.08407 12.9584 6.16926C13.3977 6.24895 13.6954 6.401 13.9344 6.76649V8.25041C13.9344 10.4488 12.1855 12.2029 10 12.2029C7.81454 12.2029 6.06562 10.4497 6.06562 8.24949V6.65565C6.18509 6.60069 6.29538 6.53382 6.41393 6.45871C6.66667 6.29933 6.92859 6.09506 7.17673 5.87522C7.42487 5.65538 7.65922 5.42088 7.84762 5.19921C7.86141 5.18273 7.86509 5.16532 7.87795 5.14883V5.14883ZM12.8968 12.1388V13.9296L9.95864 16.4056L7.21257 14.0927V12.2286C8.02575 12.8082 9.00029 13.1201 10 13.1208C11.0473 13.1176 12.0647 12.7727 12.8968 12.1388V12.1388ZM13.4372 14.6761L14.4279 15.2606L12.6652 18.2009L11.5127 17.2941L10.9043 16.8104L13.4372 14.6761ZM6.5573 14.7384L9.01663 16.8123L8.52036 17.2089L7.25393 18.2L5.53442 15.3311L6.5573 14.7384ZM15.2183 15.7277L18.411 17.6119H18.4147C18.8953 17.8828 19.2953 18.2759 19.5738 18.7511C19.8523 19.2262 19.9993 19.7665 20 20.3169V25.3851H17.3771V23.0337H16.458V25.386H12.2388L11.4162 19.2442C11.5605 19.0647 11.6754 18.8641 11.7425 18.6433L12.9188 19.5667L15.2183 15.7277ZM4.73853 15.7909L6.99936 19.5639L8.23729 18.5957C8.30346 18.8348 8.42937 19.05 8.58377 19.2433L7.76032 25.3869H3.69268V23.0328H2.77364V25.3869H0V20.4185C0 19.2387 0.635971 18.1496 1.67172 17.5634H1.67264L4.73853 15.7909ZM9.96048 17.2327L10.908 17.9856V18.1166C10.908 18.3569 10.8122 18.5873 10.6418 18.7572C10.4713 18.9271 10.2401 19.0226 9.99908 19.0226C9.75802 19.0226 9.52683 18.9271 9.35637 18.7572C9.18592 18.5873 9.09016 18.3569 9.09016 18.1166V17.9279L9.09199 17.9261L9.96048 17.2327ZM9.42928 19.836C9.80057 19.9578 10.1976 19.9578 10.5689 19.836L11.339 25.5976L10 27L8.65913 25.5985L9.42928 19.836Z"
                fill="#2F70FE"
              />
            </svg>
          </div>
          <h1>Add a new agent</h1>
        </div>
        <h1>Add Agent</h1>
        <h2>Click the plus icon to add</h2>
      </div>
      <div className="add-icon-div">
        <div className="icon">
          <svg
            width="23"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.02 0H9.98C8.88648 0 8 0.886476 8 1.98V18.02C8 19.1135 8.88648 20 9.98 20H10.02C11.1135 20 12 19.1135 12 18.02V1.98C12 0.886476 11.1135 0 10.02 0Z"
              fill="#2F70FE"
            />
            <path
              d="M18.02 8H1.98C0.886476 8 0 8.88648 0 9.98V10.02C0 11.1135 0.886476 12 1.98 12H18.02C19.1135 12 20 11.1135 20 10.02V9.98C20 8.88648 19.1135 8 18.02 8Z"
              fill="#2F70FE"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default AddAgent;
