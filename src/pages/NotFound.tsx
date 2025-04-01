
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Building } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <div className="flex justify-center mb-6">
          <Building size={64} className="text-adi-600" />
        </div>
        <h1 className="text-5xl font-bold mb-4 text-denver-900">404</h1>
        <p className="text-2xl font-medium text-denver-800 mb-6">Page Not Found</p>
        <p className="text-denver-600 mb-8 max-w-md mx-auto">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-adi-600 hover:bg-adi-700">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
