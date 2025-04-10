import * as Switch from '@radix-ui/react-switch';

interface PricingToggleProps {
  billingPeriod: string;
  setBillingPeriod: (period: string) => void;
}

export const PricingToggle = ({ billingPeriod, setBillingPeriod }: PricingToggleProps) => {
  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      <span className={`text-lg ${billingPeriod === 'monthly' ? 'text-axima-blue' : 'text-white/70'}`}>Monthly</span>
      <Switch.Root
        checked={billingPeriod === 'yearly'}
        onCheckedChange={(checked) => setBillingPeriod(checked ? 'yearly' : 'monthly')}
        className="w-[42px] h-[24px] bg-black/40 rounded-full relative data-[state=checked]:bg-axima-blue outline-none cursor-pointer"
      >
        <Switch.Thumb className="block w-[20px] h-[20px] bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
      </Switch.Root>
      <span className={`text-lg ${billingPeriod === 'yearly' ? 'text-axima-blue' : 'text-white/70'}`}>Yearly</span>
    </div>
  );
};