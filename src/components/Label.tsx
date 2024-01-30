// components/Label.tsx

import React, { type LabelHTMLAttributes } from "react";

const Label: React.FC<LabelHTMLAttributes<HTMLLabelElement>> = ({
  children,
  ...props
}) => {
  return (
    <label
      className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
