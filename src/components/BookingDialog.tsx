import { useState } from 'react';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

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
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, form_type: 'booking' }),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      if (data.status === 'success') {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', service: '', notes: '' });
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
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Book Your Service</DialogTitle>
          <DialogDescription>
            Fill out the form and we'll get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>

        {submitStatus === 'success' && (
          <div className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 text-green-600 border border-green-500/20">
            <CheckCircle className="w-5 h-5 shrink-0" />
            <span className="text-sm font-medium">Form submitted successfully!</span>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 text-destructive border border-destructive/20">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span className="text-sm font-medium">Failed to submit. Please try again.</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="input-glass"
            required
            disabled={isSubmitting}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="input-glass"
            required
            disabled={isSubmitting}
          />
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="input-glass"
            required
            disabled={isSubmitting}
          >
            <option value="">--Choose Service--</option>
            <option value="window">Window Cleaning</option>
            <option value="gutter">Gutter Cleaning</option>
            <option value="power">Power Washing</option>
          </select>
          <textarea
            placeholder="Additional Notes (optional)"
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="input-glass min-h-[80px] resize-none"
            disabled={isSubmitting}
            rows={3}
          />
          <button
            type="submit"
            className="btn-glow w-full py-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
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
