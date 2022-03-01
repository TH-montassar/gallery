import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ImageDetails = () => {
  const { imageId } = useParams();
  const [Image, setImage] = useState({});
  const [Loading, setLoading] = useState(false);
  const [Images, setImages] = useState([]);
  useEffect(() => {
    const getRandomDetails = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://api.unsplash.com/photos/${imageId}?client_id=mtHuH_DKfH41q5T-wV3oO_DpTiUv2GahJoaIiO7OyKc`
      );

      setImage(res.data);
      setLoading(false);
    };
    getRandomDetails();
  }, [imageId]);



  useEffect(() => {
    const getRandomPhotos = async () => {
      const res = await axios.get(
        "https://api.unsplash.com/photos?client_id=mtHuH_DKfH41q5T-wV3oO_DpTiUv2GahJoaIiO7OyKc"
      );

      setImages(res.data);

      // console.log("resultat", res.data);
    };
    getRandomPhotos();
  }, []);



  return Loading ? (
    <div> Loading</div>
  ) : (
    <Fragment>
      <div className="flex flex-col items-center py-10 ">
        <h1 className="py-10 font-serif text-8xl antialiased font-extrabold tracking-widest"> {Image?.user?.name}</h1>

        <div className="bg-neutral-50 rounded-3xl w-2/3 flex flex-row flex-wrap">
          <div className="">
            <img
              className="rounded-l-lg bg-cover w-full"
              src={Image?.urls?.regular}
              alt=""
            />
          </div>
          <div className="text-center ">
            <h5> bio : {Image?.user?.bio}</h5> <h5> views: {Image.views}</h5>
            <h5> downloads : {Image.downloads}</h5>{" "}
            <h5> description : {Image.description}</h5>
            <h5>  <a href={Image?.links?.download}> download</a> </h5>
          </div>
        </div>
      </div>

      {/* ------------ */}

      <div className="columns-4 pt-14 items-center justify-center gap-14 mx-auto h-min mb-10">
        {Images.map((img) => {
          return (
            <Link key={img.id} to={`/${img.id}`}>
              <div className="photos hover:-translate-y-6 duration-500 cursor-pointer shadow-md rounded-3xl mb-10 break-inside-avoid-column bg-neutral-50">
                <img
                  src={img.urls.small}
                  alt={img.user.name}
                  className="rounded-t-lg bg-cover w-full"
                />
                <figcaption className="text-center">{img.user.name}</figcaption>
              </div>
            </Link>
            
            
          );
        })}
      </div>

      
    </Fragment>
  );
};

export default ImageDetails;
