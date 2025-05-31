import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { dangolPathname } from '@/constants/pathname';

const checkTokenValidity = async (refreshToken: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/validate-token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refreshToken }),
  });

  if (!response.ok) {
    redirect(dangolPathname.login);
  }
};

const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const withAuthComponent = async (props: P) => {
    const cookie = await cookies();
    const refreshToken = cookie.get('refreshToken');

    if (!refreshToken) redirect(dangolPathname.login);

    await checkTokenValidity(refreshToken.value);

    return <WrappedComponent {...props} accessToken="wewew" />;
  };

  return withAuthComponent;
};

export default withAuth;
