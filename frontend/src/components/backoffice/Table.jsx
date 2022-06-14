import { useState, useEffect } from "react";
import axios from "axios";
import { BsFillTrashFill } from "react-icons/bs";

function Table() {
  const [data, setData] = useState([]);
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');

  const getData = () => {
    axios
      .get("http://localhost:4000/api/assistent/assistents")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {/* ------------------------------- Form ------------------------------- */}

      <div class="bg-white shadow rounded-lg p-6 mx-5">
        <div class="grid lg:grid-cols-2 gap-6">
          <div class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
            <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
              <p>
                <label for="name" class="bg-white text-gray-600 px-1">
                  Name
                </label>
              </p>
            </div>
            <p>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                id="name"
                tabindex="0"
                type="text"
                class="py-1 px-1 outline-none block h-full w-full"
              />
            </p>
          </div>
          <div class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
            <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
              <p>
                <label for="email" class="bg-white text-gray-600 px-1">
                  Email{" "}
                </label>
              </p>
            </div>
            <p>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                id="email"
                tabindex="0"
                type="email"
                class="py-1 px-1 outline-none block h-full w-full"
              />
            </p>
          </div>
        </div>

        <div class="border-t mt-6 pt-3 text-center">
          <button
            class="bg-blue-700 hover:bg-blue-400 text-white text-sm px-20 py-3 hover:text-blue-900 border rounded-full text-base"
            type="submit"
          >
            Save
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="overflow-x-auto ">
          <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow-md sm:rounded-lg">
              <table className="min-w-full">
                <thead className="bg-gray-50 dark:bg-gray-700 text-center	">
                  <tr>
                    <th
                      scope="col"
                      className="text-center py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="text-center py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Email
                    </th>

                    <th
                      scope="col"
                      className="text-center py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Action
                    </th>
                    {/* <th scope="col" className="relative py-3 px-6">
                      <span className="sr-only">Delete</span>
                    </th> */}
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.map((el, index) => (
                      <tr key={index}>
                        <td className="text-center py-4 px-6 text-sm text-black-500 whitespace-nowrap dark:text-black-400">
                          {el.name}
                        </td>
                        <td className="text-center py-4 px-6 text-sm text-black-500 whitespace-nowrap dark:text-black-400">
                          {el.email}
                        </td>
                        <td className="text-center py-4 px-6 text-sm text-black-500 whitespace-nowrap dark:text-black-400">
                          <button className="text-red-600	text-xl">
                            {" "}
                            <BsFillTrashFill />{" "}
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
