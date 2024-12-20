import React from "react";
import Logo from "../assets/map-pr-logo.png";
import ProfilePic from "../assets/user-profile.jpeg";
import DownArrow from "../assets/svg/down-arrow-icon.svg";
const Navbar = () => {
  return (
    <nav>
      <div className="logo-container">
        <img src={Logo} alt="Logo image" className="logo-img" />
      </div>

      <div className="flex gp-30">
        <div className="flex">
          <span>Resources</span>
          <img src={DownArrow} alt="arrow icon" className="down-arrow" />
        </div>

        <div className="search-bar-container">
          <div className="search-bar">
            <input type="text" className="search-input" placeholder="Search" />
            <div className="filter-cta">
              <span className="filter-cta-text">Filter</span>
              <span className="filter-cta-arrow">
                <svg
                  width="800px"
                  height="800px"
                  style={{ transform: `rotate(270deg)` }}
                  viewBox="0 0 1024 1024"
                  className="icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
                    fill="#000000"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className="flex">
          <span className="bell-icon">
            <svg
              width="36"
              height="40"
              viewBox="0 0 36 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.2908 2.49949C14.5896 1.76099 15.1021 1.12855 15.7627 0.683229C16.4232 0.237908 17.2018 0 17.9984 0C18.7951 0 19.5736 0.237908 20.2341 0.683229C20.8947 1.12855 21.4072 1.76099 21.706 2.49949C24.6632 3.31277 27.2717 5.07433 29.1308 7.51363C30.9899 9.95293 31.9968 12.9351 31.9969 16.0021V25.3951L35.6606 30.8905C35.8615 31.1917 35.9769 31.5417 35.9945 31.9034C36.012 32.265 35.9311 32.6246 35.7603 32.9438C35.5895 33.2631 35.3352 33.5299 35.0246 33.716C34.714 33.902 34.3588 34.0002 33.9967 34.0002H24.9277C24.6869 35.6662 23.8539 37.1897 22.5813 38.2916C21.3087 39.3935 19.6817 40 17.9984 40C16.3151 40 14.6881 39.3935 13.4155 38.2916C12.1429 37.1897 11.3099 35.6662 11.0691 34.0002H2.00009C1.63804 34.0002 1.28277 33.902 0.972179 33.716C0.661588 33.5299 0.407328 33.2631 0.236527 32.9438C0.0657251 32.6246 -0.0152099 32.265 0.00235545 31.9034C0.0199208 31.5417 0.135328 31.1917 0.336264 30.8905L3.99988 25.3951V16.0021C3.99988 9.55475 8.35942 4.12332 14.2908 2.49949ZM15.1707 34.0002C15.3772 34.5854 15.7602 35.0922 16.2668 35.4506C16.7735 35.8091 17.3788 36.0016 17.9994 36.0016C18.62 36.0016 19.2254 35.8091 19.732 35.4506C20.2386 35.0922 20.6216 34.5854 20.8281 34.0002H15.1707ZM17.9984 6.00312C15.3465 6.00312 12.8032 7.05658 10.9281 8.93175C9.05292 10.8069 7.99946 13.3502 7.99946 16.0021V26.001C7.99955 26.396 7.88264 26.7822 7.66349 27.1109L5.7377 30.0006H30.2571L28.3313 27.1109C28.1129 26.782 27.9967 26.3958 27.9974 26.001V16.0021C27.9974 13.3502 26.9439 10.8069 25.0687 8.93175C23.1936 7.05658 20.6503 6.00312 17.9984 6.00312Z"
                fill="black"
              />
            </svg>
          </span>

          <span className="more-icon">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.0922 9.81563H22.9078V0H13.0922V9.81563ZM26.1844 0V9.81563H36V0H26.1844ZM0 9.81563H9.81563V0H0V9.81563ZM13.0922 22.9078H22.9078V13.0922H13.0922V22.9078ZM26.1844 22.9078H36V13.0922H26.1844V22.9078ZM0 22.9078H9.81563V13.0922H0V22.9078ZM13.0922 36H22.9078V26.1844H13.0922V36ZM26.1844 36H36V26.1844H26.1844V36ZM0 36H9.81563V26.1844H0V36Z"
                fill="black"
              />
            </svg>
          </span>

          <div className="profile-container flex">
            <img className="profile-pic" src= {ProfilePic} alt="" />
            <span className="user-profile-name">Uther Martin</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
