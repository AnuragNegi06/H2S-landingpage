import { LuNotebookPen } from "react-icons/lu";
import { HiLightBulb } from "react-icons/hi";
import { MdGroups } from "react-icons/md";
import { FaHouseFlag } from "react-icons/fa6";
import { MdRocketLaunch } from "react-icons/md";

function Participate(){
 

    return (
    
    
         
                 <div className="flex bg-black/0 gap-10 items-top justify-center mb-8"> 
                    <div className="flex-col w-40 px-12 text-left sm:px-0 justify-centre p-2">
                        <div className="flex  mb-4 rounded-2xl bg-violet-500/0 border-2 h-10 p-1 sm:w-12 sm:h-12 ">
                            <LuNotebookPen className="h-8 w-8" />
                            
                        </div>
                        <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase text-white">
                            Register for Hackathon
                        </h6>
                        <div className="mb-2 text-gray-200">
                            Sign up now to participate in the hackathon.
                        </div>
                    </div>

                     <div className="flex-col w-40 px-12 text-left sm:px-0 justify-centre p-2">
                        <div className="flex  mb-4 rounded-2xl bg-violet-500/0 border-2 h-10 p-1 sm:w-12 sm:h-12 ">
                            <MdGroups className="h-8 w-8" />
                            
                        </div>
                        <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase text-white">
                            Form your Teams
                        </h6>
                        <div className="mb-2 text-gray-200">
                           Collaborate with like-minded individuals to form teams.
                        </div>
                    </div>

                     <div className="flex-col w-40 px-12 text-left sm:px-0 justify-centre p-2">
                        <div className="flex  mb-4 rounded-2xl bg-violet-500/0 border-2 h-10 p-1 sm:w-12 sm:h-12 ">
                            <FaHouseFlag className="h-8 w-8" />
                            
                        </div>
                        <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase text-white">
                           Choose a Challenge
                        </h6>
                        <div className="mb-2 text-gray-200">
                            Select from the list of challenges provided.
                        </div>
                    </div>

                     <div className="flex-col w-40 px-12 text-left sm:px-0 justify-centre p-2">
                        <div className="flex  mb-4 rounded-2xl bg-violet-500/0 border-2 h-10 p-1 sm:w-12 sm:h-12 ">
                            <MdRocketLaunch className="h-8 w-8" />
                            
                        </div>
                        <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase text-white">
                            Innovate and Develop
                        </h6>
                        <div className="mb-2 text-gray-200">
                           Work on your solutions, supported by resources and mentorship.
                        </div>
                    </div>

                     <div className="flex-col w-40 px-12 text-left sm:px-0 justify-centre p-2">
                        <div className="flex  mb-4 rounded-2xl bg-violet-500/0 border-2 h-10 p-1 sm:w-12 sm:h-12 ">
                            <HiLightBulb  className="h-8 w-8" />
                            
                        </div>
                        <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase text-white">
                            Submit Your Solution
                        </h6>
                        <div className="mb-2 text-gray-200">
                            Present your innovative ideas for evaluation
                        </div>
                    </div>
                    
                   
                     
                </div> 
       
         
    )
};

export default Participate;