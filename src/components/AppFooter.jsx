import AppNav from "./AppNav";
import EndLine from "./EndLine";

import "./AppFooter.css";

function AppFooter() {
  return (
    <footer className="mt-app-footer">
      <div className="w-full fixed bg-neutral-900 footer-position">
        <AppNav />
        <EndLine />
      </div>
    </footer>
  );
}

export default AppFooter;
