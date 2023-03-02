import React, { useContext, useState } from 'react';
import { MdShoppingCart, MdLogout } from 'react-icons/md';
import SearchForm from './SearchForm';
import { StyledHeader } from './style';
import LogoKenzieBurguer from '../../assets/LogoKenzieBurguer.svg';

import { StyledContainer } from '../../styles/grid';

import CartModal from '../CartModal';
import { UserContext } from '../../providers/useContext/useContext';

const Header = () => {
  const { userLogout } = useContext(UserContext);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const handleOpenCartModal = () => {
    setIsCartModalOpen(true);
  };

  const handleCloseCartModal = () => {
    setIsCartModalOpen(false);
  };

  return (
    <StyledHeader>
      <StyledContainer containerWidth={1300}>
        <div className='flexGrid'>
          <img
            src={LogoKenzieBurguer}
            alt='Kenzie Burguer Logo'
            className='logo'
          />
          <nav className='nav' role='navigation'>
            <SearchForm />
            <div className='buttons'>
              <button type='button' onClick={handleOpenCartModal}>
                <MdShoppingCart size={28} />
              </button>
              <button onClick={userLogout} type='button'>
                <MdLogout size={28} />
              </button>
            </div>
          </nav>
        </div>
      </StyledContainer>
      {/* Renderiza o modal somente quando isCartModalOpen for true */}
      {isCartModalOpen ? <CartModal onClose={handleCloseCartModal} /> : null}
    </StyledHeader>
  );
};

export default Header;
