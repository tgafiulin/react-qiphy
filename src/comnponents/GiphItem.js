

function GiphItem(props) {
    const url = props.url;
    const tag = props.tag;

    return (
        <div className="giph">
            <img src={url} alt={tag} />
        </div>
    )
}

export default GiphItem;