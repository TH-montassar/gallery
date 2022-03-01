import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  //const [count, setCount] = useState(0);
  const [Data, setData] = useState([]);
  //   const [a, seta] = useState(0);
  //  console.log("ddd",a)
  //  seta(5)
  //  console.log("ddd",a)

  useEffect(() => {
    const getRandomPhotos = async () => {
      const res = await axios.get(
        "https://api.unsplash.com/photos?client_id=mtHuH_DKfH41q5T-wV3oO_DpTiUv2GahJoaIiO7OyKc"
      );

      setData(res.data);

      //console.log("resultat", res.data);
    };
    getRandomPhotos();
  }, []);
  
  const [InputValue, setInputValue] = useState("");

  const searshImage = async(e) => {
    e.preventDefault()//man5alouch navigateur ya3mel relode
    const resSearsh= await axios.get(`https://api.unsplash.com/search/photos?query=${InputValue}&client_id=mtHuH_DKfH41q5T-wV3oO_DpTiUv2GahJoaIiO7OyKc`);
    setData(resSearsh.data.results);
  };

  return (
    <div className="pt-10">
      <div className="text-center  text-sky-600 text-9xl font-sans antialiased font-semibold">
        Gallery
      </div>

      <div className="input-group ">
        <div>
          <input
          onChange={(e)=>setInputValue(e.target.value)}
            type="search"
            className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="search"
            aria-label="Search"
            aria-describedby="button-addon2"
          />
        </div>
        <div>
          <button
            onClick={(e) => searshImage(e)}
            className="btn px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
            type="button"
            id="button-addon2"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="search"
              className="w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="columns-4 items-center justify-center gap-14 mx-auto h-min mb-10 space-y-14 py-10">
        {Data.map((img) => {
          return (
            <Link key={img.id} to={`/${img.id}`}>
              <div className="photos hover:-translate-y-6 duration-500 cursor-pointer shadow-md rounded-3xl break-inside-avoid-column bg-neutral-50 mb-10">
                <img
                  src={img.urls.small}
                  alt={img.user.name}
                  className="rounded-t-lg bg-cover w-full"
                />
                <figcaption className="text-center ">
                  {img.user.name} +{img.likes}
                </figcaption>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
