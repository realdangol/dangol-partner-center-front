'use client';

import React from 'react';

export interface TabItem {
  id: string;
  label: string;
  count?: number;
  disabled?: boolean;
}

interface TabsProps {
  items: TabItem[];
  activeTabId: string;
  onTabChange: (id: string) => void;
  variant?: 'depth1' | 'depth2';
  className?: string;
  tablistClassName?: string;
  tabClassName?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  activeTabId,
  onTabChange,
  variant = 'depth1',
  className = '',
  tablistClassName = '',
  tabClassName = '',
}) => {
  const handleClick = (id: string) => () => {
    if (!items.find((item) => item.id === id)?.disabled) {
      onTabChange(id);
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <ul
        role="tablist"
        className={`flex items-center overflow-x-auto scrollbar-hide ${
          variant === 'depth1' ? 'border-b border-neutral-300' : 'space-x-2 p-1'
        } ${tablistClassName}`}
      >
        {items.map((item) => {
          const isActive = item.id === activeTabId;
          const isDisabled = item.disabled ?? false;
          return (
            <li key={item.id} role="presentation" className={`flex-shrink-0 ${tabClassName}`}>
              <button
                role="tab"
                id={`tab-${item.id}`}
                aria-controls={`panel-${item.id}`}
                aria-selected={isActive}
                disabled={isDisabled}
                onClick={handleClick(item.id)}
                className={`transition-colors duration-150 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500
                    ${
                      variant === 'depth1'
                        ? 'typo-element1 relative flex h-[44px] min-w-[64px] items-center justify-center whitespace-nowrap px-4 '
                        : 'typo-body1-regular flex h-[30px] items-center whitespace-nowrap rounded-full px-4 border'
                    }
                    
                   
                    ${
                      isDisabled
                        ? 'cursor-not-allowed text-neutral-400'
                        : isActive
                          ? 'text-brand-700'
                          : 'text-neutral-600 hover:text-neutral-800'
                    }
                    ${
                      variant === 'depth1' && isActive && !isDisabled
                        ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-brand-700 after:content-['']"
                        : ''
                    }
                    ${variant === 'depth2' ? (isDisabled ? 'bg-neutral-200' : isActive ? 'bg-brand-700 text-white hover:text-neutral-100' : 'bg-transparent text-neutral-700 hover:bg-neutral-100') : ''}
                  `}
              >
                {item.label}
                {item.count !== undefined && (
                  <span
                    className={`typo-label ml-1 ${
                      isDisabled
                        ? 'text-neutral-300'
                        : isActive
                          ? 'text-brand-500'
                          : 'text-neutral-400'
                    }`}
                  >
                    {item.count}
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
