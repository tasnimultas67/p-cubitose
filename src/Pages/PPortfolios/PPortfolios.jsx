import { useLoaderData } from "react-router-dom";


const PPortfolios = () => {
    const loadedPortfolios = useLoaderData()
    return (
        <div>
            <h1>This is portfolio page</h1>
            <p>portfolio length { loadedPortfolios.length}</p>
        </div>
    );
};

export default PPortfolios;