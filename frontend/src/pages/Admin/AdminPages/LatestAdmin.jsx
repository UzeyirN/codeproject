// import React, { useState } from "react";
// import axios from "axios";
// import { useEffect } from "react";

// const App = () => {
//   const [products, setProducts] = useState([]);
//   const [state, setState] = useState({
//     image: "",
//     brand: "",
//     alcohol: "",
//     appelation: "",
//     size: "",
//     price: "",
//     kind: ""
//   });
//   const [id, setId] = useState();

//   const getData = async () => {
//     const res = await axios.get("http://localhost:3070/latest");
//     setProducts(res.data);
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   const handleChange = (e) => {
//     setState({ ...state, [e.target.name]: e.target.value });
//   };

//   const addData = (e) => {
//     e.preventDefault();

//     if (!state.image || !state.brand || !state.alcohol || !state.appelation || !state.size || !state.price || !state.kind) return;

//     axios.post("http://localhost:3070/latest", state);
//     getData();
//   };

//   const deleteData = async (id) => {
//     await axios.delete(`http://localhost:3070/latest/${id}`);
//     getData();
//   };

//   const handleEditClick = (data) => {
//     setState({
//       image: data.image,
//       brand: data.brand,
//       alcohol: data.alcohol,
//       appelation: data.appelation,
//       size: data.size,
//       price: data.price,
//       kind: data.kind,
//     });
//     setId(data._id);

//   };

//   console.log(id);

//   const updateData = async (dataId) => {

//     await axios.put(`http://localhost:3070/latest/${dataId}`, state);
//     getData();
//     console.log(dataId);

//   };

//   return (
//     <>
//       <form onSubmit={addData}>
//         <input
//           name="image"
//           type="text"
//           value={state.image}
//           placeholder="image"
//           onChange={handleChange}
//         />
//         <input
//           name="brand"
//           type="text"
//           value={state.brand}
//           placeholder="brand"
//           onChange={handleChange}
//         />
//         <input
//           name="alcohol"
//           type="text"
//           value={state.alcohol}
//           placeholder="alcohol"
//           onChange={handleChange}
//         />
//         <input
//           name="appelation"
//           type="text"
//           value={state.appelation}
//           placeholder="appelation"
//           onChange={handleChange}
//         />
//         <input
//           name="size"
//           type="text"
//           value={state.size}
//           placeholder="size"
//           onChange={handleChange}
//         />
//         <input
//           name="price"
//           type="text"
//           value={state.price}
//           placeholder="price"
//           onChange={handleChange}
//         />
//         <input
//           name="kind"
//           type="text"
//           value={state.kind}
//           placeholder="kind"
//           onChange={handleChange}
//         />
//         <button>add</button>
//       </form>
//       <button onClick={() => updateData(id)}>update</button>

//       {products?.map((prod) => (
//         <li key={prod.id}>
//           <span>{prod.id}</span>
//           <p>{prod.image}</p>
//           <p style={{ margin: 20 }}>{prod.brand}</p>
//           <p style={{ margin: 20 }}>{prod.appelation}</p>
//           <p style={{ margin: 20 }}>{prod.alcohol}</p>
//           <p style={{ margin: 20 }}>{prod.size}</p>
//           <p style={{ margin: 20 }}>{prod.price}</p>
//           <p style={{ margin: 20 }}>{prod.kind}</p>
//           <button onClick={() => deleteData(prod._id)}>delete</button>
//           <button onClick={() => handleEditClick(prod)}>select</button>
//         </li>
//       ))}
//     </>
//   );
// };

// export default App;




import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Loading from '../../../components/Loading';
import '../AdminStyles/LatestAdmin.css'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import products_schema from '../../../Schema/ProductsVal';

const LatestAdmin = () => {

  const [latest, setLatest] = useState(null)
  const [value, setValue] = useState("")
  const [loading, setLoading] = useState(true);
  const URL = 'http://localhost:3070/latest';

  const [state, setState] = useState({
    image: "",
    brand: "",
    alcohol: "",
    appelation: "",
    size: "",
    price: null,
    kind: ""
  })
  const [id, setId] = useState();


  //!get data
  const getData = async () => {
    await axios.get(URL).then((resp) => setLatest(resp.data));
    setLoading(false);
  }

  //!add data
  const addData = () => {
    axios.post(URL, state);

    setState({
      image: "",
      brand: "",
      alcohol: "",
      appelation: "",
      size: "",
      price: "",
      kind: ""
    })

  }

  //!form validation
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(products_schema),
  });
  const onSubmit = (data) => {
    console.log({ data });
    addData()
  };

  const searchData = (e) => {
    setValue(e.target.value)
  }
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3070/latest/${id}`)
    getData();
    window.alert("Are you sure you want to delete this item?");

  }

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

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

  const updateData = async (dataId) => {

    await axios.put(`http://localhost:3070/latest/${dataId}`, state);
    getData();

    setState({
      image: "",
      brand: "",
      alcohol: "",
      appelation: "",
      size: "",
      price: "",
      kind: ""
    })

  };

  useEffect(() => {
    getData()
  }, [])


  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [])


  return (
    <>
      <div className="latestAdmin-wrapper">
        <div className="container">
          <div className='latestAdmin-search__wrapper'>
            <p className='search-p lato-font'>SEARCH PRODUCTS</p>
            <input onChange={searchData} className='search-input' type="text" />
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Brand</th>
                <th scope="col">Alcohol</th>
                <th scope="col">Appelation</th>
                <th scope="col">Size</th>
                <th scope="col">Price</th>
                <th scope="col">Kind</th>
                <th scope="col">DELETE</th>
                <th scope="col">UPDATE</th>
              </tr>
            </thead>
            {
              loading ? <Loading /> :
                latest?.filter(data => {
                  return value.trim().toLowerCase() === "" ? data : data.appelation.toLowerCase().includes(value.toLowerCase())
                })
                  .map((item) => (
                    <tbody>
                      <tr>
                        <td>
                          <div className='image-wrapper' key={item._id}>
                            <img style={{ width: "100%", height: "100%" }} src={item.image} alt="" />
                          </div>
                        </td>
                        <td className='latest-td'>{item.brand}</td>
                        <td className='latest-td'>{item.alcohol}</td>
                        <td className='latest-td'>{item.appelation}</td>
                        <td className='latest-td'>{item.size}</td>
                        <td className='latest-td'>${item.price}</td>
                        <td className='latest-td'>{item.kind}</td>
                        <td className='latest-td'><button onClick={() => handleDelete(item._id)} className='admin-btn delete-btn'>DELETE</button></td>
                        <td className='latest-td'><button onClick={() => handleEditClick(item)} className='admin-btn update-btn'>SELECT</button></td>
                      </tr>
                    </tbody>
                  ))
            }

          </table>

          <div className="latest-add__wrapper">
            <h2 className='add-products__h2'>Add and Update Products</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='add-form'>
              <input name='image' value={state.image} {...register("image")} className='add-input' type="text" placeholder='image link' onChange={handleChange} />
              <p className='error-message'>{errors.image?.message}</p>

              <input name='brand' value={state.brand} {...register("brand")} className='add-input' type="text" placeholder='brand' onChange={handleChange} />
              <p className='error-message'>{errors.brand?.message}</p>

              <input name='alcohol' value={state.alcohol} {...register("alcohol")} className='add-input' type="text" placeholder='alcohol' onChange={handleChange} />
              <p className='error-message'>{errors.alcohol?.message}</p>

              <input name='appelation' value={state.appelation} {...register("appelation")} className='add-input' type="text" placeholder='appelation' onChange={handleChange} />
              <p className='error-message'>{errors.appelation?.message}</p>

              <input name='size' value={state.size} {...register("size")} className='add-input' type="text" placeholder='size' onChange={handleChange} />
              <p className='error-message'>{errors.size?.message}</p>

              <input name='price' value={state.price} {...register("price")} className='add-input' type="number" placeholder='price' onChange={handleChange} />
              <p className='error-message'>{errors.price?.message}</p>

              <input name='kind' value={state.kind} {...register("kind")} className='add-input' type="text" placeholder='kind' onChange={handleChange} />
              <p className='error-message'>{errors.kind?.message}</p>

              <button className='add-btn'>ADD</button>
              <button className='add-btn' onClick={() => updateData(id)}>UPDATE</button>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default LatestAdmin









