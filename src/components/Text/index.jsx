import React from "react";

const sizeClasses = {
  txtRalewayRomanRegular18: "font-normal font-raleway",
  txtRalewayRomanMedium18: "font-medium font-raleway",
  txtDMSansBold22: "font-bold font-dmsans",
  txtDMSansRegular24Gray800: "font-dmsans font-normal",
  txtPoppinsRegular18Gray600: "font-normal font-poppins",
  txtDMSansRegular20: "font-dmsans font-normal",
  txtRalewayRomanRegular16: "font-normal font-raleway",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtMontserratRomanBold68: "font-bold font-montserrat",
  txtRalewayRomanMedium33Black900: "font-medium font-raleway",
  txtMontserratRomanRegular18: "font-montserrat font-normal",
  txtMontserratRegular16: "font-montserrat font-normal",
  txtMontserratRomanSemiBold32: "font-montserrat font-semibold",
  txtRalewayRomanBold40: "font-bold font-raleway",
  txtRalewayRomanBold33: "font-bold font-raleway",
  txtRalewayRomanBold952: "font-bold font-raleway",
  txtDMSansRegular24: "font-dmsans font-normal",
  txtDMSansBold30: "font-bold font-dmsans",
  txtRalewayRomanMedium33: "font-medium font-raleway",
  txtMontserratRomanLight20: "font-light font-montserrat",
  txtDMSansRegular18: "font-dmsans font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };