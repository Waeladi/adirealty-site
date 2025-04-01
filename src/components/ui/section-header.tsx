
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeader = ({ 
  title, 
  subtitle, 
  centered = false, 
  className 
}: SectionHeaderProps) => {
  return (
    <div className={cn(
      centered ? "text-center" : "",
      "mb-10",
      className
    )}>
      <h2 className="text-3xl font-bold text-denver-900 mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-denver-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
