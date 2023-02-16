import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Loading from '../../../components/Loading';
import '../AdminStyles/FeaturedAdmin.css'

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import products_schema from '../../../Schema/ProductsVal';
import { Link } from 'react-router-dom';

const FeaturedAdmin = () => {

  const [featured, setFeatured] = useState(null)
  const [value, setValue] = useState("")
  const [updatedExample, setUpdatedExample] = useState({});
  const [loading, setLoading] = useState(true);
  const URL = 'http://localhost:3070/featured';

  const [state, setState] = useState({
    image: "",
    brand: "",
    alcohol: "",
    appelation: "",
    size: "",
    price: "",
    kind: ""
  })

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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedExample({ ...updatedExample, [name]: value });
  };
  const handleUpdate = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:3070/featured${featured._id}`, updatedExample)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const searchData = (e) => {
    setValue(e.target.value)
  }
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3070/featured/${id}`)
    getData()
  }

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(products_schema),
  });
  const onSubmit = (data) => {
    console.log({ data });
    addData()
  };


  const getData = async () => {
    await axios.get(URL).then((resp) => setFeatured(resp.data));
    setLoading(false);

  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <>
      <div className="featuredAdmin-wrapper">
        <div className="container">
          <div className='featuredAdmin-search__wrapper'>
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
                featured?.filter(data => {
                  return value.trim().toLowerCase() === "" ? data : data.appelation.toLowerCase().includes(value.toLowerCase())
                })
                  .map(({ _id, image, brand, alcohol, appelation, size, price, kind }) => (
                    <tbody>
                      <tr>
                        <td>
                          <div className='image-wrapper'>
                            <img style={{ width: "100%", height: "100%" }} src={image} alt="" />
                          </div>
                        </td>
                        <td className='featured-td'>{brand}</td>
                        <td className='featured-td'>{alcohol}</td>
                        <td className='featured-td'>{appelation}</td>
                        <td className='featured-td'>{size}</td>
                        <td className='featured-td'>${price}</td>
                        <td className='featured-td'>{kind}</td>
                        <td className='featured-td'><button onClick={() => handleDelete(_id)} className='admin-btn delete-btn'>DELETE</button></td>
                        <td className='featured-td'><Link href='featuredupdate'><button className='admin-btn update-btn'>UPDATE</button></Link></td>
                      </tr>
                    </tbody>
                  ))
            }

          </table>

          <div className="featured-add__wrapper">
            <h2 className='add-products__h2'>Add Products</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='add-form'>
              <input name='image' value={state.image} {...register("image")} className='add-input' type="text" placeholder='image link' onChange={handleChange} />
              <p className='error-message'>{errors.image?.message}</p>

              <input name='brand' value={state.brand} {...register("brand")} className='add-input' type="text" placeholder='brand' onChange={handleChange} />
              <p className='error-message'>{errors.brand?.message}</p>

              <input name='alcohol' value={state.alcohol} {...register("alcohol")} className='add-input' type="text" placeholder='alcohol' onChange={handleChange} />
              <p className='error-message'>{errors.alcohol?.message}</p>

              <input name='appelation' value={state.appelation} {...register("appelation")} className='add-input' type="text" placeholder='appelation' onChange={handleChange} />
              <p className='error-message'>{errors.appelation?.message}</p>

              <input name='size' value={state.comment} {...register("size")} className='add-input' type="text" placeholder='size' onChange={handleChange} />
              <p className='error-message'>{errors.size?.message}</p>

              <input name='price' value={state.price} {...register("price")} className='add-input' type="text" placeholder='price' onChange={handleChange} />
              <p className='error-message'>{errors.price?.message}</p>

              <input name='kind' value={state.kind} {...register("kind")} className='add-input' type="text" placeholder='kind' onChange={handleChange} />
              <p className='error-message'>{errors.kind?.message}</p>

              <button className='add-btn'>ADD</button>
            </form>
          </div>

        </div>
      </div>

    </>
  )
}

export default FeaturedAdmin
