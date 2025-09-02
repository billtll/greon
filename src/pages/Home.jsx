import decoration1 from "../assets/images/decoration/decoration1.svg";
import decoration2 from "../assets/images/decoration/decoration2.svg";
import decoration3 from "../assets/images/decoration/decoration3.svg";
import logo from "../assets/images/LOGO/logo.svg";

import "./Home.css";

import Button from "../ui/Button";

function Home() {
  return (
    <main className="w-screen h-screen relative overflow-hidden flex justify-center items-center bg-neutral-900">
      <img
        src={decoration1}
        alt="decoration1"
        className="absolute decoration1"
      />
      <img
        src={decoration2}
        alt="decoration2"
        className="absolute decoration2"
      />
      <img
        src={decoration3}
        alt="decoration3"
        className="absolute decoration3"
      />

      <div className="relative">
        <img src={logo} alt="logo" className="home-page-logo" />
        <Button
          to="/app/home"
          btnStyle="primary"
          otherClass="absolute login-btn"
        >
          登入
        </Button>
      </div>
    </main>
  );
}

export default Home;
