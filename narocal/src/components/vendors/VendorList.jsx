import VendorCard from '@/components/vendors/VendorCard'

export default function VendorList(props) {
  const { vendors } = props
  return (
    <ul className="grid justify-items-center sm:justify-items-center md:grid-cols-2 sm:grid-flow-row sm:auto-rows-auto gap-4 overflow-x-auto overflow-contain bg-background rounded-b-lg">
      {vendors.map((vendor) => (
        <VendorCard
          key={vendor.id}
          name={vendor.name}
          language={vendor.language}
          exchange_rate={vendor.exchange_rate}
          shopping_rate={vendor.shopping_rate}
          link={vendor.id}
        ></VendorCard>
      ))}
    </ul>
  )
}
