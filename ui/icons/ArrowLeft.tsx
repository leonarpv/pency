import React from "react";
import {Box, BoxProps} from "@chakra-ui/core";

interface Props extends Omit<BoxProps, "size"> {
  size?: number;
}

const ArrowLeftIcon: React.FC<Props> = ({size = 24, ...props}) => {
  return (
    <Box {...props}>
      <svg
        className="feather feather-arrow-left"
        fill="none"
        height={size}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19 12L5 12" />
        <path d="M12 19L5 12 12 5" />
      </svg>
    </Box>
  );
};

export default ArrowLeftIcon;
