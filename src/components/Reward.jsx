function Rewards({reward}){
   
    return (
        <div className="bg-black/0 text-white text-left flex-col items-center justify-center group p-8 border-2 border-violet-600 w-85 h-60 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            
                <p className="text-violet-600 mb-5 ">{reward.title}</p>
                <p>{reward.desc}</p>
        </div>
        
    );
};

export default Rewards;