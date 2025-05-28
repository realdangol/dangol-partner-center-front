import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { dangolPathname } from '@/constants/pathname';

const checkTokenValidity = async (refreshToken: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/validate-token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken }),
    });

    return response.ok;
  } catch (error: unknown) {
    console.error(error);

    return false;
  }
};

const withGuest = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const WithGuestComponent = async (props: P) => {
    const cookie = await cookies();
    const refreshToken = cookie.get('refreshToken');

    if (refreshToken) {
      const isValid = await checkTokenValidity(refreshToken.value);

      redirect(isValid ? dangolPathname.dashboard : dangolPathname.logout);
    }

    return <WrappedComponent {...props} />;
  };

  return WithGuestComponent;
};

export default withGuest;
