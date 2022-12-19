import { h } from 'preact'
import Logo from '../../assets/logo.svg'
import { Input } from '../../components/common/inputs/Input'
import { InputPassword } from '../../components/common/inputs/InputPassword'
import Switch from '../../components/common/Switch/Switch'
import Button from '../../components/common/Button/Button'
import { route } from 'preact-router'

const Home = () => (
    <div class="flex w-full h-screen">
        <div class="flex flex-col w-2/3 h-full justify-center items-center bg-primary">
            <img src={Logo} class=" mb-24" />
            <p class="text-white text-lg logo-descr">
                Лишь некоторые особенности внутренней политики будут описаны
                максимально
            </p>
        </div>
        <div class="flex flex-col  items-center justify-center w-1/3 h-full bg-white">
            <form
                class="flex flex-col items-center  w-full"
                onSubmit={(e) => {
                    e.preventDefault()
                    route('/main')
                }}
            >
                <div class="flex flex-col justify-center form-login">
                    <h5 class=" text-3xl mb-16">Вход</h5>
                    <div class="flex flex-col mb-36 input-group">
                        <Input classInput={'input-undeline'} />
                        <InputPassword underline={true} />
                    </div>
                    <div class="flex justify-between">
                        <p class="select-none">Оставаться в системе</p>
                        <Switch />
                    </div>
                    <div class="flex w-full mt-48">
                        {/* <Button label="Войти" variant="accent"  /> */}
                        <button class="button accent w-full">Войти</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
)

export default Home
