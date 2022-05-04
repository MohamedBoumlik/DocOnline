import Navbar from './Navbar'
// import '../../style/style.css'
import '../../style/style.css';

function Home() {
  return (
    <div>

        <Navbar/>

        <section className="w-full h-screen homee ">

            <div className='w-full flex justify-center items-center'>

                <div class="flex flex-col justify-center items-center mt-5 w-1/2">
                    <hr className='w-1/4 h-2 border-4 border-rose-500 mr-2' />
                    <h3 className='mt-5 '>Lorem ipsum dolor</h3>
                    <p>dfffkub</p>

                </div>
                <div class="flex flex-col justify-center items-center mt-5 w-1/2 ">
                    {/* <h3 >Lorem ipsum dolor</h3> */}
                </div>
                
            </div>

        </section>
        <h1>lesgooooo</h1>

    </div>
  )
}

export default Home