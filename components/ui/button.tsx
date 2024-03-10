'use client';

import { useFormStatus } from 'react-dom';
import { useI18n } from '@/locales/client';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loadingText?: string;
  size?: 'md' | 'sm';
  variant?: 'primary' | 'secondary';
}

export function Button({
  children,
  className,
  disabled,
  loadingText,
  size = 'md',
  variant = 'primary',
  ...props
}: ButtonProps) {
  const { pending } = useFormStatus();
  const t = useI18n();

  if (!loadingText) {
    loadingText = t('loading');
  }

  return (
    <button
      className={cn(
        'flex flex-row items-center justify-center gap-2 px-3 font-medium transition-colors',
        'focus-visible:border-black/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black focus-visible:ring-0',
        'disabled:border-black/10 disabled:bg-black/10 disabled:text-black/40',
        size === 'md' && 'h-10 rounded-[0.625rem] text-base',
        size === 'sm' && 'h-8 rounded-lg text-xs',
        variant === 'primary' &&
          'bg-black text-white selection:bg-white selection:text-black active:bg-black/90',
        variant === 'secondary' && 'border border-black/10 bg-white active:bg-black/5',
        className
      )}
      disabled={disabled || pending}
      {...props}
    >
      {pending ? loadingText : children}
    </button>
  );
}
