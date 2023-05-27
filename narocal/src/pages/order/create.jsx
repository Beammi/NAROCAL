export default function CreateOrder(){
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
  return (
    <div className="bg-secondary min-h-screen">
      <VendorNavBar></VendorNavBar>
      <form onSubmit={insertProduct} className="form-widget">
        <div className="p-2 m-8 lg:m-20 lg:p-8 grid phone:gap-2 md:gap-6 md:grid-cols-2 phone:grid-cols-1 justify-items-stretch bg-background shadow-2xl rounded-2xl">
          <div className="md:place-self-center">
            <Label label="Name" labelId="name"></Label>
          </div>
          <div>
            <input
              id="name"
              className="input input-secondary w-full max-w-xs"
              type="text"
              required
              value={name || ""}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="md:place-self-center">
            <Label label="Model" labelId="model"></Label>
          </div>
          <div>
            <input
              id="model"
              className="input input-secondary w-full max-w-xs"
              type="text"
              required
              value={model || ""}
              onChange={(e) => setModel(e.target.value)}
            />
          </div>
          
          <div className="md:place-self-center">
            <Label label="Description" labelId="description"></Label>
          </div>
          <div>
            <input
              id="description"
              className="input input-secondary w-full max-w-xs"
              type="text"
              
              value={description || ""}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="md:place-self-center">
            <Label label="Brand" labelId="brand"></Label>
          </div>
          <div>
            <input
              id="brand"
              className="input input-secondary w-full max-w-xs"
              type="text"
              required
              value={brand || ""}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div className="md:place-self-center">
            <Label label="Category" labelId="category"></Label>
          </div>
          <div>
            <input
              id="category"
              className="input input-secondary w-full max-w-xs"
              type="text"
              required
              value={category || ""}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="md:place-self-center">
            <Label label="Sub-Category" labelId="subCategory"></Label>
          </div>
          <div>
            <input
              id="subCategory"
              className="input input-secondary w-full max-w-xs"
              type="text"
              value={subCategory || ""}
              onChange={(e) => setSubCategory(e.target.value)}
            />
          </div>
          <div className="md:place-self-center">
            <Label label="Country" labelId="country"></Label>
          </div>
          <div>
            <input
              id="country"
              className="input input-secondary w-full max-w-xs"
              type="text"
              required
              value={country || ""}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="md:place-self-center">
            <Label label="City" labelId="city"></Label>
          </div>
          <div>
            <input
              id="city"
              className="input input-secondary w-full max-w-xs"
              type="text"
              value={city || ""}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="md:place-self-center">
            <Label label="Color" labelId="color"></Label>
          </div>
          <div>
            <input
              id="color"
              className="input input-secondary w-full max-w-xs"
              type="text"
              value={color || ""}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <div className="md:place-self-center">
            <Label label="Gender" labelId="gender"></Label>
          </div>
          <div>
            <input
              id="gender"
              className="input input-secondary w-full max-w-xs"
              type="text"
              value={gender || ""}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
          <div className="md:place-self-center">
            <Label label="Code" labelId="code"></Label>
          </div>
          <div>
            <input
              id="code"
              className="input input-secondary w-full max-w-xs"
              type="text"
              value={code || ""}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
          <div className="md:place-self-center">
            <Label label="Price" labelId="price"></Label>
          </div>
          <div>
            <input
              id="price"
              className="input input-secondary w-full max-w-xs"
              type="number"
              step="any"
              required
              value={price || ""}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="md:place-self-end">
            <button
              className="btn btn-outline btn-secondary md:text-base phone:text-xs"
              type="submit"
            >
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}