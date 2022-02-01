import {Box} from './style'
import {getColorType} from '../../Utils/Functions'

type PokeType = {
    name:string
}

export default function TypeBox(props:PokeType) {
    const type = props.name

    return (
    <Box style={{background:getColorType(type)}}>
        <p>{type}</p>
    </Box>
    );
}
