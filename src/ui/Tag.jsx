function Tag({
  children,
  backgroundColor = "inherit",
  textColor = "inherit",
  customClass,
}) {
  return (
    <div
      style={{ backgroundColor, color: textColor }}
      className={`${customClass ? customClass : ""}`.trim()}
    >
      {children}
    </div>
  );
}

export default Tag;
