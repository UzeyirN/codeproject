// import { useState, useEffect } from "react";

// const initialState = {
//   image: "",
//   brand: "",
//   alcohol: "",
//   appelation: "",
//   size: "",
//   price: "",
//   kind: ""

// };
// const Add = () => {
//   const [formData, setFormData] = useState(initialState);
//   const [data, setData] = useState(null);
//   const [editMode, setEditMode] = useState(false);

//   const getData = async () => {
//     await fetch("http://localhost:3070/latest")
//       .then((res) => res.json())
//       .then((data) => setData(data))
//   };

//   const handleDelete = async (id) => {
//     await fetch(`http://localhost:3070/latest/${id}`, {
//       method: "DELETE",
//     });
//     getData();
//   };

//   const createData = async (e) => {
//     e.preventDefault();
//     await fetch(`http://localhost:3070/latest/`, {
//       method: editMode ? "PUT" : "POST",
//       body: JSON.stringify(formData),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     getData();
//     setEditMode(false);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleEdit = (item) => {
//     setFormData({
//       _id: item._id,
//       image: item.image,
//       brand: item.brand,
//       alcohol: item.alcohol,
//       appelation: item.appelation,
//       size: item.size,
//       price: item.price,
//       kind: item.kind,
//     });
//     setEditMode(true);
//   };

//   useEffect(() => {
//     getData();
//   }, []);


//   return (
//     <div id="Add">
//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             <form onSubmit={createData}>
//               <div className="form-group mb-3">
//                 <input
//                   type="text"
//                   name="image"
//                   placeholder="Image"
//                   className="form-control"
//                   onChange={handleChange}
//                   value={formData.image}
//                 />
//               </div>
//               <div className="form-group mb-3">
//                 <input
//                   type="text"
//                   name="brand"
//                   placeholder="brand"
//                   className="form-control"
//                   onChange={handleChange}
//                   value={formData.brand}
//                 />
//               </div>
//               <div className="form-group mb-3">
//                 <input
//                   type="text"
//                   name="alcohol"
//                   placeholder="alcohol"
//                   className="form-control"
//                   onChange={handleChange}
//                   value={formData.alcohol}
//                 />
//               </div>
//               <div className="form-group mb-3">
//                 <input
//                   type="text"
//                   name="appelation"
//                   placeholder="appelation"
//                   className="form-control"
//                   onChange={handleChange}
//                   value={formData.appelation}
//                 />
//               </div>
//               <div className="form-group mb-3">
//                 <input
//                   type="text"
//                   name="size"
//                   placeholder="size"
//                   className="form-control"
//                   onChange={handleChange}
//                   value={formData.size}
//                 />
//               </div>
//               <div className="form-group mb-3">
//                 <input
//                   type="text"
//                   name="price"
//                   placeholder="price"
//                   className="form-control"
//                   onChange={handleChange}
//                   value={formData.price}
//                 />
//               </div>
//               <div className="form-group mb-3">
//                 <input
//                   type="text"
//                   name="kind"
//                   placeholder="kind"
//                   className="form-control"
//                   onChange={handleChange}
//                   value={formData.kind}
//                 />
//               </div>
//               <button type="submit" className="btn btn-success w-100">
//                 {editMode ? "Update" : "Submit"}
//               </button>
//             </form>
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-12 justify-content-start align-items-start flex-column gap-3">
//             {data?.map((item) => (
//               <div
//                 key={item._id}
//                 className="p-3 border border-1 d-flex pe-5 text-start"
//                 style={{ maxWidth: 700, width: "100% " }}
//               >
//                 <img
//                   src={item.image}
//                   alt=""
//                   height={150}
//                   style={{ height: 150, width: 130, objectFit: "cover" }}
//                 />
//                 <div className="info ps-4">
//                   <h4>{item.brand}</h4>
//                   <h4>{item.appelation}</h4>
//                   <p>${item.price}</p>
//                   <p>{item.imgUrl}</p>
//                   <button
//                     className="btn btn-outline-danger my-2"
//                     onClick={() => handleDelete(item._id)}
//                   >
//                     Delete
//                   </button>
//                   <button
//                     className="btn btn-outline-warning my-2 ms-3"
//                     onClick={() => handleEdit(item)}
//                   >
//                     Edit
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Add;







// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// const EditEmployee = () => {
//   // state variables
//   const [id, idchange] = useState(0);
//   const [image, imagechange] = useState('');
//   const [brand, brandchange] = useState('');
//   const [appelation, appelationchange] = useState("");
//   const [price, pricechange] = useState("");
//   const { empid } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch('http://localhost:3070/latest/' + empid).then((res) => {
//       return res.json();
//     }).then((res) => {
//       // console.log(res);
//       idchange(res.id);
//       imagechange(res.image);
//       brandchange(res.brand);
//       appelationchange(res.appelation);
//       pricechange(res.price);
//     }).catch((err) => {
//       console.log(err.message);
//     })
//   }, []);

