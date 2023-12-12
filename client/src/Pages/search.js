import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Search() {
  const { dispatch } = useDispatch();
  const { searchQuery } = useSelector((state) => state.product);
  const { product } = useSelector((state) => state.product);
  const filteredData = product.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchProduct());
  });

  return (
    <div>
      {filteredData.length
        ? filteredData.map((item) => (
            <div key={item._id}>
              <h5>{item.name}</h5>
            </div>
          ))
        : null}
    </div>
  );
}

export default Search;
