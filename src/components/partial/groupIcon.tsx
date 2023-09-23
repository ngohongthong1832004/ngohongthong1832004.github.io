
import "./partial.css"

type GroupIconProps = {
    title : string,
    icons : string[]
}


const GroupIcon:React.FC<GroupIconProps> = (props : GroupIconProps) => {
    return (
        <div className='group-icon'>
            <h4 className="title">{props.title}</h4>
            <ul>
                {props.icons.map((icon, index) => {
                    return (
                        <li key={index}>
                            <img src={icon} alt='avatar' />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default GroupIcon