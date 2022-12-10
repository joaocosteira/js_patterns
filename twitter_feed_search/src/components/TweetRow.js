import TweetList from "./TweetList";

const TweetRow = ({ tweet }) => {

    const color = tweet.isLocal ? 'red' : 'inherit';

    return(
        <tr>
            <td><span style={{ color }}>{tweet.text}</span></td>
            <td>{TweetList.retweets}</td>
        </tr>
    )
}

export default TweetRow