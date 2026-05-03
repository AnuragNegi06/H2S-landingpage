import Participate from "./Participate.jsx";
import Challenges from "./Challenges.jsx";
import Rewards from "./Reward.jsx";
import Schedule from "./Schedule.jsx";
import Faqs from "./Faqs.jsx";
import { rewdata } from "../data/data.reward.js";
import { chaldata } from "../data/data.challenges.js";
import { sdldata } from "../data/data.schedule.js";
import { faqsdata } from "../data/data.faqs.js";


function About(){

        const features = [
    {
      
      description: "Undergraduate Students"
    },
    {
     
      description: "Graduate/Postgraduate Students"
      
    },
    {
     
      description: "PhD Students/Research Scholars"
     
    }
    
  ];


//   bg-[radial-gradient(circle_at_20%_50%,rgba(124,58,237,0.25),transparent_40%),radial-gradient(circle_at_80%_50%,rgba(168,85,247,0.25),transparent_40%),linear-gradient(to_bottom,#05010a,#0a0218,#14052e)]



    return (
        <main className="flex-col bg-[radial-gradient(circle_at_20%_50%,rgba(124,58,237,0.25),transparent_40%),radial-gradient(circle_at_80%_50%,rgba(168,85,247,0.25),transparent_40%),linear-gradient(to_bottom,#05010a,#0a0218,#14052e)] text-white justify-center items-center text-center pt-5">

            <section className="mb-20 pt-10">
                <h1 className="font-bold text-3xl">WHO CAN</h1>
                <h1 className="font-bold text-3xl mb-7">PARTICIPATE? </h1>
                <div className="flex justify-start gap-40 h-50">
                    <div className="bg-red-800 w-100 "></div>
                    <div className="w-200 font-manrope mb-7">
                        <p>Welcome to the Lorem Ipsum Innovation Hackathon, an exhilarating platform designed to foster innovation and
                        creativity in the domain of advanced technology and futuristic solutions.Organized by the National Center 
                        for Applied Research and supported by Hack2skill, this hackathon invites undergraduate students, 
                        graduate/postgraduate students, and PhD researchers to collaborate and solve critical challenges.</p>
                    </div>
                    <div className="bg-red-800 w-100">
                        
                    </div>
                </div>
                <div>
                    <button type="button" className="bg-purple-600 hover:cursor-pointer hover:bg-purple-700 rounded-4xl text-sm p-5 h-15 w-30">Apply Now</button>
                </div>
            </section>
            
            <section className="flex-col items-center justify-center py-20 px-4 gap-16 mb-20 pl-40 pr-40">
                <div className="text-l text-violet-600 dark:text-white mb-10 text-center ">
                    <h4 >
                        WHO CAN PARTICIPATE ?
                    </h4>
                    
                </div>

                <div className="flex items-center justify-center gap-30 text-center text-white mb-10 ">
                    {features.map((feature, index) => (
                        <div
                        key={index}
                        className="flex items-center justify-center group p-8 bg-gray-900/0 border-2 border-violet-600 w-85 h-50 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                        <p >
                            {feature.description}
                        </p>
                        </div>
                    ))}
                </div>
                <p className="text-center">Note: Working Professionals are not eligible to participate in the hackathon.</p>
            </section>
           
            <section className="flex justify-evenly gap-5 pl-40 pr-40 mb-30">
                <div className="bg-amber-400/0 w-130">
                    <h1 className="font-bold text-3xl">WHAT IS THE </h1>
                    <h1 className="mb-5 font-bold text-3xl"> HACKATHON?</h1>
                    <p className="text-left mb-5">The Lorem Ipsum Innovation Hackathon is a flagship event crafted to uncover pioneering ideas in science, technology, and system design. As technological advancements accelerate globally, this initiative aims to bridge academic knowledge with practical implementation.</p>
                    <p className="text-left mb-10">Participants will work on challenge statements designed by leading R&D units, applying theoretical expertise to build innovative prototypes and solutions with potential real-world application.</p>
                    <p className="text-left mb-2">Submission Closing In:</p>
                    <div className="flex gap-15">
                        <div className="p-5 h-20 w-45 bg-gray-400S border-2">16d 12h 42m 31s</div>
                        <button type="button" className="bg-purple-700 hover:bg-purple-900 text-sm p-5 h-20 w-40 hover:cursor-pointer">Register Now</button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-amber-900/0 w-100">
                    <img src="/images/c1.jpg" alt="img1" className="hover:scale-110 transition-transform duration-300 ease-in-out"/>
                    <img src="/images/c2.jpg" alt="img2" className="hover:scale-110 transition-transform duration-300 ease-in-out"/>
                    <img src="/images/c3.jpg" alt="img3" className="hover:scale-110 transition-transform duration-300 ease-in-out"/>
                    <img src="/images/c4.jpg" alt="img4" className="hover:scale-110 transition-transform duration-300 ease-in-out"/>
                    <img src="/images/c5.jpg" alt="img5" className="hover:scale-110 transition-transform duration-300 ease-in-out"/>
                    <img src="/images/c6.jpg" alt="img6" className="hover:scale-110 transition-transform duration-300 ease-in-out"/>
                    <img src="/images/c7.jpg" alt="img7" className="hover:scale-110 transition-transform duration-300 ease-in-out"/>
                    <img src="/images/c8.jpg" alt="img8" className="hover:scale-110 transition-transform duration-300 ease-in-out"/>
                    <img src="/images/c9.jpg" alt="img9" className="hover:scale-110 transition-transform duration-300 ease-in-out"/>
                </div>
            </section>

            <section className="mb-30">
                <h4 className="text-l text-violet-600 dark:text-white mb-25 text-center z-6">WHY PARTICIPATE ?</h4>
                <div className="flex items-center justify-between bg-amber-50/0 mb-5 pl-0 pr-0">
                    <div className="flex-col bg-violet-600 h-80 w-125 text-right items-center p-10 pr-0">
                        <h3 className="font-bold">Mentorship from Experts</h3>
                        <p>Gain invaluable insights and guidance from experienced technologists and domain experts.</p>
                        <h3 className="font-bold">Networking</h3>
                        <p>Connect with peers, professionals, and innovation leaders from across the nation.</p>     
                    </div>
                    <div class="relative w-40 h-40 flex items-center justify-center">

                        <div class="z-3 absolute w-120 h-120 bg-linear-to-tr from-purple-500/0 to-blue-500 rounded-full border-2 animate-spin"></div>
                        <div class="z-3 absolute w-100 h-100 bg-linear-to-tr from-purple-500 to-blue-500/0 rounded-full border-2 animate-spin"></div>
                        <div class="absolute w-90 h-90 bg-linear-to-b from-purple-500/0 to-blue-500 rounded-full border-2 animate-spin"></div>
                        <div class="z-3 absolute w-70 h-70 bg-linear-to-b from-purple-500 to-blue-500/0 rounded-full border-2 animate-spin"></div>
                        <div class="z-3 absolute w-60 h-60 bg-linear-to-tr from-purple-500/0 to-blue-500 rounded-full border-2 animate-spin"></div>
                    
                        <img src="/images/astro.png" alt="Astronaut" class="relative z-10 w-60 h-60" />
                    </div>


                    <div className="bg-violet-600 h-80 w-125 text-left p-10 pl-0">
                        <h3 className="font-bold">Internship Opportunities</h3>
                        <p>Stand a chance to secure internships at top institutions and innovation labs.</p>
                        <h3 className="font-bold">Real-World Impact</h3>
                        <p>Contribute to meaningful challenges that aim to improve lives and systems at scale.</p>
                    </div>
                </div>
            </section>
            
            <section className="pl-40 pr-40">
                <h4 className="text-l text-violet-600 dark:text-white mb-10 text-center">
                    HOW PARTICIPATE ?
                </h4>
                <Participate />
            </section>  

            <section className="mb-60 pl-40 pr-40">
                <div className="bg-black/0 text-white mb-10">
                    <h4 className="text-l text-violet-600 dark:text-white mb-4 text-center">CHALLENGES</h4>
                </div>
                <hr/>
                {chaldata.map((challenge,index)=> <Challenges challenge={challenge} key={index}/>)}
            </section>
            
            <section className="mb-30 pl-40 pr-40">
                <div className="bg-black/0 text-white mb-10">
                    <h4 className="text-l text-violet-600 dark:text-white mb-4 text-center">HACKATHON SCHEDULE</h4>
                </div>
                <div className="flex justify-evenly items-center h-60">
                    {sdldata.map((schedule,index)=> <Schedule schedule={schedule} key={index} /> )}
                </div>    
            </section>
            
            <section className="pl-40 pr-40 mb-30" >
                <h4 className="text-l text-violet-600 dark:text-white mb-15 text-center">REWARDS AND BENEFITS</h4>
                <div className="flex items-center gap-40">
                    {rewdata.map((reward,index)=> <Rewards reward={reward} key={index}/>)}
                </div>
            </section>

            <section className="pl-40 pr-40 mb-3">
                <div className="bg-black/0 text-white">
                    <h4 className="text-l text-violet-600 dark:text-white mb-15 text-center">FREQUENTLY ASKED QUESTION</h4>
                </div>
                <hr/>
                {faqsdata.map((faq,index)=> <Faqs faq={faq} key={index} />)}
                
            </section>
            <div className="h-150 w-full bg-[url('/images/bg3.png')] bg-cover bg-center text-white gap-30 ">
            </div>
        </main>
        
    )
}

export default About;