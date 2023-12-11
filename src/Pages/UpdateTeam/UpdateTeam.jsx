import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateTeam = () => {
    const teamData = useLoaderData()
    const { _id, teamName, teamRole, teamImg, teamFacebook, teamInstagram, teamTwitter, teamLinkedIn, teamWebsite } = teamData
    console.log(teamData);
    const navigate = useNavigate()
    const from = "/dashboard/manage-teams"
    const [team, setTeam] = useState({
        teamName : "",
        teamRole : "",
        teamImg : "",
        teamFacebook : "",
        teamInstagram : "",
        teamTwitter : "",
        teamLinkedIn : "",
        teamWebsite : "",
    })

    const handleSubmitTeam = (e) => {
        e.preventDefault()
        const form = e.target;
        const teamName = form.teamName.value;
        const teamRole = form.teamRole.value;
        const teamImg = form.teamImg.value;
        const teamFacebook = form.teamFacebook.value;
        const teamInstagram = form.teamInstagram.value;
        const teamTwitter = form.teamTwitter.value;
        const teamLinkedIn = form.teamLinkedIn.value;
        const teamWebsite = form.teamWebsite.value;

        const teamInfo = { teamName, teamRole, teamImg, teamFacebook, teamInstagram, teamTwitter, teamLinkedIn, teamWebsite }
        // setTeam(teamInfo)
        console.log(teamInfo);
        fetch(`https://cubitose-backend-production.up.railway.app/teams/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(teamInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire(
                    'Good job!',
                    `Successfully Updated ${teamName} Information`,
                    'success'
                    )
                    navigate(from, { replace: true })
                    form.reset()
                }
            })

    }
    return (
        <>
            <div className="backdrop-blur-2xl bg-dashBg shadow-md p-5 rounded-md">
                <form onSubmit={handleSubmitTeam} className="space-y-3">
                    <div>
                        {/* Team Name*/}
                        <div>
                            <label htmlFor="Portfolio" className="block text-sm font-medium leading-6 text-gray-900">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2">
                                <input
                                id="teamName"
                                name="teamName"
                                    type="text"
                                    placeholder='example: John Doe'
                                    defaultValue={teamName}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-themeColor sm:text-sm sm:leading-6 px-3 bg-white/50"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                        <div className="col-span-2 space-y-3">
                        {/* Team Role*/}
                        <div>
                            <label htmlFor="Portfolio" className="block text-sm font-medium leading-6 text-gray-900">
                                Role <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2">
                                <input
                                id="teamRole"
                                name="teamRole"
                                    type="text"
                                    placeholder='example: Web Developer'
                                    required
                                    defaultValue={teamRole}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-themeColor sm:text-sm sm:leading-6 px-3 bg-white/50"
                                />
                            </div>
                        </div>
                        {/* Team Image*/}
                        <div className="">
                            <label htmlFor="Portfolio" className="block text-sm font-medium leading-6 text-gray-900">
                                Image <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-2">
                                <input
                                id="teamImg"
                                name="teamImg"
                                    type="url"
                                    placeholder='Image Link'
                                    defaultValue={teamImg}
                                    required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-themeColor sm:text-sm sm:leading-6 px-3 bg-white/50"
                                />
                            </div>
                        </div>
                        </div>
                        {/* Input Info */}
                        <div className="space-y-3">
                            
                            
                            {/* Facebook Link*/}
                            <div>
                                <label htmlFor="Portfolio" className="block text-sm font-medium leading-6 text-gray-900">
                                    Facebook
                                </label>
                                <div className="mt-2">
                                    <input
                                    id="teamFacebook"
                                    name="teamFacebook"
                                        type="text"
                                        defaultValue={teamFacebook}
                                        placeholder='Facebook Link'
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-themeColor sm:text-sm sm:leading-6 px-3 bg-white/50"
                                    />
                                </div>
                            </div>
                            {/* Instagram Link*/}
                            <div>
                                <label htmlFor="Portfolio" className="block text-sm font-medium leading-6 text-gray-900">
                                    Instagram
                                </label>
                                <div className="mt-2">
                                    <input
                                    id="teamInstagram"
                                    name="teamInstagram"
                                        type="text"
                                        defaultValue={teamInstagram}
                                        placeholder='Instagram Link'
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-themeColor sm:text-sm sm:leading-6 px-3 bg-white/50"
                                    />
                                </div>
                            </div>
                            {/* Twitter Link*/}
                            <div>
                                <label htmlFor="Portfolio" className="block text-sm font-medium leading-6 text-gray-900">
                                    Twitter
                                </label>
                                <div className="mt-2">
                                    <input
                                    id="teamTwitter"
                                    name="teamTwitter"
                                        type="text"
                                        defaultValue={teamTwitter}
                                        placeholder='Twitter Link'
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-themeColor sm:text-sm sm:leading-6 px-3 bg-white/50"
                                    />
                                </div>
                            </div>
                            {/* LinkedIn Link*/}
                            <div>
                                <label htmlFor="Portfolio" className="block text-sm font-medium leading-6 text-gray-900">
                                    LinkedIn
                                </label>
                                <div className="mt-2">
                                    <input
                                    id="teamLinkedIn"
                                    name="teamLinkedIn"
                                        type="text"
                                        defaultValue={teamLinkedIn}
                                        placeholder='LinkedIn Link'
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-themeColor sm:text-sm sm:leading-6 px-3 bg-white/50"
                                    />
                                </div>
                            </div>
                            {/* Website Link*/}
                            <div>
                                <label htmlFor="Portfolio" className="block text-sm font-medium leading-6 text-gray-900">
                                    Website
                                </label>
                                <div className="mt-2">
                                    <input
                                    id="teamWebsite"
                                    name="teamWebsite"
                                        type="text"
                                        defaultValue={teamWebsite}
                                        placeholder='Website Link'
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-themeColor sm:text-sm sm:leading-6 px-3 bg-white/50"
                                    />
                                </div>
                            </div>
                            <button className="text-center bg-themeColor w-full text-white rounded py-1.5" type="submit">Submit Team</button>
                        </div>
                    </div>
                    
                </form>
            </div>  
        </>
    );
};

export default UpdateTeam;