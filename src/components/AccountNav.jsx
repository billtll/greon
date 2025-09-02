import { useState } from "react";

import greenAccount from "../assets/images/icons/green-account.svg";
import vip from "../assets/images/icons/vip.svg";
import circleAccount from "../assets/images/icons/circle-account.svg";
import circleAccountActive from "../assets/images/icons/circle-account-active.svg";
import history from "../assets/images/icons/history.svg";
import historyActive from "../assets/images/icons/history-active.svg";
import accountSettings from "../assets/images/icons/account-settings.svg";
import accountSettingsActive from "../assets/images/icons/account-settings-active.svg";

import Button from "../ui/Button";
import NavItem from "./NavItem";

import "./AccountNav.css";

const accountNavItems = [
  {
    to: "/app/account/personal-settings",
    icon: circleAccount,
    activeIcon: circleAccountActive,
    alt: "circle-account",
    label: "個人設定",
    noNavigate: true,
  },
  {
    to: "/app/account/personal-records-center",
    icon: history,
    activeIcon: historyActive,
    alt: "history",
    label: "個人紀錄中心",
    noNavigate: true,
  },
  { to: "/app/account/history", label: "歷史紀錄", noNavigate: true },
  { to: "/app/account/watch-later", label: "稍後觀看", noNavigate: true },
  { to: "/app/account/favorite", label: "我的收藏", noNavigate: false },
  { to: "/app/account/featured-moments", label: "精選時刻", noNavigate: true },
  {
    to: "/app/account/account-settings",
    icon: accountSettings,
    activeIcon: accountSettingsActive,
    alt: "account-settings",
    label: "帳號設定",
    noNavigate: true,
  },
];

function AccountNav({ onCloseModal }) {
  const [activeAccountTab, setActiveAccountTab] = useState(
    "/app/account/personal-settings"
  );

  const defaultButtonClass = "account-nav-btn";

  const handleActiveTab = (tab) => {
    setActiveAccountTab(tab.to);

    if (!tab.noNavigate) {
      // console.log("⛔⛔ 關閉 modal");
      onCloseModal?.();
    }
  };

  return (
    <div className="bg-neutral-800 text-neutral-100 account-nav-appearance overflow-y-auto">
      <div className="flex flex-col h-full">
        <div className="flex items-center pt-0 px-m pb-m pb-md-l account-nav-border">
          <img
            src={greenAccount}
            alt="green-account"
            className="mr-xs mr-md-s account-nav-green-account-icon"
          />
          <div className="flex flex-col items-start">
            <div className="lh-0 mb-tiny mb-md-xxs">
              <img src={vip} alt="vip" className="account-nav-vip-icon" />
            </div>
            <p className="text-s text-md-m">user id: fho0eupiocd</p>
          </div>
        </div>
        <ul>
          {accountNavItems.map((item) => {
            const isActive = activeAccountTab === item.to;
            // console.log(`${item.label} isActive`, isActive);
            return (
              <li key={item.to}>
                <NavItem
                  key={item.to}
                  buttonClass={defaultButtonClass}
                  to={item.to}
                  noNavigate={item.noNavigate}
                  isModalBtn={item.isModalBtn}
                  modalId={item.modalId}
                  modalContent={item.modalContent}
                  modalCloseBtn={false}
                  overlayCustomClass={item.overlayCustomClass}
                  styledModalCustomClass={item.styledModalCustomClass}
                  onClick={() => handleActiveTab(item)}
                >
                  <div className="flex items-center py-s">
                    {item.icon ? (
                      <img
                        src={isActive ? item.activeIcon : item.icon}
                        alt={item.alt}
                        className="mr-xs text-md-l account-nav-icon-size"
                      />
                    ) : (
                      <div className="mr-xs text-md-l account-nav-icon-size"></div>
                    )}
                    <h4
                      className={`text-neutral-100 text-m text-md-l ${
                        isActive ? "account-nav-active-text" : ""
                      }`.trim()}
                    >
                      {item.label}
                    </h4>
                  </div>
                </NavItem>
              </li>
            );
          })}
        </ul>
        <div className="mt-auto flex justify-center items-center">
          <Button btnStyle="primary" otherClass="logout-btn">
            登出
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AccountNav;
