import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { forwardRef } from "react";

interface MotionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  children: React.ReactNode;
}

export const MotionButton = forwardRef<HTMLButtonElement, MotionButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Button
          ref={ref}
          className={`transition-all duration-200 ${className}`}
          {...props}
        >
          {children}
        </Button>
      </motion.div>
    );
  }
);

MotionButton.displayName = "MotionButton";
