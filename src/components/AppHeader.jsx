import logo from "../assets/images/LOGO/logo-icon.svg";
import vip from "../assets/images/icons/vip.svg";
import nightModeWhite from "../assets/images/icons/Night_Mode_white.svg";

import "./AppHeader.css";

function AppHeader() {
  return (
    <header className="w-full fixed bg-neutral-900 app-header-position">
      <div className="container bg-neutral-900">
        <div className="py-s py-lg-m">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src={logo} alt="logo-icon" className="logo-icon" />
            </div>

            <div className="flex items-center">
              <span className="material-symbols-rounded text-neutral-100 mr-xs mr-md-l search-icon">
                search
              </span>
              <img src={vip} alt="vip" className="mr-xs mr-md-l vip-icon" />
              <img
                src={nightModeWhite}
                alt="night-mode-white"
                className="night-mode-white-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
