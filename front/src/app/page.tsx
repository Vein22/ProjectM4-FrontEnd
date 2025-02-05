import Card from "@/components/cards/cards";
import React from "react";

export const Home: React.FC = () => {
    return (
        <div>
            <h1>Page</h1>

            <Card title="Card 1" price={333}/>
            <Card title="Card 2" price={666}/>

        </div>
    )
}

export default Home;