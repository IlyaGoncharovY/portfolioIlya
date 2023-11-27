import React from "react";
import {Annotation, ComposableMap, Geographies, Geography} from "react-simple-maps";

export const MapChart = () => {
    return (
        <ComposableMap
            projection="geoAzimuthalEqualArea"
            projectionConfig={{
                rotate: [-10.0, -52.0, 0],
                center: [5, 5],
                scale: 1100
            }}
            style={{width: "100%", height: "100%"}}
        >
            <Geographies
                geography="/features.json"
                fill="#9bc2c2"
                stroke="#FFFFFF"
                strokeWidth={0.5}
            >
                {({geographies}) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo}/>
                    ))
                }
            </Geographies>
            <Annotation
                subject={[37.6176, 55.7558]}
                dx={-90}
                dy={-30}
                connectorProps={{
                    stroke: "#e3d2ce",
                    strokeWidth: 2,
                    strokeLinecap: "round"
                }}
            >
                <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
                    {"Moscow"}
                </text>
            </Annotation>
        </ComposableMap>
    );
};
