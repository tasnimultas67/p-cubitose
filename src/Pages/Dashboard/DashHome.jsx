import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ClockIcon} from '@heroicons/react/24/outline';



const DashHome = () => {
        const { user} = useContext(AuthContext)
    const [currentTime, setCurrentTime] = useState(moment().format("dddd, Do MMMM YYYY, h:mm:ss a,"))
    useEffect(() => {
        const timer = setInterval(() => {
      setCurrentTime(moment().format("dddd, Do MMMM YYYY, h:mm:ss a"));
        }, 1000);
        return () => clearInterval(timer);
    }, [])
    
    var myDate = new Date();
    var hours= myDate.getHours();
    var greet;

    if (hours < 12)
        greet =  "Morning";
    else if (hours >= 12 && hours <= 17)
        greet = "Afternoon";
    else if (hours >= 17 && hours <= 24)
        greet = "Evening";

    return (
        <div className="">
            <div>
                <div className="space-y-3 backdrop-blur-2xl bg-dashBg p-5 w-fit rounded-md shadow-md">
                    <p className="text-sm 2xl:text-xl flex items-center gap-3"><ClockIcon className="h-4 w-4 2xl:w-6 2xl:h-6"></ClockIcon>{currentTime}</p>
                    <h2 className=" text-black"><span className="text-lg 2xl:text-xl">Good {greet}</span>, {user.displayName ? <span className="text-2xl 2xl:text-3xl font-semibold">{ user.displayName}</span>: <span className="text-2xl 2xl:text-3xl font-semibold">Cubitose</span>}</h2>   
                </div>
            </div>
        </div>
    );
};

export default DashHome;