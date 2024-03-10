import LinkBase from 'next/link';
import { cn } from '@/lib/utils';

interface LinkProps extends React.ComponentPropsWithoutRef<typeof LinkBase> {}

export function Link({ className, ...props }: LinkProps) {
  return (
    <LinkBase
      className={cn(
        'flex flex-row items-center gap-1 border-b border-black/0 text-xs font-medium hover:border-black',
        className
      )}
      {...props}
    />
  );
}
