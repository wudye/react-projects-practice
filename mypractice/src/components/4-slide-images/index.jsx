
import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";
export default function SlideImages({url, limit = 5, page = 1}) {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages(getUrl) {
     
        try {
            
            setLoading(true);
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();


            if (data) {
                setImages(data);
                setLoading(false);
            }
        } catch (error) {
            setLoading(false);
            setErrorMsg("error.message");
            
        }
    }
    useEffect(()=> {
        if (url !== "") {
            fetchImages(url);
        }
    },[url]);

    console.log(images);
    function handleLeftClick() {
        setCurrentSlide(currentSlide === 0 ?
            images.length - 1 : currentSlide - 1
        )

    };

    function handleRightClick() {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    };
    if (loading) {
        return <div> loading...</div>;
    }
    if (errorMsg !== null) {
        return <div> something went wrong</div>;
    }
    return (
        <div className="container">
            <BsArrowLeftCircleFill className="arrow arrow-left"
            onClick={handleLeftClick}/>
                
            {
                images && images.length 
                ? images.map((image, index) => (
                    <img
                    key={image.id}
                    src={image.download_url}
                    alt={image.dow}
                    className={
                        currentSlide === index ?
                        "current-image" : "current-image hide-image"}
                    />
                )) : null}   

            <BsArrowRightCircleFill className="arrow arrow-right" 
            onClick={handleRightClick}/>
                <span className="circle-indicators">
                    {
                        images && images.length ?
                        images.map((_, index) => (
                            <button 
                            key={index}
                            className={
                                currentSlide === index ?
                                "current-indicator" : "current-indicator hide-indicator"}
                            onClick={() => setCurrentSlide(index) }
                            ></button>

                        )) : null
                    }
                </span>


        </div>

    )
}












