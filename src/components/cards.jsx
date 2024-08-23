function Card ({title="salaam" , onPress,price , image = "https://picsum.photos/200/300" ,category}){
    return(
      <div  className="lg:w-1/4 md:w-1/2 p-4 w-full border ">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={image}
          />
        </a>
        <div className="mt-4 ">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            {category}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {title}
          </h2>
          <p className="mt-1">${price}</p>
          <button onClick={onPress} type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 my-4 text-center me-2 mb-2">Get More Info</button>

        </div>
      </div>


)
}

export{
    Card
}