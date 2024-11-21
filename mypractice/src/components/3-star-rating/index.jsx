import { FaStar } from "react-icons/fa"
import { useState } from "react"
import "./styles.css"

export default function StarRating({numStars = 10}) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    function handleClick(getCurrentIndex) {
        console.log(getCurrentIndex)
        setRating(getCurrentIndex);
    }
    function handleMouseEnter(getCurrentIndex) {
        setHover(getCurrentIndex);

    }
    function handleMouseLeave() {
        setHover(rating);
    
    }
    return (
        <div className="star-rating">
           { [...Array(numStars)].map((_, index) => {
                index += 1;
                return <FaStar
                    className={index <= (hover || rating) ? 'active': 'inactive'}
                    key={index}
                    on
                    
                    
                    Click={() => handleClick(index)}
                    onMouseMove={()=> handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave()}
                    size={40}></FaStar>
            } )}
        </div>
    )
}