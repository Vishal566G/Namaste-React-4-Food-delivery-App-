const CartItems = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => {
        <div className="">This is Cart ItemList</div>;
      })}
    </div>
  );
};

export default CartItems;
