import logo from '../assets/logo-text.png'
export default function Footer() {
    return (
        // Main footer container
        <div className="mt-20 ml-[clamp(1rem,3vw,2rem)] mr-[clamp(2rem,4vw,5rem)]">
            {/* Footer top main container */}
            <div className="border-t border-gray-200 border-b flex flex-wrap justify-between pt-10 pb-10 gap-5 ">
                {/* Footer top left container Logo and description section*/}
                <div className="flex flex-col gap-2">
                    <img className='max-w-30' src={logo} alt="company logo with text" />
                    <p className="max-w-lg text-wrap">Curated tools,technologies and resources for developers building modern software.</p>
                    <span><a className="h-c-b-g" href="#github">GitHub</a>&nbsp;&nbsp;&nbsp;&nbsp;<a className="h-c-b-g" href="#twitter">Twitter</a>&nbsp;&nbsp;&nbsp;&nbsp;<a className="h-c-b-g" href="#linkedin">Linkedin</a></span>
                </div>
                {/* Footer right section container */}
                <div className="flex justify-between w-full md:w-[45%]">
                    {/* Footer right product section */}
                    <div className="flex flex-col">
                        <span className="font-semibold pb-2">Product</span>
                        <a className="h-c-b-g" href="#home">Home</a>
                        <a className="h-c-b-g" href="#technologies">Technologies</a>
                        <a className="h-c-b-g" href="projects">Projects</a>
                    </div>
                    {/* Footer right Company section */}
                    <div className="flex flex-col">
                        <span className="font-semibold pb-2">Company</span>
                        <a className="h-c-b-g" href="#about">About</a>
                        <a className="h-c-b-g" href="#contact">Contact</a>
                        <a className="h-c-b-g" href="#careers">Careers</a>
                    </div>
                    {/* Footer right leagal section */}
                    <div className="flex flex-col">
                        <span className="font-semibold pb-2">Legal</span>
                        <a className="h-c-b-g" href="#privacy">Privacy Policy</a>
                        <a className="h-c-b-g" href="#terms">Terms of Service</a>
                    </div>
                </div>
            </div>
            {/* Footer bottom container*/}
            <div className="flex justify-between flex-wrap mt-5 mb-5 gap-2">
                <span>2026 Dev Stack All rights reserved.</span>
                <span className="flex gap-4">
                    <a href="#privacy">Privacy</a>
                    <a href="#privacy">Terms</a>
                </span>
            </div>
        </div>
    );
}