//   const handlesubmit = (e) => {
//     e.preventDefault();
//     const empobj = { id, image, brand, appelation, price };

//     // console.log(empobj);

//     fetch("http://localhost:3070/latest/" + id, {
//       method: "PUT",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(empobj)
//     }).then(() => {
//       //console.log("data added");
//       navigate(-1);
//     }).catch((err) => {
//       console.log(err.message);
//     })
//   }

//   return (
//     <div>
//       <form className="container" onSubmit={handlesubmit}>
//         <div className="row">
//           <div className="col-lg-6 offset-lg-3">
//             <h3>Add/Edit Employee</h3>
//             <div className="form-group">
//               <label>ID</label>
//               <input value={id} disabled="disabled" className="form-control"></input>
//             </div>
//             <div className="form-group">
//               <label>Image</label>
//               <input value={image} onChange={e => imagechange(e.target.value)} className="form-control" required></input>
//               {/* {image.length == 0 && <span className="errormessage"> Please enter the name</span>} */}
//             </div>
//             <div className="form-group">
//               <label>Brand</label>
//               <input value={brand} onChange={e => brandchange(e.target.value)} className="form-control" required></input>
//               {/* {brand.length == 0 && <span className="errormessage"> Please enter the Role</span>} */}
//             </div>
//             <div className="form-group">
//               <label>Appelation</label>
//               <input value={appelation} onChange={e => appelationchange(e.target.value)} className="form-control" ></input>

//             </div>
//             <div className="form-group">
//               <label>Price</label>
//               <input value={price} onChange={e => pricechange(e.target.value)} className="form-control" ></input>

//             </div>

//             <div className="form-group">
//               <br></br>
//               <button className="btn btn-success" type="submit">Submit</button>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default EditEmployee;




import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [state, setState] = useState({
    image: "",
    brand: "",
    alcohol: "",
    appelation: "",
    size: "",
    price: "",
    kind: ""
  });
  const [id, setId] = useState();

  const getData = async () => {
    const res = await axios.get("http://localhost:3070/latest");
    setProducts(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const addData = (e) => {
    e.preventDefault();

    if (!state.image || !state.brand || !state.alcohol || !state.appelation || !state.size || !state.price || !state.kind) return;

    axios.post("http://localhost:3070/latest", state);
    getData();
  };

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:3070/latest/${id}`);
    getData();
  };

  const handleEditClick = (data) => {
    setState({
      image: data.image,
      brand: data.brand,
      alcohol: data.alcohol,
      appelation: data.appelation,
      size: data.size,
      price: data.price,
      kind: data.kind,
    });
    setId(data._id);

  };

  console.log(id);

  const updateData = async (dataId) => {

    await axios.put(`http://localhost:3070/latest/${dataId}`, state);
    getData();
    console.log(dataId);

  };

  return (
    <>
      <form onSubmit={addData}>
        <input
          name="image"
          type="text"
          value={state.image}
          placeholder="image"
          onChange={handleChange}
        />
        <input
          name="brand"
          type="text"
          value={state.brand}
          placeholder="brand"
          onChange={handleChange}
        />
        <input
          name="alcohol"
          type="text"
          value={state.alcohol}
          placeholder="alcohol"
          onChange={handleChange}
        />
        <input
          name="appelation"
          type="text"
          value={state.appelation}
          placeholder="appelation"
          onChange={handleChange}
        />
        <input
          name="size"
          type="text"
          value={state.size}
          placeholder="size"
          onChange={handleChange}
        />
        <input
          name="price"
          type="text"
          value={state.price}
          placeholder="price"
          onChange={handleChange}
        />
        <input
          name="kind"
          type="text"
          value={state.kind}
          placeholder="kind"
          onChange={handleChange}
        />
        <button>add</button>
      </form>
      <button onClick={() => updateData(id)}>update</button>

      {products?.map((prod) => (
        <li key={prod.id}>
          <span>{prod.id}</span>
          <p>{prod.image}</p>
          <p style={{ margin: 20 }}>{prod.brand}</p>
          <p style={{ margin: 20 }}>{prod.appelation}</p>
          <p style={{ margin: 20 }}>{prod.alcohol}</p>
          <p style={{ margin: 20 }}>{prod.size}</p>
          <p style={{ margin: 20 }}>{prod.price}</p>
          <p style={{ margin: 20 }}>{prod.kind}</p>
          <button onClick={() => deleteData(prod._id)}>delete</button>
          <button onClick={() => handleEditClick(prod)}>edit</button>
        </li>
      ))}
    </>
  );
};

export default App;
