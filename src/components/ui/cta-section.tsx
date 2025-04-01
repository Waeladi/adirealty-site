
import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundClass?: string;
  children?: ReactNode;
  className?: string;
}

const CTASection = ({
  title,
  description,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
  backgroundClass = 'bg-adi-600',
  children,
  className
}: CTASectionProps) => {
  return (
    <section className={cn(backgroundClass, "py-12", className)}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white text-3xl font-bold mb-4">{title}</h2>
          <p className="text-white/90 mb-8">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-adi-600 hover:bg-gray-100">
              <a href={buttonLink}>{buttonText}</a>
            </Button>
            {secondaryButtonText && secondaryButtonLink && (
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <a href={secondaryButtonLink}>{secondaryButtonText}</a>
              </Button>
            )}
          </div>
          {children}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
