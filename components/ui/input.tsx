import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        'h-10 rounded-lg border border-black/10 bg-white px-3 text-base transition placeholder:text-black/50',
        'focus-visible:border-black/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black focus-visible:ring-0',
        className
      )}
      {...props}
    />
  );
}
