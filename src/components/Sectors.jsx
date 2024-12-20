const Sectors = () => {
  return (
    <>
      <div className="sector-el-container flex-scroll gp-20">
        <div className="sector-el flex-center gp-5 own">
          <span className="sector-el-name fs-20 ">Your Risks</span>
        </div>
        <div className="sector-el flex-between gp-20">
          <span className="sector-el-name fs-20 ">Sector 1</span>
          <span className="cancel-icon">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 11L11 1M1 1L11 11"
                stroke="white"
                stroke-width="2.004"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
        <div className="sector-el flex-between gp-20">
          <span className="sector-el-name fs-20 ">Sector 2</span>
          <span className="cancel-icon">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 11L11 1M1 1L11 11"
                stroke="white"
                stroke-width="2.004"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
        <div className="sector-el flex-between gp-20">
          <span className="sector-el-name fs-20 ">Sector 3</span>
          <span className="cancel-icon">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 11L11 1M1 1L11 11"
                stroke="white"
                stroke-width="2.004"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
        <div className="sector-el flex-between gp-20">
          <span className="sector-el-name fs-20 ">Sector 4</span>
          <span className="cancel-icon">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 11L11 1M1 1L11 11"
                stroke="white"
                stroke-width="2.004"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
        <div className="sector-el flex-between gp-20">
          <span className="sector-el-name fs-20 ">Sector 5</span>
          <span className="cancel-icon">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 11L11 1M1 1L11 11"
                stroke="white"
                stroke-width="2.004"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
        <div className="sector-el flex-between gp-20">
          <span className="sector-el-name fs-20 ">Sector 6</span>
          <span className="cancel-icon">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 11L11 1M1 1L11 11"
                stroke="white"
                stroke-width="2.004"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
        <div className="sector-el flex-between gp-20">
          <span className="sector-el-name fs-20 ">Sector 7</span>
          <span className="cancel-icon">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 11L11 1M1 1L11 11"
                stroke="white"
                stroke-width="2.004"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
        <div className="sector-el all">
          <div className="flex-between gp-20">
            <span className="sector-el-name fs-20 all">All Sectors</span>
            <span className="flex-center">
              <svg
                width="800px"
                height="800px"
                style={{ transform: "rotate(270deg)" }}
                viewBox="0 0 1024 1024"
                class="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                className="down-arrow"
              >
                <path
                  d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
                  fill="#000000"
                />
              </svg>
            </span>
          </div>

          <div className="sectors-dropdown">
            <div className="dropdown-search-bar">
              <input type="text" placeholder="Search & Add Sector"/>
              <span className="flex-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="search-icon"
                >
                  <path
                    d="M12.0772 12.0987L14.6439 14.6654M13.903 7.64953C13.903 11.1387 11.0839 13.967 7.60721 13.967C4.12971 13.967 1.31055 11.1387 1.31055 7.65036C1.31055 4.15953 4.12971 1.33203 7.60638 1.33203C11.0839 1.33203 13.903 4.16036 13.903 7.64953Z"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>

            <div className="dropdown-item flex-between">
                <span className="fs-20 fw-500">Politics</span>
                <button className="add-sector-cta">Add</button>
            </div>

            <div className="dropdown-item flex-between">
                <span className="fs-20 fw-500">Politics</span>
                <button className="add-sector-cta">Add</button>
            </div>

            <div className="dropdown-item flex-between">
                <span className="fs-20 fw-500">Politics</span>
                <button className="add-sector-cta">Add</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sectors;
