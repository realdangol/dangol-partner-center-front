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

  if (response.ok) {
    redirect(dangolPathname.dashboard);
  }
};

const withGuest = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const WithGuestComponent = async (props: P) => {
    const cookie = await cookies();
    const refreshToken = cookie.get('refreshToken');

    if (refreshToken) {
      await checkTokenValidity(refreshToken.value);
    }

    return <WrappedComponent {...props} />;
  };

  return WithGuestComponent;
};

export default withGuest;
