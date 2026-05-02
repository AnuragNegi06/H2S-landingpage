function Schedule( {schedule}){
    return (
                <div className="flex-col bg-amber-100/0 h-60 w-70 text-left p-5">
                    
                    <p className="text-violet-600 pt-10">{schedule.title}</p>
                    <p className="text-violet-600 mb-8">{schedule.desc}</p>
                    <input type="range" min="0" max={schedule.timetaken} className="w-30 text-violet-600 mb-5"/>
                    <p>{schedule.date}</p>
                </div>
            
    );
};

export default Schedule;