import { useLoaderData } from "react-router-dom";
import PortfolioCard from "../../Components/PortfolioCard/PortfolioCard";

const portfolios = [
    {"portfolioTitle": "Dhaka Startup", "shortDescription": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit repellendus tempora assumenda, harum atque perferendis. Totam tenetur corporis accusantium at.", "portfolioThumbnail": "https://images.unsplash.com/photo-1682687220198-88e9bdea9931?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "portfolioLink": "#"},
    {"portfolioTitle": "Dhaka Startup", "shortDescription": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit repellendus tempora assumenda, harum atque perferendis. Totam tenetur corporis accusantium at.", "portfolioThumbnail": "https://images.unsplash.com/photo-1682687220198-88e9bdea9931?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "portfolioLink": "#"},
    {"portfolioTitle": "Dhaka Startup", "shortDescription": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit repellendus tempora assumenda, harum atque perferendis. Totam tenetur corporis accusantium at.", "portfolioThumbnail": "https://images.unsplash.com/photo-1682687220198-88e9bdea9931?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "portfolioLink": "#"},
    {"portfolioTitle": "Dhaka Startup", "shortDescription": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit repellendus tempora assumenda, harum atque perferendis. Totam tenetur corporis accusantium at.", "portfolioThumbnail": "https://images.unsplash.com/photo-1682687220198-88e9bdea9931?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "portfolioLink": "#"},
    {"portfolioTitle": "Dhaka Startup", "shortDescription": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit repellendus tempora assumenda, harum atque perferendis. Totam tenetur corporis accusantium at.", "portfolioThumbnail": "https://images.unsplash.com/photo-1682687220198-88e9bdea9931?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "portfolioLink": "#"},
]

const PPortfolios = () => {
    const loadedPortfolios = useLoaderData()
    return (
        <div className="bg-white py-24">
            <div className="w-11/12 m-auto">
                {/* Portfolio Card */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
                    {
                        portfolios.map(portfolio => <PortfolioCard portfolio={portfolio} key={portfolio.portfolioTitle}>

                        </PortfolioCard>)
                    }
                </div>
            </div>
        </div>
    );
};


export default PPortfolios;