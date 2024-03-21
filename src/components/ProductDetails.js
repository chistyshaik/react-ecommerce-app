import React from 'react'

export default function ProductDetails({match , ...props}) {
  const {params} = match;
  const {id} = params;

  return (
    <div>
      Product Details : {id}
      <pre>{JSON.stringify(params, null, 2)}</pre>
    </div>
  )
}
