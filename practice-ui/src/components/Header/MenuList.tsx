import React from 'react';

export type MenuProps = {
  id: number;
  label: string;
  routing: string;
};

const MenuList: React.FC<MenuProps> = (props): JSX.Element => {
  const { label, routing } = props;

  return (
    <ul className="navbar-nav animation">
      <li className="nav-item me-xl-4">
        <a className="nav-link" href={`#${routing}`}>
          {label}
        </a>
      </li>
    </ul>
  );
};

export default MenuList;
