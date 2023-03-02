import { StyledShopPage } from './style';

import Header from '../../components/Header';
import ProductList from '../../components/ProductList';

import { StyledContainer } from '../../styles/grid';
import CartModal from '../../components/CartModal';

const ShopPage = () => (
  <StyledShopPage>
    <Header />
    <main>
      <StyledContainer containerWidth={1300}>
        <ProductList />
      </StyledContainer>
    </main>
  </StyledShopPage>
);

export default ShopPage;
