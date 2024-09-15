interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Component({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`bgwhite text-black rounded-2xl p-3 font-medium px-10 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
