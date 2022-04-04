const filterStyle =
  "invert(22%) sepia(99%) saturate(1939%) hue-rotate(183deg) brightness(91%) contrast(98%)";
const logoUrl = "/images/logo.svg";

export function Logo() {
  return (
    <img
      className="w-16"
      style={{ filter: `${filterStyle}` }}
      src={logoUrl}
      alt="Logo"
    />
  );
}
