import Navbar from "./Navbar";
function Hero(){
    return (
      
        
                <div className=" flex-col h-screen w-full bg-[url('/images/bg1.jpg')] bg-cover bg-center text-white gap-30">
                    
                <Navbar />
                
                <div className="flex justify-between top-20  h-90 w-screen bg-black/0 p-10 pt-90">
                    <div>
                        <div className="flex bg-violet-600 h-70 w-68 justify-center ml-10 relative z-2">
                        <span className="text-white font-bold absolute text-7xl z-3 left-55 bottom-70">CODE THE FUTURE </span>
                        <img src="images/model.png" alt="model_photo" className="absolute h-100 z-1 right-5 bottom-1"/>
                            {/* <span className="text-white font-bold ml-7 absolute text-5xl z-10">Future</span> */}
                            
                        </div>
                        <div className="flex bg-violet/0 h-20 w-68 justify-center ml-10 relative font-bold">
                            <p>Where Innovation Becomes Reality</p>
                        </div>
                    </div>
                    <div>
                        <button type="button" className="bg-purple-600 hover:bg-purple-700 hover:cursor-pointer border-2 text-sm p-5 font-medium mr-50 mt-50 h-20 w-50">Register Now</button>
                    </div>
                    
                    
                </div>
                <h4 className="text-center mt-80">ABOUT HACKATHON</h4> 
            </div>
        
        
    )
}

export default Hero;
