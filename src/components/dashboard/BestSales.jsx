import React, { useContext } from "react";
import { AdminData } from "../../context/Context";

function BestSales() {
  const { products } = useContext(AdminData);

  return (
    <>
      <div className=" md:overflow-hidden overflow-x-scroll bg-white rounded">
        <table className=" min-w-full text-left text-sm text-gray-700 border border-gray-200">
          <caption className="text-gray-500 text-start font-bold py-5 px-2">
            Best sales
          </caption>
          <thead className="bg-gray-100 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Sold</th>
            </tr>
          </thead>
          <tbody className=" divide-y divide-gray-200 bg-white">
            {products.length > 0 ? (
              products.slice(0,4).map((product) => (
                <tr key={product.id}>
                  <td className="px-4 py-3">
                    <img
                      src={product.image}
                      alt="product image"
                      height="50px"
                      width="50px"
                    />
                  </td>
                  <td className="px-4 py-3">{product.name}</td>
                  <td className="px-4 py-3">
                    <span className=" text-green-600">{product.price} $</span>
                  </td>
                  <td className="px-4 py-3">
                    {product.sold ? product.sold : "-"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="text-2xl text-center py-5" colSpan="4">
                  No products available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default BestSales;
