import PropTypes from "prop-types";

import "./DateInput.css";

export default function DateInput({ className, ...props }) {
  const combinedClassName = ["wh-date-input", className]
    .filter(Boolean)
    .join(" ");

  return <input type="date" className={combinedClassName} {...props} />;
}

DateInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  min: PropTypes.string,
  max: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};
