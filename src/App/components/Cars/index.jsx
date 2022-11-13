import { Link } from "react-router-dom"


function Cars() {
  return (
    <div className=" bg-left  w-full  bg-[url('https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2021/overview/2021-nissan-gtr-supercar.jpg')] bg-fixed bg-left bg-no-repeat bg-cover">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 my-40 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
            <Link  to="nissan" className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Nissan_logo.png/700px-Nissan_logo.png?20200715092107"
                  alt={"alternative"}
                  className="h-48 w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h2 className="text-center text-white my-8">NISSAN</h2>
              </Link>
              <Link  to="bmw" className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-36">
                <img
                  src="https://seeklogo.com/images/B/bmw-logo-248C3D90E6-seeklogo.com.png"
                  alt={"alternative"}
                  className="h-48 w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h2 className="text-center text-white my-8">BMW</h2>
              </Link>
              <Link  to="mercedes" className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/800px-Mercedes-Logo.svg.png"
                  alt={"alternative"}
                  className="h-48 w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h2 className="text-center text-white my-8">MERCEDES</h2>
              </Link>
              <Link  to="subaru" className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNoo81hzEQotF32YEBlg7hSZ8icGQAufACdBDlO_0k3LLxIMm_5X87fkwkglm3Z7sY734&usqp=CAU"
                  alt={"alternative"}
                  className="h-48 w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h2 className="text-center text-white my-8">SUBARU</h2>
              </Link> 
               <Link  to="toyota" className="group opacity-100">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT47c9aB_MFf5YE3oPjhpep8tiFnt5rYLeJnC1PEzt1&s"
                    alt={"alternative"}
                    className="h-48 w-full object-cover object-center group-hover:opacity-75"
                />
                </div>
                <h2 className="text-center text-white my-8">TOYOTA</h2>
              </Link>
        </div>
      </div>
    </div>
  )
}

export default Cars