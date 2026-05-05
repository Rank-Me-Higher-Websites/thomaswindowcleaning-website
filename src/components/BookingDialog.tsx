import { useState } from 'react';
import { Loader2, CheckCircle, AlertCircle, CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { logLead } from '@/lib/leadLogger';

const WEBHOOK_URL = 'https://cdlagency.app.n8n.cloud/webhook/44b2b794-4536-4293-9233-8f8c869e321a';

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const BookingDialog = ({ open, onOpenChange }: BookingDialogProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: undefined as Date | undefined,
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    logLead({
      formType: 'booking_dialog',
      name: formData.name,
      phone: formData.phone,
      service: formData.service,
      preferredDate: formData.date ? format(formData.date, 'yyyy-MM-dd') : undefined,
      notes: formData.notes,
    });
    try {
      const payload = {
        ...formData,
        date: formData.date ? format(formData.date, 'yyyy-MM-dd') : '',
        form_type: 'booking',
        submittedAt: new Date().toISOString(),
      };
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      if (data.status === 'success') {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', service: '', date: undefined, notes: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md max-h-[95dvh] overflow-y-auto p-4 sm:p-6 gap-2">
        <DialogHeader className="space-y-0.5 pb-1">
          <DialogTitle className="text-base sm:text-lg font-bold">Book Your Service</DialogTitle>
          <DialogDescription className="text-xs sm:text-sm">
            Fill out the form and we'll get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>

        {submitStatus === 'success' && (
          <div className="flex items-center gap-2 p-2 rounded-lg bg-green-500/10 text-green-600 border border-green-500/20">
            <CheckCircle className="w-4 h-4 shrink-0" />
            <span className="text-xs font-medium">Form submitted successfully!</span>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="flex items-center gap-2 p-2 rounded-lg bg-destructive/10 text-destructive border border-destructive/20">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span className="text-xs font-medium">Failed to submit. Please try again.</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-2">
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="input-glass text-sm py-2"
            required
            disabled={isSubmitting}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="input-glass text-sm py-2"
            required
            disabled={isSubmitting}
          />
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="input-glass text-sm py-2"
            required
            disabled={isSubmitting}
          >
            <option value="">--Choose Service--</option>
            <option value="window">Window Cleaning</option>
            <option value="gutter">Gutter Cleaning</option>
            <option value="power">Power Washing</option>
          </select>
          <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                className={cn(
                  'input-glass w-full text-left flex items-center gap-2 text-sm py-2',
                  !formData.date && 'text-muted-foreground'
                )}
                disabled={isSubmitting}
              >
                <CalendarIcon className="w-4 h-4" />
                {formData.date ? format(formData.date, 'MM/dd/yyyy') : 'Preferred Date'}
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={formData.date}
                onSelect={(date) => setFormData({ ...formData, date: date })}
                disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <textarea
            placeholder="Additional Notes (optional)"
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="input-glass min-h-[60px] resize-none text-sm py-2"
            disabled={isSubmitting}
            rows={2}
          />
          <button
            type="submit"
            className="btn-glow w-full py-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Submitting...
              </>
            ) : (
              'Get Free Quote'
            )}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
