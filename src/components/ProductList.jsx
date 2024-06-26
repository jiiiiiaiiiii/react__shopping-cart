
const ProductList = ({ productItems, toggleCart, cartItems, setCartItems }) => {

  const handleAddProduct = (idx) => {
    // 장바구니에 상품 추가
    const currentProduct = productItems[idx];  // 현재 상품의 정보(위치)

    // 현재 상품이 장바구니에 있는지 확인
    const checkedIdx = cartItems.findIndex(
      (item) => item.id === currentProduct.id);

    if (checkedIdx === -1) {
      // 장바구니에 없는 경우
      // const newCartItems = [...cartItems, { ...currentProduct, count: 1 }];
      // setCartItems(newCartItems);
      setCartItems((prev) => {
        return [...prev, { ...currentProduct, count: 1 }];
      });
    } else {
      // 장바구니에 있는 경우 상품 개수만 증가
      const newCartItems = [...cartItems];
      newCartItems[idx].count += 1;
      setCartItems(newCartItems);
    }
    // 장바구니 토글
    toggleCart();
  };

  return productItems.map(({ id, name, imgSrc, price }, idx) => (
    <article key={id} onClick={() => handleAddProduct(idx)} >
      <div className="rounded-lg overflow-hidden border-2 relative">
        <img
          src={imgSrc}
          className="object-center object-cover"
          alt={name}
        />
        <div className="hover:bg-sky-500 w-full h-full absolute top-0 left-0 opacity-90 transition-colors ease-linear duration-75">
          <div
            data-productid={id}
            className="hover:opacity-100 opacity-0 w-full h-full flex justify-center items-center text-xl text-white font-bold cursor-pointer"
          >
            Add to Cart
          </div>
        </div>
      </div>
      <h3 className="mt-4 text-gray-700">{name}</h3>
      <p className="mt-1 text-lg font-semibold text-gray-900">
        {price.toLocaleString()}  {/* 숫자변형후 3자리마다 콤마 적용 */}
      </p>
    </article>
  ));

};

export default ProductList;