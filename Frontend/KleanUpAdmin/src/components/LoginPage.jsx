import AuthTemplate from "./AuthTemplate"
import Logo from "./Media/KleanUp.png";


function LoginPage() {
    const myCustomColor = '#3DA5EC';
  return (
    <>
        <AuthTemplate/>
      <div className="absolute top-10 h-5/6 w-1/3 mx-40 bg-white -left-12 p-16 rounded-md  ">
      <div className="">
          <img className="h-12 w-24 object-contain -my-8" src={Logo} />
          <p className="text-xs top-7 relative">
            Lorem ipsum dolor sit amet consectetur. Feugiat tincidunt sem sem
            nulla consectetur morbi.
          </p>
        </div>
        <div className=" flex-1 items-center my-14 mt-11 -top-11 border-gray-500 border-opacity-10 border-2 rounded-md h-3/2 w-80 p-8">
          <div className="flex-1 text-center top-1/4 mb-4  relative items-center justify-center">
            <h3 className="font-bold ">I'm a returning customer</h3>
            <p className="text-sm ">Welcome back to Kleanup!</p>
          </div>
          <div className="">
            <button className="w-5/6 h-1/6 mx-6 text-white justify-center rounded-md p-2" style={{ backgroundColor: myCustomColor }}> 
              Sign in
            </button>
          </div>
        </div>

        <div className=" flex-1 items-center my-40 top-40 border-gray-500 border-opacity-10 border-2 rounded-md h-3/2 w-80 p-8 bottom-1/5 -mt-8">
        <div className="flex-1 text-center -top-1/3 mb-4  relative items-center justify-center">
            <h3 className="font-bold ">I'm a new customer</h3>
            <p className="text-sm ">Welcome back to Kleanup!</p>
          </div>
          <div className="my-0 ">
          <button className="w-5/6 h-1/6 mx-6 text-white justify-center rounded-md p-2 " style={{ backgroundColor: myCustomColor }}>
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage