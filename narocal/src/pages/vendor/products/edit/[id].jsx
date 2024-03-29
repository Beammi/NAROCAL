

import { useRouter } from "next/router"
import Image from "next/image"
import VendorNavBar from "@/components/vendors/VendorNavBar"

import Label from "@/components/Label"

import { useEffect, useState } from "react"
import { supabase } from "lib/supabaseClient"

export default function ProductPage() {
  const router = useRouter()
  const [productData, setProductData] = useState({})

  useEffect(() => {
    async function renderInformation() {
      const { data, error } = await supabase
        .from("Product")
        .select()
        .eq("id", router.query.id)
        
      if (error) {
        console.error(error)
      } else if (data && data[0]) {
        setProductData(data[0])
      }
    }
    if(router.query.id) {
      renderInformation()
    }
  }, [router.query.id])

  async function deleteProduct(event) {
    const { data, error } = await supabase
      .from("Product")
      .delete()
      .eq("id", router.query.id)
    if(data){
      alert("Delete")
    }
  }
  async function editProduct(event) {
    event.preventDefault()
    const updates = {
      ...productData,
      name: event.target.name.value,
      description: event.target.description.value,
      brand: event.target.brand.value,
      category: event.target.category.value,
      country: event.target.country.value,
      authorId: productData.authorId,
      price: event.target.price.value,
      subCategory: event.target.subCategory.value,
      city: event.target.city.value,
      model: event.target.model.value,
      gender: event.target.gender.value,
      code: event.target.code.value,
      color: event.target.color.value,
      image: productData.image,
    }

    const { error } = await supabase
      .from("Product")
      .update(updates)
      .eq("id", router.query.id)

    if (!error) {
      alert("Updated Complete")
      setProductData(updates)
    }
  }

  



  // return (
  //   <>
  //     <div className="bg-secondary h-max">
  //       <VendorNavBar></VendorNavBar>
  //       <form onSubmit={editProduct} className="form-widget h-max">
  //         {/* <div className="p-2 m-8 lg:m-20 lg:p-8 grid phone:gap-2 md:gap-6 md:grid-cols-2 phone:grid-cols-1 justify-items-stretch bg-background shadow-2xl rounded-2xl"> */}
  //         <div className="grid grid-cols-1 gap-2 justify-center p-2 m-8 justify-items-center bg-background shadow-2xl rounded-2xl items-center">
  //           <div className="md:place-self-center">
  //             <Label label="Name" labelId="name"></Label>
  //           </div>
  //           <div>
  //             <input
  //               id="name"
  //               className="input input-secondary w-full max-w-xs"
  //               type="text"
  //               required
  //               value={productData.name || ""}
  //               onChange={(e) => setProductData({...productData, name: e.target.value})}
  //             />
  //           </div>
  //           <div className="md:place-self-center">
  //             <Label label="Model" labelId="model"></Label>
  //           </div>
  //           <div>
  //             <input
  //               id="model"
  //               className="input input-secondary w-full max-w-xs"
  //               type="text"
  //               required
  //               value={productData.model || ""}
  //               onChange={(e) => setProductData({...productData, model: e.target.value})}
  //             />
  //           </div>

  //           <div className="md:place-self-center">
  //             <Label label="Description" labelId="description"></Label>
  //           </div>
  //           <div>
  //             <input
  //               id="description"
  //               className="input input-secondary w-full max-w-xs"
  //               type="text"
  //               value={productData.description || ""}
  //               onChange={(e) => setProductData({...productData, description: e.target.value})}
  //             />
  //           </div>
  //           <div className="md:place-self-center">
  //             <Label label="Brand" labelId="brand"></Label>
  //           </div>
  //           <div>
  //             <input
  //               id="brand"
  //               className="input input-secondary w-full max-w-xs"
  //               type="text"
  //               required
  //               value={productData.brand || ""}
  //               onChange={(e) => setProductData({...productData, brand: e.target.value})}              />
  //           </div>
  //           <div className="md:place-self-center">
  //             <Label label="Category" labelId="category"></Label>
  //           </div>
  //           <div>
  //             <input
  //               id="category"
  //               className="input input-secondary w-full max-w-xs"
  //               type="text"
  //               required
  //               value={productData.category || ""}
  //               onChange={(e) => setProductData({...productData, category: e.target.value})}              />
  //           </div>
  //           <div className="md:place-self-center">
  //             <Label label="Sub-Category" labelId="subCategory"></Label>
  //           </div>
  //           <div>
  //             <input
  //               id="subCategory"
  //               className="input input-secondary w-full max-w-xs"
  //               type="text"
  //               value={productData.subCategory || ""}
  //               onChange={(e) => setProductData({...productData, subCategory: e.target.value})}              />
  //           </div>
  //           <div className="md:place-self-center">
  //             <Label label="Country" labelId="country"></Label>
  //           </div>
  //           <div>
  //             <input
  //               id="country"
  //               className="input input-secondary w-full max-w-xs"
  //               type="text"
  //               required
  //               value={productData.country || ""}
  //               onChange={(e) => setProductData({...productData, country: e.target.value})}              />
  //           </div>
  //           <div className="md:place-self-center">
  //             <Label label="City" labelId="city"></Label>
  //           </div>
  //           <div>
  //             <input
  //               id="city"
  //               className="input input-secondary w-full max-w-xs"
  //               type="text"
  //               value={productData.city || ""}
  //               onChange={(e) => setProductData({...productData, city: e.target.value})}              />
  //           </div>
  //           <div className="md:place-self-center">
  //             <Label label="Color" labelId="color"></Label>
  //           </div>
  //           <div>
  //             <input
  //               id="color"
  //               className="input input-secondary w-full max-w-xs"
  //               type="text"
  //               value={productData.color || ""}
  //               onChange={(e) => setProductData({...productData, color: e.target.value})}              />
  //           </div>
  //           <div className="md:place-self-center">
  //             <Label label="Gender" labelId="gender"></Label>
  //           </div>
  //           <div>
  //             <input
  //               id="gender"
  //               className="input input-secondary w-full max-w-xs"
  //               type="text"
  //               value={productData.gender || ""}
  //               onChange={(e) => setProductData({...productData, gender: e.target.value})}              />
  //           </div>
  //           <div className="md:place-self-center">
  //             <Label label="Code" labelId="code"></Label>
  //           </div>
  //           <div>
  //             <input
  //               id="code"
  //               className="input input-secondary w-full max-w-xs"
  //               type="text"
  //               value={productData.code || ""}
  //               onChange={(e) => setProductData({...productData, code: e.target.value})}              />
  //           </div>
  //           <div className="md:place-self-center">
  //             <Label label="Price" labelId="price"></Label>
  //           </div>
  //           <div>
  //             <input
  //               id="price"
  //               className="input input-secondary w-full max-w-xs"
  //               type="number"
  //               step="any"
  //               required
  //               value={productData.price || ""}
  //               onChange={(e) => setProductData({...productData, price: e.target.value})}              />
  //           </div>
  //           <div className="md:place-self-center">
  //             <Label label="Picture File" labelId="price"></Label>
  //           </div>
  //           <div>
  //             {/* <input
  //               id="price"
  //               className="input input-secondary w-full max-w-xs"
  //               type="number"
  //               step="any"
  //               required
  //               value={productData.price || ""}
  //               onChange={(e) => setProductData({...productData, price: e.target.value})}              /> */}
  //             <button className="btn bg-black">Choose file</button>
  //           </div>
  //           <div className="md:place-self-end space-x-2">
  //             <button
  //               className="btn btn-outline btn-secondary md:text-base phone:text-xs"
  //               type="submit"
  //             >
  //               Update
  //             </button>
              
  //           </div>
  //           <button id="delete"
  //               className="btn btn-outline btn-secondary md:text-base phone:text-xs"
  //               onClick={deleteProduct}
  //             >
  //               Delete
  //             </button>
            
  //         </div>
  //       </form>
        
  //     </div>
  //   </>
  // )


  return (
    <div className="flex flex-col items-center bg-secondary">
      <VendorNavBar></VendorNavBar>
      <h2 className="text-3xl font-bold text-center mt-10 mb-8">Edit product</h2>
      <form
        className="flex flex-col items-center font-sans bg-background w-fit rounded-xl"
        onSubmit={editProduct}
      >
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-col items-center gap-5 w-full px-72">
            <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-items-stretch items-center w-full mx-24">
              <label className="justify-self-start">Name</label>
              <div className="justify-self-end select-text inline-flex text-center bg-none text-black font-semibold text-md rounded-lg  px-4 py-3 w-full max-w-xs">
                <input
                  id="name"
                  className="input input-secondary w-full max-w-xs"
                  type="text"
                  required
                  value={productData.name || ""}
                  onChange={(e) => setProductData({...productData, name: e.target.value})}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-items-stretch items-center w-full mx-24">
              <label className="justify-self-start">Brand</label>
              <div className="justify-self-end select-text inline-flex text-center bg-none text-black font-semibold text-md rounded-lg  px-4 py-3 w-full max-w-xs">
                <input
                id="brand"
                className="input input-secondary w-full max-w-xs"
                type="text"
                required
                value={productData.brand || ""}
                onChange={(e) => setProductData({...productData, brand: e.target.value})}              />
              </div>
            </div>

            <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-items-stretch items-center w-full mx-24">
              <label className="justify-self-start">Model</label>
              <div className="justify-self-end select-text inline-flex text-center bg-none text-black font-semibold text-md rounded-lg  px-4 py-3 w-full max-w-xs">
                <input
                  id="model"
                  className="input input-secondary w-full max-w-xs"
                  type="text"
                  required
                  value={productData.model || ""}
                  onChange={(e) => setProductData({...productData, model: e.target.value})}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-items-stretch items-center w-full mx-24">
              <label className="justify-self-start">Description</label>
              <div className="justify-self-end select-text inline-flex text-center bg-none text-black font-semibold text-md rounded-lg  px-4 py-3 w-full max-w-xs">
                <input
                  id="description"
                  className="input input-secondary w-full max-w-xs"
                  type="text"
                  value={productData.description || ""}
                  onChange={(e) => setProductData({...productData, description: e.target.value})}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-items-stretch items-center w-full mx-24">
              <label className="justify-self-start">Category</label>
              <div className="justify-self-end select-text inline-flex text-center bg-none text-black font-semibold text-md rounded-lg  px-4 py-3 w-full max-w-xs">
                <input
                  id="category"
                  className="input input-secondary w-full max-w-xs"
                  type="text"
                  required
                  value={productData.category || ""}
                  onChange={(e) => setProductData({...productData, category: e.target.value})}              />
              </div>
            </div>

            <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-items-stretch items-center w-full mx-24">
              <label className="justify-self-start">Sub Category</label>
              <div className="justify-self-end select-text inline-flex text-center bg-none text-black font-semibold text-md rounded-lg  px-4 py-3 w-full max-w-xs">
                <input
                  id="subCategory"
                  className="input input-secondary w-full max-w-xs"
                  type="text"                  
                  value={productData.subCategory || ""}
                  onChange={(e) => setProductData({...productData, subCategory: e.target.value})}              />
              </div>
            </div>

            <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-items-stretch items-center w-full mx-24">
              <label className="justify-self-start">Country</label>
              <div className="justify-self-end select-text inline-flex text-center bg-none text-black font-semibold text-md rounded-lg  px-4 py-3 w-full max-w-xs">
                <input
                  id="country"
                  className="input input-secondary w-full max-w-xs"
                  type="text"
                  required
                  value={productData.country || ""}
                  onChange={(e) => setProductData({...productData, country: e.target.value})}              />
              </div>
            </div>

            <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-items-stretch items-center w-full mx-24">
              <label className="justify-self-start">City</label>
              <div className="justify-self-end select-text inline-flex text-center bg-none text-black font-semibold text-md rounded-lg  px-4 py-3 w-full max-w-xs">
                <input
                  id="city"
                  className="input input-secondary w-full max-w-xs"
                  type="text"                  
                  value={productData.city || ""}
                  onChange={(e) => setProductData({...productData, city: e.target.value})}              />
              </div>
            </div>

            <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-items-stretch items-center w-full mx-24">
              <label className="justify-self-start">Color</label>
              <div className="justify-self-end select-text inline-flex text-center bg-none text-black font-semibold text-md rounded-lg  px-4 py-3 w-full max-w-xs">
                <input
                  id="color"
                  className="input input-secondary w-full max-w-xs"
                  type="text"                  
                  value={productData.color || ""}
                  onChange={(e) => setProductData({...productData, color: e.target.value})}              />
              </div>
            </div>

            <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-items-stretch items-center w-full mx-24">
              <label className="justify-self-start">Gender</label>
              <div className="justify-self-end select-text inline-flex text-center bg-none text-black font-semibold text-md rounded-lg  px-4 py-3 w-full max-w-xs">
                <input
                  id="gender"
                  className="input input-secondary w-full max-w-xs"
                  type="text"                  
                  value={productData.gender || ""}
                  onChange={(e) => setProductData({...productData, gender: e.target.value})}              />
              </div>
            </div>

            <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-items-stretch items-center w-full mx-24">
              <label className="justify-self-start">Code</label>
              <div className="justify-self-end select-text inline-flex text-center bg-none text-black font-semibold text-md rounded-lg  px-4 py-3 w-full max-w-xs">
                <input
                  id="code"
                  className="input input-secondary w-full max-w-xs"
                  type="text"                  
                  value={productData.code || ""}
                  onChange={(e) => setProductData({...productData, code: e.target.value})}              />
              </div>
            </div>

            <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-items-stretch items-center w-full mx-24">
              <label className="justify-self-start">Price</label>
              <div className="justify-self-end select-text inline-flex text-center bg-none text-black font-semibold text-md rounded-lg  px-4 py-3 w-full max-w-xs">
                <input
                  id="price"
                  className="input input-secondary w-full max-w-xs"
                  type="number"
                  step="any"
                  required
                  value={productData.price || ""}
                  onChange={(e) => setProductData({...productData, price: e.target.value})}              />
              </div>
            </div>

            <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-items-stretch items-center w-full mx-24">
              <label className="justify-self-start">Picture File</label>
              <button className="btn bg-black w-10/12 ml-11">Choose file</button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-items-center items-center mx-24 my-10">
          <button
            className="btn btn-outline bg-secondary border-none hover:bg-black text-white md:text-base phone:text-xs"
            type="submit"
          >
            Update
          </button>
          <button
            id="delete"
            className="btn btn-outline btn-secondary bg-white md:text-base phone:text-xs"
            onClick={deleteProduct}
          >
            Delete
          </button>
        </div>
        
      </form>
    </div>
  );
}
