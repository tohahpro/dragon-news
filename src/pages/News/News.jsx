import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { useEffect } from "react";
import { useState } from "react";




const News = () => {

    const newsData = useLoaderData()
    const { id } = useParams()



    const [news, setNews] = useState({})

    useEffect(() => {
        const findNews = newsData.find(item => item._id === id)
        setNews(findNews)
    }, [newsData, id])



    const { title, image_url, details } = news

    return (
        <div>
            <Header></Header>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-lg font-semibold">Dragon News</h2>
                    <p>{id}</p>
                    <div className="card w-full bg-base-100 mb-6">
                        <figure><img src={image_url} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>

                            <p>{details}</p>


                        </div>
                    </div>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>

            </div>


        </div>

    );
};

export default News;