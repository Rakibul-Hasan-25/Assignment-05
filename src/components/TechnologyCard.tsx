import type { TechnologyCardProps } from "../types/technologiesType";
import { StarIcon,Check } from "lucide-react";
export default function TechnologyCard({ technology,addToStack,isAdded }: TechnologyCardProps) {
    return (
        // technology card container
        <div className="flex flex-col h-70 justify-evenly max-w-75 rounded-2xl border border-gray-200  p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-lg">
            {/* Technology card top part container */}
            <div className="flex justify-between ">
                <img className="max-w-6" src={technology.icon} alt="technoogy logo" />
                <span style={{
                    color: technology.color,
                    borderColor: technology.color,
                    backgroundColor: `${technology.color}12`,
                }} className="font-medium border rounded-xl px-3 py-1">{technology.badge}</span>
            </div>
            {/* Technology card middle part */}
            <div>
                <h3 className="font-bold">{technology.name}</h3>
                <p className="text-gray-600">{technology.description}</p>
            </div>
            {/* Technology part lower middle */}
            <div className="flex items-center justify-between">
                <span className="bg-gray-100 border border-gray-200">{technology.category}</span>
                <span>{technology.difficulty}</span>
                <span className="flex items-center gap-0.5"><StarIcon className="inline-block" fill="gold" color="gold" size={15} /> {technology.rating}</span>
            </div>
            {/* Technology card bottom button */}
            <button disabled={isAdded} type="button" onClick={() => addToStack(technology)} className="bg-black text-amber-50 px-4 py-1 rounded-[5px] hover:c-b-g">{isAdded ? <div className="flex justify-center items-center"><Check size={18}/> Added to Stack</div> : "Add to Stack"}
            </button>
        </div>
    )
}