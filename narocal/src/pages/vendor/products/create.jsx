import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { supabase } from "lib/supabaseClient"
import VendorNavBar from "@/components/vendors/VendorNavBar"
import Label from "@/components/Label"
export const revalidate = 60

export default function CreateProduct() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [brand, setBrand] = useState("")
  const [category, setCategory] = useState("")
  const [country, setCountry] = useState("")
  const [city, setCity] = useState("")
  const [model, setModel] = useState("")
  const [subCategory,setSubCategory] = useState("")
  const [code,setCode] = useState("")
  const [color,setColor] = useState("")
  const [gender,setGender] = useState("")
  const [image,setImage] = useState("")

  const [email, setEmail] = useState("")
  const [authorId, setAuthorId] = useState(null)
  const [userId, setUserId] = useState(null)
  const [price, setPrice] = useState(null)

  function convertStringFormatt(word) {
    if (word == "" || word == null) {
      return ""
    } else {
      let temp = word.slice(1, word.length - 1)
      return temp
    }
  }

  useEffect(() => {
    async function getUserEmail() {
      const { data } = await supabase.auth.getUser()

      let userJson = data.user

      if (userJson != null) {
        setEmail(convertStringFormatt(JSON.stringify(userJson.email, null, 2)))
        console.log("from get user email" + email)
      }
    }

    async function getUserId() {
      const { data, error } = await supabase
        .from("User")
        .select()
        .eq("email", email)

      console.log(email)

      if (error) {
        console.log("Error" + error)
      }

      if (data.length != 0) {
        setUserId(JSON.stringify(data[0].id, null, 2))
        console.log("user id " + userId)
        if (data[0].id == null) {
          setUserId("")
        }
      }
    }

    async function getAuthorId() {
      console.log(userId)
      const { data, error } = await supabase
        .from("VendorProfile")
        .select()
        .eq("userId", userId)

      if (error) {
        console.log("Error in vendor profile" + JSON.stringify(error))
      } else if (data[0] == null) {
        console.log("pass")
      } else {
        setAuthorId(JSON.stringify(data[0].id))
        console.log("vendor id " + authorId)
        if (data[0].id == null) {
          setUserId("")
        }
      }
    }
    getUserEmail()
    getUserId()
    getAuthorId()
  }, [email, userId])

  async function insertProduct(event) {
    event.preventDefault()
    const { error } = await supabase.from("Product").insert([
      {
        name: name,
        description: description,
        brand: brand,
        category: category,
        country: country,
        authorId: authorId,
        price: price,
        subCategory:subCategory,
        city: city,
        model: model,
        gender: gender,
        code: code,
        color: color,
        image: image,

      },
    ])

    if (error) {
      console.log("Error in insert product")
    } else {
      alert("Product creates successfully!")
    }
  }
  // return (
  //   <div className="bg-secondary min-h-screen">
  //     <VendorNavBar></VendorNavBar>
  //     <form onSubmit={insertProduct} className="form-widget">
  //       <div className="p-2 m-8 lg:m-20 lg:p-8 grid phone:gap-2 md:gap-6 md:grid-cols-2 phone:grid-cols-1 justify-items-stretch bg-background shadow-2xl rounded-2xl">
  //         <div className="md:place-self-center">
  //           <Label label="Name" labelId="name"></Label>
  //         </div>
  //         <div>
  //           <input
  //             id="name"
  //             className="input input-secondary w-full max-w-xs"
  //             type="text"
  //             required
  //             value={name || ""}
  //             onChange={(e) => setName(e.target.value)}
  //           />
  //         </div>
  //         <div className="md:place-self-center">
  //           <Label label="Model" labelId="model"></Label>
  //         </div>
  //         <div>
  //           <input
  //             id="model"
  //             className="input input-secondary w-full max-w-xs"
  //             type="text"
  //             required
  //             value={model || ""}
  //             onChange={(e) => setModel(e.target.value)}
  //           />
  //         </div>
          
  //         <div className="md:place-self-center">
  //           <Label label="Description" labelId="description"></Label>
  //         </div>
  //         <div>
  //           <input
  //             id="description"
  //             className="input input-secondary w-full max-w-xs"
  //             type="text"
              
  //             value={description || ""}
  //             onChange={(e) => setDescription(e.target.value)}
  //           />
  //         </div>
  //         <div className="md:place-self-center">
  //           <Label label="Brand" labelId="brand"></Label>
  //         </div>
  //         <div>
  //           <input
  //             id="brand"
  //             className="input input-secondary w-full max-w-xs"
  //             type="text"
  //             required
  //             value={brand || ""}
  //             onChange={(e) => setBrand(e.target.value)}
  //           />
  //         </div>
  //         <div className="md:place-self-center">
  //           <Label label="Category" labelId="category"></Label>
  //         </div>
  //         <div>
  //           <input
  //             id="category"
  //             className="input input-secondary w-full max-w-xs"
  //             type="text"
  //             required
  //             value={category || ""}
  //             onChange={(e) => setCategory(e.target.value)}
  //           />
  //         </div>
  //         <div className="md:place-self-center">
  //           <Label label="Sub-Category" labelId="subCategory"></Label>
  //         </div>
  //         <div>
  //           <input
  //             id="subCategory"
  //             className="input input-secondary w-full max-w-xs"
  //             type="text"
  //             value={subCategory || ""}
  //             onChange={(e) => setSubCategory(e.target.value)}
  //           />
  //         </div>
  //         <div className="md:place-self-center">
  //           <Label label="Country" labelId="country"></Label>
  //         </div>
  //         <div>
  //           <input
  //             id="country"
  //             className="input input-secondary w-full max-w-xs"
  //             type="text"
  //             required
  //             value={country || ""}
  //             onChange={(e) => setCountry(e.target.value)}
  //           />
  //         </div>
  //         <div className="md:place-self-center">
  //           <Label label="City" labelId="city"></Label>
  //         </div>
  //         <div>
  //           <input
  //             id="city"
  //             className="input input-secondary w-full max-w-xs"
  //             type="text"
  //             value={city || ""}
  //             onChange={(e) => setCity(e.target.value)}
  //           />
  //         </div>
  //         <div className="md:place-self-center">
  //           <Label label="Color" labelId="color"></Label>
  //         </div>
  //         <div>
  //           <input
  //             id="color"
  //             className="input input-secondary w-full max-w-xs"
  //             type="text"
  //             value={color || ""}
  //             onChange={(e) => setColor(e.target.value)}
  //           />
  //         </div>
  //         <div className="md:place-self-center">
  //           <Label label="Gender" labelId="gender"></Label>
  //         </div>
  //         <div>
  //           <input
  //             id="gender"
  //             className="input input-secondary w-full max-w-xs"
  //             type="text"
  //             value={gender || ""}
  //             onChange={(e) => setGender(e.target.value)}
  //           />
  //         </div>
  //         <div className="md:place-self-center">
  //           <Label label="Code" labelId="code"></Label>
  //         </div>
  //         <div>
  //           <input
  //             id="code"
  //             className="input input-secondary w-full max-w-xs"
  //             type="text"
  //             value={code || ""}
  //             onChange={(e) => setCode(e.target.value)}
  //           />
  //         </div>
  //         <div className="md:place-self-center">
  //           <Label label="Price" labelId="price"></Label>
  //         </div>
  //         <div>
  //           <input
  //             id="price"
  //             className="input input-secondary w-full max-w-xs"
  //             type="number"
  //             step="any"
  //             required
  //             value={price || ""}
  //             onChange={(e) => setPrice(e.target.value)}
  //           />
  //         </div>
  //         <div className="md:place-self-center">
  //           <Label label="Picture File" labelId="price"></Label>
  //         </div>
  //         <div>
  //           {/* <input
  //             id="price"
  //             className="input input-secondary w-full max-w-xs"
  //             type="number"
  //             step="any"
  //             required
  //             value={productData.price || ""}
  //             onChange={(e) => setProductData({...productData, price: e.target.value})}              /> */}
  //           <button className="btn bg-black">Choose file</button>
  //         </div>
  //         <div className="md:place-self-end">
  //           <button
  //             className="btn btn-outline btn-secondary md:text-base phone:text-xs"
  //             type="submit"
  //           >
  //             Create
  //           </button>
  //         </div>
  //       </div>
  //     </form>
  //   </div>
  // )

  return (
    <div className="flex flex-col items-center bg-secondary">
      <VendorNavBar></VendorNavBar>
      <h2 className="text-3xl font-bold text-center mt-10 mb-8">Create product</h2>
      <form
        className="flex flex-col items-center font-sans bg-background w-fit rounded-xl"
        onSubmit={insertProduct}
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
                  value={name || ""}
                  onChange={(e) => setName(e.target.value)}
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
                  value={brand || ""}
                  onChange={(e) => setBrand(e.target.value)}
                />
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
                  value={model || ""}
                  onChange={(e) => setModel(e.target.value)}
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
                  value={description || ""}
                  onChange={(e) => setDescription(e.target.value)}
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
                  value={category || ""}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-items-stretch items-center w-full mx-24">
              <label className="justify-self-start">Sub Category</label>
              <div className="justify-self-end select-text inline-flex text-center bg-none text-black font-semibold text-md rounded-lg  px-4 py-3 w-full max-w-xs">
                <input
                  id="subCategory"
                  className="input input-secondary w-full max-w-xs"
                  type="text"  
                  value={subCategory || ""}
                  onChange={(e) => setSubCategory(e.target.value)}
                />
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
                  value={country || ""}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-items-stretch items-center w-full mx-24">
              <label className="justify-self-start">City</label>
              <div className="justify-self-end select-text inline-flex text-center bg-none text-black font-semibold text-md rounded-lg  px-4 py-3 w-full max-w-xs">
                <input
                  id="city"
                  className="input input-secondary w-full max-w-xs"
                  type="text"  
                  value={city || ""}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-items-stretch items-center w-full mx-24">
              <label className="justify-self-start">Color</label>
              <div className="justify-self-end select-text inline-flex text-center bg-none text-black font-semibold text-md rounded-lg  px-4 py-3 w-full max-w-xs">
                <input
                  id="color"
                  className="input input-secondary w-full max-w-xs"
                  type="text"  
                  value={color || ""}
                  onChange={(e) => setColor(e.target.value)}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-items-stretch items-center w-full mx-24">
              <label className="justify-self-start">Gender</label>
              <div className="justify-self-end select-text inline-flex text-center bg-none text-black font-semibold text-md rounded-lg  px-4 py-3 w-full max-w-xs">
                <input
                  id="gender"
                  className="input input-secondary w-full max-w-xs"
                  type="text"  
                  value={gender || ""}
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-items-stretch items-center w-full mx-24">
              <label className="justify-self-start">Code</label>
              <div className="justify-self-end select-text inline-flex text-center bg-none text-black font-semibold text-md rounded-lg  px-4 py-3 w-full max-w-xs">
                <input
                  id="code"
                  className="input input-secondary w-full max-w-xs"
                  type="text"  
                  value={code || ""}
                  onChange={(e) => setCode(e.target.value)}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-items-stretch items-center w-full mx-24">
              <label className="justify-self-start">Price</label>
              <div className="justify-self-end select-text inline-flex text-center bg-none text-black font-semibold text-md rounded-lg  px-4 py-3 w-full max-w-xs">
                <input
                  id="price"
                  className="input input-secondary w-full max-w-xs"
                  type="text"
                  required
                  value={price || ""}
                  onChange={(e) => setPrice(e.target.value)}
                />
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
              className="btn btn-outline btn-secondary md:text-base phone:text-xs"
              type="submit"
            >
              Create
            </button>
        </div>
        
      </form>
    </div>
  );
}
