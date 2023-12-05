import { useLoaderData } from "react-router-dom";


const PPortfolios = () => {
    const loadedPortfolios = useLoaderData()
    return (
        <div className="bg-white py-28">
            <div className="w-11/12 m-auto">
                <h1>This is portfolio page</h1>
                <p>portfolio length {loadedPortfolios.length}</p>
                {/* Portfolio Card */}
                <div>

                </div>
            </div>
        </div>
    );
};

export default PPortfolios;