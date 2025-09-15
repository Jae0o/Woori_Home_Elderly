import { Map, MapMarker } from "react-kakao-maps-sdk";

import { ArticleTitle, SimpleInfoTable } from "@lib/components";
import { COMPANY_INFO } from "@lib/constants";

const TableRows = [{ label: "주소", value: COMPANY_INFO.ADDRESS }];

const Directions = () => {
  return (
    <article className="w-full flex flex-col items-center justify-center gap-[10rem]">
      <ArticleTitle
        title="오시는 길"
        iconClassName="fill-primary"
      />

      <div className="w-full max-w-[100rem] h-[46rem] border-[0.1rem] border-gray rounded-[1rem] overflow-hidden">
        <Map
          center={COMPANY_INFO.MAP_DATA}
          style={{ width: "100%", height: "100%" }}
        >
          <MapMarker position={COMPANY_INFO.MAP_DATA} />
        </Map>
      </div>

      <SimpleInfoTable data={TableRows} />
    </article>
  );
};

export default Directions;
