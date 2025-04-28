import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 h-[64px] border-b border-b-neutral-300 bg-white px-10 py-4">
      <div className="flex h-full items-center justify-between">
        <h1 className="typo-h1 text-black">대시보드</h1>
        <div>우측 영역</div>
      </div>
    </header>
  );
};

export default Header;
