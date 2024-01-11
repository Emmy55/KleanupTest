import RightImg from './Media/RightImg.png'

function AuthTemplate() {
    const myCustomColor = '#3DA5EC';

  return (
    <div className="overflow-hidden h-screen bg-green-700 flex">

      <div className="flex bg-slate-100 mb-4 h-screen w-1/2  flex-1 items-center justify-center ">
        
      </div>

      <div className="mb-4 h-screen flex-1 w-1/2 overflow-hidden" style={{ backgroundColor: myCustomColor }}>
        <img src={RightImg} className='relative my-60 left-54 mx-14'/>
      </div>

  </div>
  )
}

export default AuthTemplate