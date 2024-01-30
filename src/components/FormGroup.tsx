interface FormGroupProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  className?: string;
}

const FormGroup = ({ className, children, ...rest }: FormGroupProps) => {
  return (
    <div {...rest} className={`form-group ${className ? className : ""}`}>
      {children}
    </div>
  );
};

export default FormGroup;
