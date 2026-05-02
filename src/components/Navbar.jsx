function Navbar(){
    return (
    
        
        <div className="flex justify-between items-center bg-white absolute p-5 ml-80 mr-80 mt-20 h-17 rounded-4xl text-black gap-10">
            <div className="flex justify-center p-1 h-10 w-20 "><img src="/public/images/logo.png" className="object-cover p-1"/></div>
            <div className="flex justify-between  gap-5">
                
                    <span><a href="#" className="hover:text-violet-600">About</a></span>
                    <span><a href="#" className="hover:text-violet-600">how to Participate?</a></span>
                    <span><a href="#" className="hover:text-violet-600">Challenges</a></span>
                    <span><a href="#" className="hover:text-violet-600">Schedules</a></span>
                    <span><a href="#" className="hover:text-violet-600">Rewards</a></span>
                    <span><a href="#" className="hover:text-violet-600">FAQs</a></span>
                    
               
            </div>
            <div>
                <button type="button"
         className="bg-purple-600 hover:bg-purple-700 hover:cursor-pointer rounded-full text-sm p-5 pt-3 pb-3 text-white font-medium">signin</button>
            </div>
        </div>          
        
    ); 
};

export default Navbar;