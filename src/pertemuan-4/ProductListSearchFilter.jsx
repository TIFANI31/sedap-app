import productData from "./products.json";
import { useState } from "react";

export default function ProductListSearchFilter() {
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
  });

  // Handle perubahan nilai input form
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const _selectedTag = dataForm.selectedTag.toLowerCase();

  const filteredProducts = productData.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(_searchTerm) ||
      product.description.toLowerCase().includes(_searchTerm);

    const matchesTag = _selectedTag ? product.tags.some(tag => tag.toLowerCase() === _selectedTag) : true;

    return matchesSearch && matchesTag;
  });

  const allTags = [...new Set(productData.flatMap((product) => product.tags))];

  return (
    <div className="p-8">
      <input
        type="text"
        name="searchTerm"
        placeholder="Search product..."
        className="w-full p-2 border border-gray-300 rounded mb-4"
        value={dataForm.searchTerm}
        onChange={handleChange}
      />

      <select
        name="selectedTag"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        value={dataForm.selectedTag}
        onChange={handleChange}
      >
        <option value="">All Tags</option>
        {allTags.map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
        {filteredProducts.map((item) => (
          <div key={item.id} className="border p-4 rounded-lg shadow-md bg-white">
            <h2 className="text-lg font-bold text-gray-800">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-blue-400 hover:text-blue-700">Brand: {item.brand}</p>
            <p className="text-gray-700">Price: ${item.price}</p>
            <p className="text-gray-500">Discount: {item.discountPercentage}%</p>
            <p className="text-gray-500">Stock: {item.stock}</p>
            <p className="text-gray-500">Rating:⭐ {item.rating}</p>
            

            <div className="mt-2 flex flex-wrap">
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
