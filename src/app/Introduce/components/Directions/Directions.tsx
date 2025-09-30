import { Map, MapMarker } from "react-kakao-maps-sdk";

import { ArticleTitle, SimpleInfoTable } from "@lib/components";
import { COMPANY_INFO } from "@lib/constants";
import { useScrollAnimation } from "@lib/hooks";

import { motion } from "motion/react";

const TableRows = [{ label: "주소", value: COMPANY_INFO.ADDRESS }];

const Directions = () => {
  const {
    ref: mapRef,
    variants: mapVariants,
    transition: mapTransition,
    isInView: isMapInView,
  } = useScrollAnimation({
    type: "scale",
    threshold: 0.2,
  });

  const {
    ref: tableRef,
    variants: tableVariants,
    transition: tableTransition,
    isInView: isTableInView,
  } = useScrollAnimation({
    type: "slide",
    threshold: 0.2,
  });

  return (
    <article className="w-full flex flex-col items-center justify-center gap-[10rem]">
      <ArticleTitle
        title="오시는 길"
        iconClassName="fill-primary"
      />

      <motion.div
        ref={mapRef as React.RefObject<HTMLDivElement>}
        initial="hidden"
        animate={isMapInView ? "visible" : "hidden"}
        variants={mapVariants}
        transition={mapTransition}
        className="w-full max-w-[100rem] h-[46rem] border-[0.1rem] border-gray rounded-[1rem] overflow-hidden"
      >
        <Map
          center={COMPANY_INFO.MAP_DATA}
          style={{ width: "100%", height: "100%" }}
        >
          <MapMarker position={COMPANY_INFO.MAP_DATA} />
        </Map>
      </motion.div>

      <motion.div
        ref={tableRef as React.RefObject<HTMLDivElement>}
        initial="hidden"
        animate={isTableInView ? "visible" : "hidden"}
        variants={tableVariants}
        transition={tableTransition}
      >
        <SimpleInfoTable data={TableRows} />
      </motion.div>
    </article>
  );
};

export default Directions;
