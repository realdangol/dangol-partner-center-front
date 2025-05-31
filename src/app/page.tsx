import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { dangolPathname } from '@/constants/pathname';

const HomePage = async () => {
  const cookie = await cookies();
  const refreshToken = cookie.get('refreshToken');

  redirect(refreshToken ? dangolPathname.dashboard : dangolPathname.login);
};

export default HomePage;
