interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
    icon?: React.ReactNode
  }
  
  export function FloatingInput({ label, icon, ...props }: FloatingInputProps) {
    return (
      <div className="relative">
        <input
          {...props}
          className="peer h-14 w-full rounded-md border border-gray-200 bg-white px-4 pt-4 text-sm outline-none transition-all focus:border-blue-500"
          placeholder=" "
        />
        <label
          className="pointer-events-none absolute left-4 top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs"
        >
          {label}
        </label>
        {icon && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            {icon}
          </div>
        )}
      </div>
    )
  }
  
  