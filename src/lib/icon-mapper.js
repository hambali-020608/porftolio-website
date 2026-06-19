import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as PiIcons from "react-icons/pi";

const allIcons = {
  ...FaIcons,
  ...SiIcons,
  ...PiIcons
};

export const getIcon = (iconName) => {
  return allIcons[iconName] || FaIcons.FaQuestion; // Default to question mark if not found
};
