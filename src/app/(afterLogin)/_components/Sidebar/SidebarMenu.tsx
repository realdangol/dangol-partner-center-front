'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Dropdown from '@/components/Dropdown/Dropdown';

import SidebarSubMenuTrigger from './SidebarSubMenuTrigger';
import type { SidebarMenuType } from './types';

const SidebarMenu = (navigation: SidebarMenuType) => {
  const pathname = usePathname();

  return navigation.subMenu ? (
    <Dropdown>
      <Dropdown.Trigger>
        <SidebarSubMenuTrigger {...navigation} />
      </Dropdown.Trigger>
      <Dropdown.List animation="slide-down">
        {navigation.subMenu.map((menu) => (
          <li key={menu.title}>
            <Link
              className={clsx(
                'flex justify-center px-[30px] py-4',
                pathname === menu.href ? 'text-brand-700' : 'text-neutral-500',
              )}
              href={menu.href}
            >
              <span className="min-w-[100px]">{menu.title}</span>
            </Link>
          </li>
        ))}
      </Dropdown.List>
    </Dropdown>
  ) : (
    <li>
      <Link
        className={clsx(
          'block px-[30px] py-4 text-neutral-500',
          pathname === navigation.href && 'bg-brand-700 text-white',
        )}
        href={navigation.href as string}
      >
        {navigation.title}
      </Link>
    </li>
  );
};

export default SidebarMenu;
