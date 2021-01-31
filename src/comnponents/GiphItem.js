

function GiphItem(props) {
    const {tag, url} = props.gif;

    return (
        <div className="giph">
            <img src={url} alt={tag} />
        </div>
    )
}

export default GiphItem;