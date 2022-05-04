import { useState } from 'react'

function Navbar() {

    const [state, setState] = useState(false)

    const navigation = [
        { title: "Customers", path: "#" },
        { title: "Careers", path: "#" },
        { title: "Guides", path: "#" },
        { title: "Partners", path: "#" }
    ]

  return (
    <div>
        
        <div className="header-top-bar">
            <div>
                <div className="grid md:grid-cols-4 lg:grid-col-2">
                    <div className="col-start-1 text-center">
                        <ul className="top-bar-info list-inline-item pl-0 mb-0">
                            <li className="list-inline-item"><a href="mailto:support@gmail.com">Email Us: test@test.com</a></li>
                            <li className="list-inline-item">Visite Us: Address Ta-134/A, New York, USA </li>
                        </ul>
                    </div>
                    <div className="col-end-5">
                        <div className="text-lg-right top-right-bar mt-2 mt-lg-0">
                            <a href="tel:+23-345-67890" >
                                <span>Call Now : </span>
                                <span className="h4">823-4565-13456</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <nav className="bg-white w-full mt-2 border-b md:border-0 md:static">
          <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <a href="#">
                        <img
                            src="https://www.floatui.com/logo.svg" 
                            width={120} 
                            height={50}
                            alt="Float UI logo"
                        />
                    </a>
                  <div className="md:hidden">
                      <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                          onClick={() => setState(!state)}
                      >
                          {
                              state ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                              ) : (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                  </svg>
                              )
                          }
                      </button>
                  </div>
              </div>
              <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ state ? 'block' : 'hidden'}`}>
                  <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-center">
                      {
                          navigation.map((item, idx) => {
                              return (
                                <li key={idx} className="text-black-600 hover:text-blue-600">
                                    <a href={item.path}>
                                        { item.title }
                                    </a>
                                </li>
                              )
                          })
                      }
                  </ul>
              </div>
              <div className="hidden md:inline-block">
                <a href="#" className="py-3 px-4 text-white bg-blue-800 hover:bg-blue-500 rounded-md shadow">
                    Get Started
                </a>
              </div>
          </div>
        </nav>
        
    </div>
  )
}

export default Navbar