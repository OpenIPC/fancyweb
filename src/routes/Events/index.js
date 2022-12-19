import { h, React } from 'preact'
import MainContentHead from '../../components/MainContentHead/MainContentHead'

const Events = (props) => {
    console.log(props, 'Events')
    return (
        <div class="w-full  main-content overflow-hidden">
            <MainContentHead title={props.title} />
            <p>{props.title}</p>
        </div>
    )
}

export default Events
