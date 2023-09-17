import { toast } from 'react-hot-toast';

export const handleErrors = (error: any, feature: string) => {
  console.error(`Error in ${feature} feature`, error);
  toast.error(error.response.data.message || 'An error occurred');
};
