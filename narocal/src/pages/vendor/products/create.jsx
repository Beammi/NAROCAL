import { supabase } from "lib/supabaseClient"


export default function CreateProduct() {
  const insertProduct = async (e) => {
    const { data, error } = await supabase
      .from("Product")
      .insert([{ name: "someValue", description: "otherValue", brand: "sth", category: "sth", country:"sth", authorId:"1" }])
  }
  return (
        <div>
            <form onSubmit={insertProduct}>
                
            </form>
        </div>
  )
}
