import { h } from 'preact'
import MainContentHead from '../../components/MainContentHead/MainContentHead'
const NotFoundPage = (props) => {
  console.log(props, 'Events')
  return (
    <div class="w-full">
      <MainContentHead title={props.title} />
      <p>{props.title}</p>
    </div>
  )
}

export default NotFoundPage
