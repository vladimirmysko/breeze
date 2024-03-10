import { cn } from '@/lib/utils';

interface LogoProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {}

export function Logo({ className, ...props }: LogoProps) {
  return (
    <div className={cn('font-display text-lg font-semibold leading-none', className)} {...props}>
      breeze.
    </div>
  );
}
