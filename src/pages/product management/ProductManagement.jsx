// Import necessary modules and components
import React, { useContext, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { CloseButton } from "react-bootstrap";
import { MyContext } from "../../context/MyContext";

// Product Management page component for handling products
export default function ProductManagement() {
  // Access products and setProducts from the context
  const { products, setProducts } = useContext(MyContext);

  // States for handling form inputs and popups
  const [productIdForEdit, setProductIdForEdit] = useState(null);
  const [nameText, setNameText] = useState("");
  const [categoryText, setCategoryText] = useState("");
  const [priceInput, setPriceInput] = useState(null);
  const [qtyInput, setQtyInput] = useState(null);

  // States and functions for handling popups for new product and edit product
  const [isOpenPopupForNew, setIsOpenPopupForNew] = useState(false);
  const [isOpenPopupForEdit, setIsOpenPopupForEdit] = useState(false);

  // Function to toggle the popup for creating a new product
  const togglePopupForNew = () => {
    setIsOpenPopupForNew(!isOpenPopupForNew);
  };

  // Function to close the popup for creating a new product
  const handileCloseForNewProduct = () => {
    setNameText("");
    setCategoryText("");
    setPriceInput(null);
    setQtyInput(null);
    setIsOpenPopupForNew(false);
  };

  // Function to submit the form for creating a new product
  const handileSubmitForNewProduct = () => {
    // Find the last index of products array
    products.sort((a, b) => a.id - b.id);
    products.reverse();
    const findLastIndex = products[0].id;

    // Create new product data
    const newData = {
      id: findLastIndex + 1,
      name: nameText,
      price: priceInput,
      category: categoryText,
      quantity: qtyInput,
    };

    // Reverse the products array and create a copy
    products.reverse();
    const copyArray = [...products];
    copyArray.push(newData);

    // Update the state with the modified products array
    setProducts(copyArray);
    handileCloseForNewProduct();
  };

  // Function to close the popup for editing a product
  const handileCloseForEditProduct = () => {
    setNameText("");
    setCategoryText("");
    setPriceInput(null);
    setQtyInput(null);
    setIsOpenPopupForEdit(false);
  };

  // Function to submit the form for editing a product
  const handileSubmitForEditProduct = () => {
    // Find the index of the product to be updated
    const productIndex = products.findIndex(
      (product) => product.id === productIdForEdit
    );

    // Make a copy of the products array
    const updatedProducts = [...products];

    // Modify the values of the product at the found index
    updatedProducts[productIndex] = {
      ...updatedProducts[productIndex],
      name: nameText,
      category: categoryText,
      price: priceInput,
      quantity: qtyInput,
    };

    // Update the state with the modified products array
    setProducts(updatedProducts);
    handileCloseForEditProduct();
  };

  // Function to handle updating product data for editing
  const handileUpdate = (data) => {
    setProductIdForEdit(data.id);
    setNameText(data.name);
    setCategoryText(data.category);
    setPriceInput(data.price);
    setQtyInput(data.quantity);
    setIsOpenPopupForEdit(true);
  };

  // Function to handle deleting a product
  const handileDeleteProduct = (Id) => {
    // Filter out the product with the given Id
    const newData = products.filter((product) => product.id !== Id);
    // Update the products state with the new filtered array
    setProducts(newData);
    alert(`Deleted Product with ID: ${Id}`);
  };

  return (
    <div>
      {/* Render the Navbar component for navigation */}
      <Navbar />

      <div className="m-5">
        {/* Popup for creating a new product */}
        {isOpenPopupForNew ? (
          <div className="d-flex align-items-center justify-content-center position-relative">
            <div className="position-absolute top-0 z-3 w-75 border border-2 rounded p-3 bg-light">
              <div>
                <div className="text-end">
                  <CloseButton onClick={handileCloseForNewProduct} />
                </div>
                <form className="p-3">
                  {/* Form fields for new product */}
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={nameText}
                      onChange={(e) => {
                        setNameText(e.target.value);
                      }}
                      id="name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="category" className="form-label">
                      Category
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={categoryText}
                      onChange={(e) => {
                        setCategoryText(e.target.value);
                      }}
                      id="category"
                    />
                  </div>
                  <div className="mb-3 row">
                    <div className="col-md-6">
                      <label htmlFor="price" className="form-label">
                        Price
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        value={priceInput}
                        onChange={(e) => {
                          setPriceInput(e.target.value);
                        }}
                        id="price"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="quantity" className="form-label">
                        Quantity
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        value={qtyInput}
                        onChange={(e) => {
                          setQtyInput(e.target.value);
                        }}
                        id="quantity"
                      />
                    </div>
                  </div>
                  {/* Submit button for new product */}
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handileSubmitForNewProduct}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        {/* Popup for editing an existing product */}
        {isOpenPopupForEdit ? (
          <div className="d-flex align-items-center justify-content-center position-relative">
            <div className="position-absolute top-0 z-3 w-75 border border-2 rounded p-3 bg-light">
              <div>
                <div className="text-end">
                  <CloseButton onClick={handileCloseForEditProduct} />
                </div>
                <form className="p-3">
                  {/* Form fields for editing product */}
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={nameText}
                      onChange={(e) => {
                        setNameText(e.target.value);
                      }}
                      id="name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="category" className="form-label">
                      Category
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={categoryText}
                      onChange={(e) => {
                        setCategoryText(e.target.value);
                      }}
                      id="category"
                    />
                  </div>
                  <div className="mb-3 row">
                    <div className="col-md-6">
                      <label htmlFor="price" className="form-label">
                        Price
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        value={priceInput}
                        onChange={(e) => {
                          setPriceInput(e.target.value);
                        }}
                        id="price"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="quantity" className="form-label">
                        Quantity
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        value={qtyInput}
                        onChange={(e) => {
                          setQtyInput(e.target.value);
                        }}
                        id="quantity"
                      />
                    </div>
                  </div>
                  {/* Submit button for editing product */}
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handileSubmitForEditProduct}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        {/* Button to trigger the popup for creating a new product */}
        <div className="text-end">
          <button className="btn btn-success my-4" onClick={togglePopupForNew}>
            Add Product
          </button>
        </div>

        {/* Table for displaying product data */}
        <div className="table-responsive">
          <table className="table border">
            <thead>
              <tr className="rounded-top">
                <th className="bg-primary rounded-top" scope="col">
                  ID
                </th>
                <th className="bg-primary rounded-top" scope="col">
                  Name
                </th>
                <th className="bg-primary rounded-top" scope="col">
                  Category
                </th>
                <th className="bg-primary rounded-top" scope="col">
                  Price
                </th>
                <th className="bg-primary rounded-top" scope="col">
                  Quantity
                </th>
                <th
                  className="bg-secondary rounded-top text-center"
                  scope="col"
                >
                  Edit
                </th>
                <th className="bg-danger rounded-top text-center" scope="col">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Map through products to display each row */}
              {products.map((product) => (
                <tr key={product.id}>
                  <th scope="row">{product.id}</th>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  {/* Button for editing a product */}
                  <td
                    role="button"
                    className="text-secondary text-center fs-5"
                    onClick={() => handileUpdate(product)}
                  >
                    <FaEdit />
                  </td>
                  {/* Button for deleting a product */}
                  <td
                    role="button"
                    className="text-danger text-center fs-5"
                    onClick={() => handileDeleteProduct(product.id)}
                  >
                    <MdDelete />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
