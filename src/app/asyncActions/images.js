import { addGiphs } from '../tagReducer'

const fetchGiphs = (tags) => {
    return (dispatch) => {
        fetch(`https://api.giphy.com/v1/gifs/random?api_key=gTJAO48YcpmrADUyo4opy4ES4g7iDBxx&tag=${tags}`)
            .then(response => response.json())
            .then(json => dispatch(addGiphs({
                tags: tags, 
                giphs: json
            })))
    }
}

export default fetchGiphs;