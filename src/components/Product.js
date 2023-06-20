const Product = () =>{
    return(
        <div>
          <img src="/images/peproni.png" alt="pizza" />
          <div className="text-center">
          <h2 className="text-lg font-bold py-2">Hakana Special</h2>
          <span className="bg-gray-200 py-1 rounded-full text-sm px-4">Small</span>
          </div>
          <div className="flex justify-between items-center mt-3">
             <span className="text-md font-bold">₹ 500</span>
             <button className="bg-yellow-500 px-4 py-1 rounded-full font-bold">ADD</button>
          </div>
        </div>
    )
}

export default Product;