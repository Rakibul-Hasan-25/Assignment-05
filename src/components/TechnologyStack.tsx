import { DeleteIcon } from "lucide-react"
import type { TechnologyStackProps } from "../types/technologiesType"

export default function TechnologyStack({ selectedTechnologies, deleteTechnology, deleteTechnologies }: TechnologyStackProps) {
    return (
        // Main technology stack container
        <div className="flex flex-col gap-4 border rounded-[10px] border-gray-300 p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-lg">
            {/* Technology card top part container */}
            <div>
                <h2 className="font-semibold text-2xl leading-tight">Your Stack</h2>
                <p className="text-gray-500">{selectedTechnologies.length} Technology Selected</p>
            </div>
            <div className="flex flex-col gap-2">
                {selectedTechnologies.map((selectedTechnology) => (
                    <div key={selectedTechnology.id} className="flex items-center w-50 justify-between border border-gray-300 rounded-[10px] py-0.5 px-2">
                        {/* Stack card left side container */}
                        <div className="flex gap-4 items-center">
                            {/* Stack card left side logo */}
                            <div>
                                <img className="min-w-8" src={selectedTechnology.icon} alt={selectedTechnology.name} />
                            </div>
                            {/* Stack card left side name and difficulty */}
                            <div>
                                <h3 className="font-semibold text-[16px]">{selectedTechnology.name}</h3>
                                <p className="text-gray-600 text-[12px]">{selectedTechnology.difficulty}</p>
                            </div>
                        </div>
                        {/* Stack card right side container */}
                        <div>
                            <button onClick={() => deleteTechnology(selectedTechnology)} type="button" className=""><DeleteIcon color="gray" /></button>
                        </div>
                    </div>
                ))}
            </div>
            {/* Technology card bottom delete all button container */}
            <div className="flex items-center justify-center">
                <button onClick={() => deleteTechnologies()} className="font-bold text-xl border border-amber-600 text-amber-600 py-0.5 px-2 rounded-[5px]" type="button">Remove All</button>
            </div>
        </div>
    )
}