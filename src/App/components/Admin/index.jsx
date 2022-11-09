import React from 'react'

function Admin() {
  return (
    <div className="bg-white" >
    <h1 className="text-center text-7xl	font-serif tracking-widest	non-italic	">All Cars</h1>
  <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 className="sr-only">Products</h2>

    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {products.map((product) => { 
        return <CarStructure key={product.id} product={product} />
      })}
    </div>
  </div>
</div>
    )
}

export default Admin