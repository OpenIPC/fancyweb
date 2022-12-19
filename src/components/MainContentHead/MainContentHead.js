import { h, React } from 'preact'
import Match from 'preact-router/match'
import Modal from '../common/Modal/Modal'
import { useStoreon } from '../../App'
import { MODAL_EXIT } from '../../utlis/constants'
import { CHANGE_IS_OPEN_MODAL } from '../../store/modalStore'

const MainContentHead = (props) => {
    const { dispatch, modalStore } = useStoreon('modalStore')
    const isOpenModal = modalStore.isOpenModal === MODAL_EXIT
    const setIsOpenModal = (option) => {
        dispatch(CHANGE_IS_OPEN_MODAL, option)
    }
    const handleClose = () => {
        setIsOpenModal(null)
    }
    return (
        <div
            className="h-12 w-full pl-28 pr-40 flex  items-center"
            style={{ boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.16)' }}
        >
            <div className="text-secondary text-sm ">
                <Match path="/">
                    {({ matches, path, url }) => {
                        if (matches || path.startsWith(url)) {
                            return (
                                <span className="text-secondary">
                                    {props.title || ''}
                                </span>
                            )
                        }
                    }}
                </Match>
            </div>
            <div
                className="cursor-pointer ml-auto fill-current text-primary hover:text-accent"
                onClick={() => setIsOpenModal(MODAL_EXIT)}
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 4.35418V5L13.7453 5.00002C14.1245 5.00002 14.4381 5.28154 14.4883 5.64713L14.4953 5.74878L14.502 10H13.002L12.9965 6.50002L12 6.5L12.0005 11.005L13.002 11.004L13.003 11H14.504L14.503 11.004H19.442L17.7196 9.28026C17.4534 9.01395 17.4292 8.59728 17.6471 8.3037L17.7198 8.2196C17.9861 7.95338 18.4027 7.92924 18.6963 8.14715L18.7804 8.21978L21.777 11.2174C22.043 11.4835 22.0674 11.8997 21.85 12.1933L21.7775 12.2774L18.7809 15.2808C18.4884 15.5741 18.0135 15.5746 17.7203 15.282C17.4537 15.0161 17.429 14.5994 17.6465 14.3056L17.7191 14.2214L19.432 12.504L12.0005 12.505L12 17.001L13.0139 17.0015L13.007 13.5H14.508L14.5152 17.7502C14.5158 18.1304 14.2335 18.4448 13.867 18.4946L13.7652 18.5015L12 18.501V19.25C12 19.7164 11.5788 20.0697 11.1196 19.9886L2.61955 18.4873C2.26121 18.424 2 18.1126 2 17.7487V5.75002C2 5.38271 2.26601 5.06945 2.62847 5.00993L11.1285 3.6141C11.5851 3.53911 12 3.89145 12 4.35418ZM8.50215 11.5C7.94868 11.5 7.5 11.9487 7.5 12.5022C7.5 13.0556 7.94868 13.5043 8.50215 13.5043C9.05562 13.5043 9.5043 13.0556 9.5043 12.5022C9.5043 11.9487 9.05562 11.5 8.50215 11.5Z"
                        fill="#212330"
                    />
                </svg>
            </div>
            <Modal open={isOpenModal} handleClose={handleClose}>
                <div className="mr-12">
                    <div className="h-8" />
                    <h2 className="text-lg text-primary">Выйти из системы?</h2>
                    <div className="h-12" />
                    <div className="flex items-center buttons-group">
                        <button
                            className="button ghost mr-12"
                            onClick={handleClose}
                        >
                            {' '}
                            Отмена{' '}
                        </button>
                        <button className="button accent"> Выйти</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

// const mapMobxToProps = ({ store }) => {
//   return {
//     openMenuTabIndex: store.sideMenuStore.openMenuTabIndex,
//     setOpenMenuTabIndex: store.sideMenuStore.setOpenMenuTabIndex,
//   }
// }
// const SideMenu = inject(mapMobxToProps)(observer(_SideMenu))
// export default SideMenu
export default MainContentHead
