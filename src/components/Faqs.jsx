import { FaBlackTie } from "react-icons/fa6";

function Faqs({faq}){
    return (
        <>
            
            <div className="flex p-5 h-30  gap-20 items-centre">
                <div className="mr-20 w-2">
                    <span className={faq.id%2==0?"text-violet-600":"text-white"}>{faq.id}</span>
                    </div>
                <div className="w-60 mr-50">
                     <span className={faq.id%2==0?"text-violet-600":"text-white"}>{faq.ques}</span>
                     </div>
                <div>
                    <span>{faq.ans}</span>
                </div>
                
            </div>
            <hr/>
        </>
    );
};

export default Faqs;
