import PropTypes from "prop-types";

import "./SelectInput.css";

export default function SelectInput({ options, ...props }) {
  const combinedClassName = ["wh-select", className].filter(Boolean).join(" ");

  return (
    <select className={combinedClassName} {...props}>
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}

SelectInput.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
