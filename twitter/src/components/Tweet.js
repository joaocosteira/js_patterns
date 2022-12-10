const formatDate = (date) => `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`


const Avatar = (props) => (
    <img 
        src={props.user.avatarUrl}
        alt={props.user.name} 
        className="Avatar" 
    />
)


const User = (props) => (
    <div className="User">
        <Avatar user={props.user}/>
        <div className="User-name">
            {props.user.name}
        </div>
</div>
)


const Tweet = (props) => {

    return(
        <div className="Tweet">
            <User user={props.author} />
            <div className="Tweet-text">
                {props.text}
            </div>
            <img 
                className="Tweet-image" 
                src={props.image.imageUrl}
                alt={props.image.description} 
            />
            <div className="Tweet-date">
                {formatDate(props.date)}
            </div>
        </div>
    )
}

export default Tweet;