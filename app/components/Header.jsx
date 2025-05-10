import React from 'react';
import TopBar from './TopBar';
import Logo from './Logo';
import SearchBar from './SearchBar';
import HeaderIcons from './HeaderIcons';
import CategoryMenu from './CategoryMenu';

export default function Header() {
  return (
    <header className="w-full bg-white shadow flex flex-col">
      <TopBar />
      <div className="flex items-center justify-between px-8 py-4 border-b">
        <Logo />
        <SearchBar />
        <HeaderIcons />
      </div>
      <div className="flex px-8 py-2">
        <CategoryMenu />
      </div>
    </header>
  );
}