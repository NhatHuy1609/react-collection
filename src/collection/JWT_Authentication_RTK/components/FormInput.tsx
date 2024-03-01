import * as React from 'react'
import { cn } from '~/lib/utils'

export interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, type, name, ...props }, ref) => {
    return (
      <input
        name={name}
        type={type}
        ref={ref}
        className={cn(
          'border-input flex h-10 w-full rounded-md border bg-slate-100 px-3 py-2 text-sm text-slate-400 focus:outline-none',
          className
        )}
        {...props}
      />
    )
  }
)

FormInput.displayName = 'FormInput'

export default FormInput
