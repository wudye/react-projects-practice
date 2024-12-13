
import "./styles.css";
export default function Card({user}) {
    const {avatar_url,name, login, created_at, followers, following, public_repos, url} = user;
   
   const createData = new Date(created_at);
   return <div className="user">
        <div>
            <img src={avatar_url} alt="user" className="avatar" />
        </div>
        <div>
            <a href={`https://github.com/${login}`}>{name || login}</a>
            <p>join on {`${createData.getDate()} ${createData.toLocaleString('default', { month: 'short' })}
             ${createData.getFullYear()}`}</p>
        </div>
        <div className="stats">
            <div>
                <p>public_repos</p>
                <p>{public_repos}</p>

            </div>
            <div>
                <p>followers</p>
                <p>{followers}</p>
                
            </div>
            <div>
                <p>following</p>
                <p>{following}</p>
                
            </div>
        </div>
    </div>;
}