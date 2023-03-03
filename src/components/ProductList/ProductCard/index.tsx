import React, { useContext } from 'react';
import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { CartContext } from '../../../providers/useContext/CartContext';
import { CarrinhoContext } from '../../../providers/useContext/Cart';
import { iProducts } from '../../../providers/useContext/@types';

export const ProductCard = () => {
  const { products } = useContext(CartContext);
  const { cart, setCart } = useContext(CarrinhoContext);

  const handleAddToCart = (item: iProducts) => {
    setCart([...cart, item]);
  };

  return (
    <>
      {products.map((item) => {
        const { id, name, category, img, price } = item;

        return (
          <StyledProductCard key={id}>
            <div className='imageBox'>
              <img src={img} alt={name} />
            </div>
            <div className='content'>
              <StyledTitle tag='h3' $fontSize='three'>
                {name}
              </StyledTitle>
              <StyledParagraph className='category'>{category}</StyledParagraph>
              <StyledParagraph className='price'>R$: {price}</StyledParagraph>
              <StyledButton
                onClick={() => {
                  handleAddToCart(item);
                }}
                $buttonSize='medium'
                $buttonStyle='green'
              >
                Adicionar
              </StyledButton>
            </div>
          </StyledProductCard>
        );
      })}
    </>
  );
};

export default ProductCard;
