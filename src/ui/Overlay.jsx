import "./Overlay.css";

function Overlay({ children, overlayCustomClass }) {
  return (
    <div className={`${overlayCustomClass ? overlayCustomClass : "overlay"}`}>
      {children}
    </div>
  );
}

export default Overlay;
