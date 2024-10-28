import "./app.css"

export function TwiterFollowCard ({username, name, isfollow}) {
    return(
       <article className="tw-followCard">
        <header className="tw-header">
            <img className="tw-imagen" src="https://r2-us-west.photoai.com/1726197655-a084e60fa79f1e504722e8fb921f23b4-3.png" alt="avatar " />
            <div className="tw-headerDiv">
            <strong>{name}</strong>
            <span className="tw-headerSpan">@{username}</span>
            </div>
        </header>
        <aside>
            <button className="tw-button">
                {isfollow}
            </button>
        </aside>
       </article>
 
)}