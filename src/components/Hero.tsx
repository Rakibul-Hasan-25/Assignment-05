import logo from '../assets/banner-stack.png';
export default function Hero() {
    return (
        // main container
        <div>
            {/* actual cotainer */}
            <div className="flex flex-col-reverse md:flex-row items-center justify-evenly md:gap-4">
                {/* left side hero text and buttons container */}
                <div className="flex flex-col items-center md:block">
                    {/* left side hero text cotainer */}
                    <div className="flex flex-col items-center md:block max-w-2xl">
                        <h1 className="leading-none font-bold text-[clamp(2.5rem,5vw,4.5rem)]">Build Your Ideal <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent"><br />Development Stack</span></h1>
                        <p className="max-w-lg md:text-lg leading-relaxed text-gray-600">Explore forntend,backend,database and tooling options,compare them side by side and put together the stack that fits your next project.</p>
                    </div>
                    {/* left side button container */}
                    <div className="mt-8 flex flex-col max-w-1/2 gap-4 md:flex-row">

                        <button className="rounded-xl bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 px-6 py-3 font-semibold text-white border hover:border-violet-500">
                            Explore Technologies
                        </button>

                        <button className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 hover:border-violet-500 hover:text-violet-600">
                            Learn More
                        </button>

                    </div>
                </div>
                {/* right side the hero logo container */}
                <div>
                    <img src={logo} alt="banner stack logo" />
                </div>
            </div>
        </div>
    )
}