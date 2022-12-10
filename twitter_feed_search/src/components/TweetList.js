import TweetCategory from "./TweetCategory";
import TweetRow from "./TweetRow";

const TweetList = ({ tweets,filterText,inThisLocation }) => {

    const rows = [];
    let lastCategory = null;


    tweets.forEach( tweet => {

        if(tweet.text.toLowerCase().indexOf(filterText.toLowerCase()) === -1){
            return;
        }

        if(inThisLocation && !tweet.isLocal){
            return;
        }

        if(tweet.category !== lastCategory){
            rows.push(<TweetCategory category={tweet.category} key={tweet.category} />)
        }

        rows.push(<TweetRow tweet={tweet} key={tweet.text} />)

        lastCategory = tweet.category
    })

    return(
        <table>
            <thead>
                <tr>
                    <td>Tweet Text</td>
                    <td>Retweets</td>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )
}

export default TweetList;