'use client';

import clsx from 'clsx';
import type { PropsWithChildren } from 'react';
import { useEffect, useRef } from 'react';
import React, { createContext, useContext, useState } from 'react';

type DropdownTriggerType = 'click' | 'hover';

type DropdownProps = {
  triggerType?: DropdownTriggerType;
  closeOnBlur?: boolean;
};

type DropdownTriggerProps = {
  triggerType?: DropdownTriggerType;
};

type DropdownListProps = {
  animation?: 'fade' | 'slide-down';
  className?: string;
};

type DropdownItemProps = {
  className?: string;
  onClick?: () => void;
};

type DropdownState = {
  open: boolean;
  triggerType: DropdownTriggerType;
  openList: () => void;
  closeList: () => void;
  toggleList: () => void;
};

export const DropdownContext = createContext<DropdownState | null>(null);

const Dropdown = ({
  children,
  triggerType = 'click',
  closeOnBlur = false,
}: PropsWithChildren<DropdownProps>) => {
  const [open, setOpen] = useState(false);

  const openList = () => {
    setOpen(true);
  };

  const closeList = () => {
    setOpen(false);
  };

  const toggleList = () => {
    if (open) {
      closeList();
    } else {
      openList();
    }
  };

  return (
    <DropdownContext.Provider value={{ open, triggerType, openList, closeList, toggleList }}>
      <div
        tabIndex={closeOnBlur ? 0 : undefined}
        style={{ position: 'relative' }}
        onMouseOver={triggerType === 'hover' ? openList : undefined}
        onMouseLeave={triggerType === 'hover' ? closeList : undefined}
        onBlur={triggerType === 'click' && closeOnBlur ? closeList : undefined}
      >
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

const DropdownTrigger = ({ children }: PropsWithChildren<DropdownTriggerProps>) => {
  const dropdownContext = useContext(DropdownContext);

  if (!dropdownContext) throw Error('Dropdown 안에서 호출해주세요.');

  const { triggerType, toggleList } = dropdownContext;

  return <div onClick={triggerType === 'click' ? toggleList : undefined}>{children}</div>;
};

const DropdownList = ({
  animation = 'fade',
  children,
  className,
}: PropsWithChildren<DropdownListProps>) => {
  const containerRef = useRef<HTMLUListElement>(null);
  const hideContentsRef = useRef<HTMLDivElement>(null);
  const dropdownContext = useContext(DropdownContext);

  if (!dropdownContext) throw Error('Dropdown 안에서 호출해주세요.');

  const { open } = dropdownContext;

  useEffect(() => {
    if (containerRef.current && hideContentsRef.current) {
      containerRef.current.style.height = open
        ? `${hideContentsRef.current.clientHeight}px`
        : '0px';
    }
  }, [open]);

  return (
    <ul
      ref={containerRef}
      className={clsx(
        animation === 'fade' &&
          `${open ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'} transition-opacity duration-75 ease-linear`,
        animation === 'slide-down' &&
          `${open ? 'opacity-100' : 'opacity-0'} transition-[height, opacity] h-0 origin-top duration-100 ease-linear`,
        className,
      )}
    >
      <div ref={hideContentsRef}>{children}</div>
    </ul>
  );
};

const DropdownItem = ({ children, className, onClick }: PropsWithChildren<DropdownItemProps>) => {
  const dropdownContext = useContext(DropdownContext);

  if (!dropdownContext) throw Error('Dropdown 안에서 호출해주세요.');

  const { closeList } = dropdownContext;

  const handleClick = () => {
    onClick?.();
    closeList();
  };

  return (
    <li className={clsx(className)} onClick={handleClick} onMouseDown={(e) => e.preventDefault()}>
      {children}
    </li>
  );
};

Dropdown.Trigger = DropdownTrigger;
Dropdown.List = DropdownList;
Dropdown.Item = DropdownItem;

export default Dropdown;
