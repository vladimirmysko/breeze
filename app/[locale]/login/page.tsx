import type { Metadata } from 'next';
import { getI18n } from '@/locales/server';

import { UserPlusIcon, ArrowUpRightIcon } from '@heroicons/react/16/solid';
import { Header } from '@/components/header';
import { Logo } from '@/components/logo';
import { LocaleSwitcher } from '@/components/locale-switcher';
import { Link } from '@/components/ui/link';
import { Field } from '@/components/ui/field';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n();

  return {
    title: t('login.title'),
  };
}

export default async function LoginPage() {
  const t = await getI18n();

  return (
    <main className="relative flex min-h-svh flex-col items-stretch">
      <Header className="justify-between ">
        <Logo />
        <LocaleSwitcher />
      </Header>
      <form action="" className="m-auto flex w-full max-w-sm flex-col items-stretch gap-6">
        <div className="flex flex-col items-stretch gap-2">
          <h1 className="text-2xl font-semibold">{t('login.welcome_back')}</h1>
          <div className="flex flex-row items-baseline gap-1">
            <span className="text-xs text-black/60">{t('login.dont_have_an_account')}</span>
            <Link href="register">
              <span>{t('login.register')}</span>
              <UserPlusIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-stretch gap-4">
          <Field>
            <Label htmlFor="iin">{t('login.iin')}</Label>
            <Input
              className="tabular-nums"
              name="iin"
              id="iin"
              placeholder="000000000000"
              maxLength={12}
              pattern="[0-9]"
              required
            />
          </Field>
          <Field>
            <Label htmlFor="password">{t('login.password')}</Label>
            <Input name="password" id="password" placeholder="••••••••" type="password" required />
          </Field>
        </div>

        <Button type="submit" loadingText={t('login.entering')}>
          {t('login.enter')}
        </Button>

        <div className="flex flex-row items-baseline gap-1">
          <span className="text-xs text-black/60">{t('login.forgot_password')}</span>
          <Link href="forgot">
            <span>{t('login.reset_password')}</span>
            <ArrowUpRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </form>
    </main>
  );
}
