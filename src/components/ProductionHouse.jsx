/* eslint-disable react/prop-types */
import { useRef } from "react";
import { productionHouseList as item } from "../utils/data";

function ProductionHouse() {
  //   const autoPlay = useRef(null);
  const autoPlay = useRef(new Array(item.length).fill(false));

  function onMouseOver(index) {
    if (autoPlay.current) {
      autoPlay.current[index]?.play();
      autoPlay.current[index]?.load();
    }
  }

  function onMouseOut(index) {
    if (autoPlay.current) {
      autoPlay.current[index]?.pause(index);
    }
  }

  //   useEffect(() => {
  //     const videoElemnt = autoPlay.current;
  //     console.log(videoElemnt);
  //     if (videoElemnt) {
  //       videoElemnt.play();
  //       videoElemnt.load();
  //     }
  //   }, [item]);

  return (
    <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-28 ">
      {item.map((vid, index) => (
        <div
          onMouseOver={() => {
            onMouseOver(index);
          }}
          onMouseOut={() => {
            onMouseOut(index);
          }}
          key={vid.id}
          className="border-[2px] border-gray-600 rounded-lg hover:scale-95 transitiaon-all duration-300 ease-in-out cursor-pointer shadow-xl shadow-red-950"
        >
          <video
            loop
            muted
            playsInline
            autoPlay
            className="absolute rounded-md z-0 opacity-0 hover:opacity-50"
            ref={autoPlay}
          >
            <source src={vid.video} type="video/mp4" />
          </video>
          <img src={vid.image} alt={vid.id} className="w-full z-[1]" />
        </div>
      ))}
    </div>
  );
}

export default ProductionHouse;
