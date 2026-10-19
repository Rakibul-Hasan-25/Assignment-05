import { use, useState } from "react";
import type { TechnologiesProps, Technology } from "../types/technologiesType";
import TechnologyCard from "./TechnologyCard";
import TechnologyStack from "./TechnologyStack";

export default function Technologies({ technologiesPromise }: TechnologiesProps) {
    const technologies = use(technologiesPromise);
    const [selectedTechnologies,setSelectedTechnologies]=useState<Technology[]>([]);
    function addToStack(technology:Technology){
        setSelectedTechnologies((current) => {
            // Prevent duplicate technologies
            if (current.some((item) => item.id === technology.id)) {
                return current;
            }

            return [...current, technology];
        });
    }
    function deleteTechnology(technology:Technology){
        setSelectedTechnologies((received) =>
            received.filter((item) => item.id !== technology.id)
        );
    }
    function deleteTechnologies(){
        setSelectedTechnologies([]);
    }
    return (
        <>
            {/* the main container of the technologies and stack section */}
            <div className="">
                {/* technologies section upper heading and text container*/}
                <div className="text-center md:text-left">
                    <h1 className="font-bold text-[clamp(1.5rem,5vw,2.5rem)]">Explore the <span className="text-fuchsia-600">Technologies</span></h1>
                    <p className="md:text-xl text-gray-500">Pick one technology per catagory to build your ideal stack.</p>
                </div>
                {/* Technology card and stack setion sub container*/}
                <div className="flex gap-[clamp(1rem,3vw,2rem)]">
                    {/* Technology card main container */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center md:justify-items-start">
                        {technologies.map((technology) =>
                            <TechnologyCard technology={technology} addToStack={addToStack} key={technology.id}></TechnologyCard>
                        )}
                    </div>
                    {/* container of the stack section */}
                    <div className="">
                        <TechnologyStack selectedTechnologies={selectedTechnologies} deleteTechnology={deleteTechnology} deleteTechnologies={deleteTechnologies}></TechnologyStack>
                    </div>
                </div>
            </div>
        </>
    );
}