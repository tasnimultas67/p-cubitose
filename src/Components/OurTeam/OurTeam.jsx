import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const OurTeam = () => {
    const [teams, setTeams] = useState([])
    useEffect(() => {
        fetch("https://cubitose-backend-production.up.railway.app/teams")
            .then(res => res.json())
        .then(data => setTeams(data))
    },[])
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3">
                
                <div className="col-span-2 mt-20">
                    <p className="text-lg">We believe the best solutions lay at the intersection of intelligent design and strong engineering. Our team works continually to protect and instill this vision in every process, project and team member.</p>
                </div>
                <div className="hidden lg:block"></div>
            </div>
            {/* Team */}
            <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-14 mt-14">
                {
                    teams.map(team => <div key={team._id}>
                        <div className="group/team overflow-hidden">
                            <div className="overflow-hidden rounded-md">
                                <img className="h-[25rem] w-full object-cover object-top rounded-md group-hover/team:scale-125 duration-300 ease-in-out" src={team.teamImg} alt={`${team.teamName} image`} srcSet="" title={`${team.teamName} Image`} />
                            </div>
                            <h2 className="text-lg font-semibold mt-5">{team.teamName}</h2>
                            <p>{team.teamRole}</p>
                            {/* Social Links */}
                            <div className="flex gap-4 mt-3">
                                {/* Facebook */}
                                {team?.teamFacebook.length>5 && <Link to={`https://www.facebook.com/${team.teamFacebook}`} target="_blank" title="FaceBook">
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{fill:"black"}} height="1em" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
                                </Link>}
                                {/* Instagram */}
                                {team?.teamInstagram.length>5 && <Link to={`https://www.instagram.com/${team.teamInstagram}`} target="_blank" title="Instagram">
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ fill: "black" }} height="1em" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                                </Link>}
                                {/* Twitter */}
                                {team?.teamTwitter.length>5 && <Link to={`https://twitter.com/${team.teamTwitter}`} target="_blank" title="Twitter">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" style={{ fill: "black" }}><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
                                </Link>}
                                {/* LinkedIn */}
                                {team?.teamLinkedIn.length>5 && <Link to={`https://www.linkedin.com/in/${team.teamLinkedIn}`} target="_blank" title="LinkedIn">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
                                </Link>}
                                {/* Personal Website */}
                                {
                                    team?.teamWebsite.length>5 && <Link to={team.teamWebsite} target="_blank" title="Personal Website">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" style={{ fill: "black" }}><path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/></svg>
                                    </Link>
                                }
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default OurTeam;