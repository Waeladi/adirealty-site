
import { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  className 
}: ServiceCardProps) => {
  return (
    <Card className={cn("transition-all hover:shadow-md", className)}>
      <CardHeader className="space-y-1">
        <div className="text-adi-600 mb-2">
          {icon}
        </div>
        <CardTitle className="text-xl text-denver-800">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-denver-600">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
