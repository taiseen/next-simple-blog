const NewsLetter = () => {

  return (
    <section className='bg-gray-100 mt-20'>

      <div className="container mx-auto md:px-20 py-16 text-center">
        <h1 className='text-3xl font-bold'>Subscribe Newsletter</h1>

        <div className="py-4">
          <input
            type="text"
            placeholder="Enter your email..."
            className="shadow border rounded w-9/12 px-3 py-2 text-xl text-gray-700 focus:outline-none focus:shadow-purple-100" />
        </div>

        <button className="bg-orange-400 px-20 py-3 rounded-full text-gray-50 text-xl hover:bg-orange-500 duration-300">
          Subscribe
        </button>
      </div>

    </section>
  )
}

export default NewsLetter;