
export default function Suggest({data, handleClick}) {

    return (
        <ul>
            {
                data && data.length > 0 ?
                data.map((user, id) => <li 
                onClick={handleClick}
                key={id}>{user}</li>) : null 
            }
        </ul>
    )

}
