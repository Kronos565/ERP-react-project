import React, { useContext, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { CloseButton } from "react-bootstrap";
import { MyContext } from "../../context/MyContext";

export default function ProductManagement() {
  const { products, setProducts } = useContext(MyContext);

  // this state are using handile form for edit product and create new product.
  const [productIdForEdit, setProductIdForEdit] = useState(null);
  const [nameText, setNameText] = useState("");
  const [categoryText, setCategoryText] = useState("");
  const [priceInput, setPriceInput] = useState(null);
  const [qtyInput, setQtyInput] = useState(null);

  // const [selectedData, setSelectedData] = useState([]);

  // this state and fuction using to show popup for create new product.
  const [isOpenPopupForNew, setIsOpenPopupForNew] = useState(false);

  const togglePopupForNew = () => {
    setIsOpenPopupForNew(!isOpenPopupForNew);
  };

  // this state and fuction using to show popup for edit product.
  const [isOpenPopupForEdit, setIsOpenPopupForEdit] = useState(false);

  const togglePopup = () => {
    setIsOpenPopupForEdit(!isOpenPopupForEdit);
  };

  const handileUpdate = (data) => {
    console.log("data", data);
    setProductIdForEdit(data.id);
    setNameText(data.name);
    setCategoryText(data.category);
    setPriceInput(data.price);
    setQtyInput(data.quantity);
    togglePopup();
  };

  const handileCloseForNewProduct = () => {
    setNameText("");
    setCategoryText("");
    setPriceInput(null);
    setQtyInput(null);
    setIsOpenPopupForNew(false);
  };

  const handileSubmitForNewProduct = () => {

    products.sort((a, b) => a.id - b.id);
    products.reverse();
    const findLastIndex = products[0].id;

    const newData = {
      id: findLastIndex + 1,
      name: nameText,
      price: priceInput,
      category: categoryText,
      quantity: qtyInput,
    };

    products.reverse();
    const copyArray = [...products];
    copyArray.push(newData);

    setProducts(copyArray);
    handileCloseForNewProduct();
  };

  const handileCloseForEditProduct = () => {
    setNameText("");
    setCategoryText("");
    setPriceInput(null);
    setQtyInput(null);
    setIsOpenPopupForEdit(false);
  };

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

  const handileDeleteProduct = (Id) => {
    // Filter out the product with the given Id
    const newData = products.filter((product) => product.id !== Id);
    // Update the products state with the new filtered array
    setProducts(newData);
    alert(`Deleted Product with ID: ${Id}`);
  };

  return (
    <div>
      <Navbar />

      <div className="m-5">
        {isOpenPopupForNew ? (
          <div className="d-flex align-items-center justify-content-center position-relative">
            <div className="position-absolute top-0 z-3 w-75 border border-2 rounded p-3 bg-light">
              <div>
                <div className="text-end">
                  <CloseButton onClick={handileCloseForNewProduct} />
                </div>
                <form className="p-3">
                  <div className="mb-3">
                    <label for="name" className="form-label">
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
                    <label for="category" className="form-label">
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
                      <label for="price" className="form-label">
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
                      <label for="quantity" className="form-label">
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
                  <div className="text-center">
                    <button
                      type="submit"
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

        {isOpenPopupForEdit ? (
          <div className="d-flex align-items-center justify-content-center position-relative">
            <div className="position-absolute top-0 z-3 w-75 border border-2 rounded p-3 bg-light">
              <div>
                <div className="text-end">
                  <CloseButton
                    onClick={() => {
                      handileCloseForEditProduct(false);
                    }}
                  />
                </div>
                <form className="p-3">
                  <div className="mb-3">
                    <label for="name" className="form-label">
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
                    <label for="category" className="form-label">
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
                      <label for="price" className="form-label">
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
                      <label for="quantity" className="form-label">
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
                  <div className="text-center">
                    <button
                      type="submit"
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

        <div className="text-end">
          <button className="btn btn-success my-4" onClick={togglePopupForNew}>
            Add Product
          </button>
        </div>
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
              <th className="bg-secondary rounded-top text-center" scope="col">
                Edit
              </th>
              <th className="bg-danger rounded-top text-center" scope="col">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td
                  role="button"
                  className="text-secondary text-center fs-5"
                  onClick={() => handileUpdate(product)}
                >
                  <FaEdit />
                </td>
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
