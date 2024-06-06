import { forwardRef } from "react";
import PropTypes from "prop-types";
import MKBoxRoot from "./MKBoxRoot";

const MKBox = forwardRef(
  function MKBox(
    { variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow, ...rest },
    ref
  ) {
    return (
      <MKBoxRoot
        {...rest}
        ref={ref}
        ownerState={{ variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow }}
      />
    );
  }
);

MKBox.defaultProps = {
  variant: "contained",
  bgColor: "transparent",
  color: "dark",
  opacity: 1,
  borderRadius: "none",
  shadow: "none",
  coloredShadow: "none",
};

MKBox.propTypes = {
  variant: PropTypes.oneOf(["contained", "gradient"]),
  bgColor: PropTypes.string,
  color: PropTypes.string,
  opacity: PropTypes.number,
  borderRadius: PropTypes.string,
  shadow: PropTypes.string,
  coloredShadow: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
    "none",
  ]),
};

// Provide a display name for the component
MKBox.displayName = "MKBox";

export default MKBox;
