interface SvgDividerProps {
  variant?: "wave" | "curve" | "diagonal";
  flip?: boolean;
  className?: string;
}

export function SvgDivider({
  variant = "wave",
  flip = false,
  className = "",
}: SvgDividerProps) {
  const baseClasses = `w-full h-auto ${flip ? "scale-y-[-1]" : ""} ${className}`;

  if (variant === "wave") {
    return (
      <svg
        className={baseClasses}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (variant === "curve") {
    return (
      <svg
        className={baseClasses}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,0 Q600,120 1200,0 L1200,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (variant === "diagonal") {
    return (
      <svg
        className={baseClasses}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="0,0 1200,0 1200,120 0,120" fill="currentColor" />
      </svg>
    );
  }

  return null;
}
