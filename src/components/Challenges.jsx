import { FiArrowUpRight } from "react-icons/fi";

function Challenges({challenge}){
    return (
        <>
            <div className="flex h-40 items-center justify-center gap-10 bg-amber-200/0 w-full">
                <div className="mr-30">
                    <span>{challenge.id}</span>
                </div>
                <div className="realtive h-30 w-60 mr-20">
                    <img  src={challenge.img} alt="img1" className="object-cover h-30 w-60" />
                </div>
                <div className="text-center w-200 mr-20">
                    <span>{challenge.description}</span>
                </div>
                <div className="h-10 w-10 hover:cursor-pointer">
                    <span ><FiArrowUpRight /></span>
                </div>
                
               
            </div>
            <hr />
        </>
    );
};

export default Challenges;