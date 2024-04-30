import { ComponentPropsWithoutRef, forwardRef } from "react";

import Errors from "./Errors";
import { cn } from "../../helpers";

interface InputTextSpecificProps {
  id: string | number;
  description?: string;
  errors?: string;
  label?: string;
}

const InputText = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<"input"> & InputTextSpecificProps
>(({ label, errors, required, description, className, ...props }, ref) => {
  return (
    <div className={cn("flex-col", className)}>
      <label>
        {label && (
          <legend className="font-semibold leading-6 py-1 text-grey8-dark-text">
            {label}
            {required && (
              <span className="text-red-500 dark:text-red-900">*</span>
            )}
          </legend>
        )}
        <input
          className="p-3 h-11 border-2 placeholder:text-placeholder rounded-md w-full focus:outline-none dark:focus:border-primary-text-dark focus:border-primary-text-light text-primary-text-light disabled:bg-grey2"
          ref={ref}
          type="text"
          aria-label={label}
          {...props}
        />
      </label>
      <Errors message={errors} />
      {description && (
        <div className="text-xs  text-gray-400 tracking-wide leading-6">
          {description}
        </div>
      )}
    </div>
  );
});

export default InputText;
