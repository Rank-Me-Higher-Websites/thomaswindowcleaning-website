import { createContext, useContext, useState, ReactNode } from 'react';
import { BookingDialog } from '@/components/BookingDialog';

interface BookingContextType {
  openBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) throw new Error('useBooking must be used within BookingProvider');
  return context;
};

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <BookingContext.Provider value={{ openBooking: () => setOpen(true) }}>
      {children}
      <BookingDialog open={open} onOpenChange={setOpen} />
    </BookingContext.Provider>
  );
};
