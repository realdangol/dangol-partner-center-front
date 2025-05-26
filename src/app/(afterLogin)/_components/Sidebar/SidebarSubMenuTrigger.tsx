import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';

import { DropdownContext } from '@/components/Dropdown/Dropdown';
import { ArrowDown } from '@/components/Icon';

import type { SidebarMenuType } from './types';

const SidebarSubMenuTrigger = (navigation: SidebarMenuType) => {
  const dropdownContext = useContext(DropdownContext);
  const pathname = usePathname();

  if (!dropdownContext) throw Error('Dropdown 안에서 호출해주세요.');

  const { open } = dropdownContext;

  return (
    <li
      className={clsx(
        'flex cursor-pointer items-center justify-between px-[30px] py-4 text-neutral-500',
        navigation.subMenu!.some((menu) => menu.href === pathname) && 'bg-brand-700 text-white',
      )}
    >
      <span>{navigation.title}</span>
      <span
        className={clsx(
          'transition-transform duration-100 ease-linear',
          open ? 'rotate-180' : 'rotate-0',
        )}
      >
        <ArrowDown />
      </span>
    </li>
  );
};

export default SidebarSubMenuTrigger;
