import moment from "moment";
import { useEffect, useState } from "react";



const DashHome = () => {
    const [currentTime, setCurrentTime] = useState(moment().format("dddd, Do MMMM YYYY, h:mm:ss a,"))
    useEffect(() => {
        const timer = setInterval(() => {
      setCurrentTime(moment().format("dddd, Do MMMM YYYY, h:mm:ss a,"));
        }, 1000);
        return () => clearInterval(timer);
    },[])
    return (
        <div className="">
            <div>
                <div className="space-y-1">
                    <p className="text-sm">{currentTime}</p>
                    <h2 className="text-xl font-semibold">Good Morining, Cubitose</h2>   
                </div>
            </div>
        </div>
    );
};

export default DashHome;