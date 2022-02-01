import {Box} from './style'
import {getBgColorType,getFontColorType} from '../../Utils/Functions'

type PokeType = {
    name:string
}

export default function TypeBox(props:PokeType) {
    const type = props.name

    return (
    <Box style={{background:getBgColorType(type),color:getFontColorType(type)}}>
        <p>{type}</p>
    </Box>
    );
}
