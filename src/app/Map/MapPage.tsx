import { Map, MapMarker } from "react-kakao-maps-sdk";

import { Footer } from "@lib/components";
import { COMPANY_INFO } from "@lib/constants";

const MapPage = () => {
  return (
    <section className="w-full h-full flex flex-col">
      <article className="w-full grow-1 p-[2rem] flex flex-col gap-[2rem] items-center justify-center">
        <div className="w-full h-[40rem] border-[0.1rem] border-gray rounded-[1rem] overflow-hidden">
          <Map
            center={COMPANY_INFO.MAP_DATA}
            style={{ width: "100%", height: "100%" }}
          >
            <MapMarker position={COMPANY_INFO.MAP_DATA} />
          </Map>
        </div>

        <p className="text-[1.4rem] font-[500]">주소 : {COMPANY_INFO.ADDRESS}</p>
      </article>

      <Footer />
    </section>
  );
};

export default MapPage;
