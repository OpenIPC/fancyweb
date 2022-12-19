import { h } from 'preact'
import FormItemWrap from '../../../../components/FormItemWrap'
import MaskedInput from 'react-text-mask'
import { useStoreon } from '../../../../App'
import { PORTS_SETTINGS_CHANGE_TEXT } from '../stores'

export const Settings = () => {
    const { dispatch, settingsPorts } = useStoreon('settingsPorts')
    console.log(settingsPorts, 'PORTS SETTINGS')

    const textSettings = settingsPorts.textSettings

    const onChangeInput = (e) => {
        dispatch(PORTS_SETTINGS_CHANGE_TEXT, {
            name: e.target.name,
            value: e.target.value,
        })
    }
    return (
        <div class="flex-1  pl-28 pr-40 py-36 bg-light h-full ">
            <div className="form-wrap">
                <FormItemWrap title="Подключения (1-20)">
                    <div class="flex flex-col w-full h-full input-field">
                        <MaskedInput
                            class="cursor-pointer w-full h-full   input"
                            placeholder="192.168.1.1"
                            name="connetions_count"
                            onChange={onChangeInput}
                            value={textSettings.connetions_count}
                            guide={false}
                            mask={[
                                /\d/,
                                /\d/,
                                /\d/,
                                '.',
                                /\d/,
                                /\d/,
                                /\d/,
                                '.',
                                /\d/,
                                '.',
                                /\d/,
                                '.',
                            ]}
                        />
                    </div>
                </FormItemWrap>
                <FormItemWrap title="TCP (1025 - 65 534)">
                    <div class="flex flex-col w-full h-full input-field">
                        <MaskedInput
                            class="cursor-pointer w-full h-full   input"
                            placeholder="192.168.1.1"
                            guide={false}
                            name="tcp_port"
                            onChange={onChangeInput}
                            value={textSettings.tcp_port}
                            mask={[
                                /\d/,
                                /\d/,
                                /\d/,
                                '.',
                                /\d/,
                                /\d/,
                                /\d/,
                                '.',
                                /\d/,
                                '.',
                                /\d/,
                                '.',
                            ]}
                        />
                    </div>
                </FormItemWrap>

                <FormItemWrap title="UDT (1025 - 65 534)">
                    <div class="flex flex-col w-full h-full input-field">
                        <MaskedInput
                            class="cursor-pointer w-full h-full   input"
                            placeholder="192.168.1.1"
                            guide={false}
                            name="udt_port"
                            onChange={onChangeInput}
                            value={textSettings.udt_port}
                            mask={[
                                /\d/,
                                /\d/,
                                /\d/,
                                '.',
                                /\d/,
                                /\d/,
                                /\d/,
                                '.',
                                /\d/,
                                '.',
                                /\d/,
                                '.',
                            ]}
                        />
                    </div>
                </FormItemWrap>
                <FormItemWrap title="RTSP">
                    <div class="flex flex-col w-full h-full input-field">
                        <MaskedInput
                            class="cursor-pointer w-full h-full   input"
                            placeholder="192.168.1.1"
                            guide={false}
                            name="rtsp_port"
                            onChange={onChangeInput}
                            value={textSettings.rtsp_port}
                            mask={[
                                /\d/,
                                /\d/,
                                /\d/,
                                '.',
                                /\d/,
                                /\d/,
                                /\d/,
                                '.',
                                /\d/,
                                '.',
                                /\d/,
                                '.',
                            ]}
                        />
                    </div>
                </FormItemWrap>
                <FormItemWrap title="HTTP">
                    <div class="flex flex-col w-full h-full input-field">
                        <MaskedInput
                            class="cursor-pointer w-full h-full   input"
                            placeholder="192.168.1.1"
                            guide={false}
                            name="http_port"
                            onChange={onChangeInput}
                            value={textSettings.http_port}
                            mask={[
                                /\d/,
                                /\d/,
                                /\d/,
                                '.',
                                /\d/,
                                /\d/,
                                /\d/,
                                '.',
                                /\d/,
                                '.',
                                /\d/,
                                '.',
                            ]}
                        />
                    </div>
                </FormItemWrap>
                <FormItemWrap title="HTTPS">
                    <div class="flex flex-col w-full h-full input-field">
                        <MaskedInput
                            class="cursor-pointer w-full h-full   input"
                            placeholder="192.168.1.1"
                            guide={false}
                            name="https_port"
                            onChange={onChangeInput}
                            value={textSettings.https_port}
                            mask={[
                                /\d/,
                                /\d/,
                                /\d/,
                                '.',
                                /\d/,
                                /\d/,
                                /\d/,
                                '.',
                                /\d/,
                                '.',
                                /\d/,
                                '.',
                            ]}
                        />
                    </div>
                </FormItemWrap>
            </div>
        </div>
    )
}
