import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";



const DashHome = () => {
        const { user} = useContext(AuthContext)
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
                    <h2 className="text-xl font-semibold">Good Morining, {user.displayName ? <span>{ user.displayName}</span>: <span>Cubitose</span>}</h2>   
                </div>
            </div>
        </div>
    );
};

export default DashHome;