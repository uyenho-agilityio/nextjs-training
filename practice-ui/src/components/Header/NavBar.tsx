import React from 'react';
import MenuList, { MenuProps } from './MenuList';
import { BtnVariants, ImgVariants } from '~enums/variant';
import { Button, Logo, Image } from '~components/commons';
import { LOGO_URL, BRAND_URL, MENU_ICON_URL, MENU_LIST, NAV_BTN } from '~constants/header';

type NavProps = {};

const NavBar: React.FC<NavProps> = (): JSX.Element => {
  const menuList = MENU_LIST.map((item: MenuProps): JSX.Element => {
    return <MenuList key={item.id} {...item} />;
  });

  return (
    <>
      <nav className="container navbar bg-nav-color fixed-top  d-xl-flex fw-light pt-3 pt-xl-0" style={{ height: 70 }}>
        <div className="d-flex align-items-center">
          {/* Logos */}
          <Logo
            logoUrl={LOGO_URL}
            className={'me-2'}
            logoName={'navbar-logo'}
            brandUrl={BRAND_URL}
            brandName={'navbar-brand'}
          />

          {/* Menu Icon */}
          <button
            className="navbar-toggler border-0 bg-transparent d-flex d-xl-none ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menuList"
          >
            <Image imageUrl={MENU_ICON_URL} alt="menu-icon" variant={ImgVariants.Icon} />
          </button>
        </div>

        {/* Show menu list when clicking menu icon for Mobile & Tablet devices */}
        <div className="collapse navbar-collapse d-xl-none mt-3" id="menuList">
          {menuList}
        </div>

        {/* Menu List for Desktop device */}
        <div className="d-none d-xl-flex align-items-center ms-auto">
          {menuList}
          <Button title={NAV_BTN.SIGN_IN} variant={BtnVariants.Outline} className="me-4" />
          <Button title={NAV_BTN.SIGN_UP} variant={BtnVariants.Primary} />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
