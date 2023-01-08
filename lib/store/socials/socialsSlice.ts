import { createSlice } from "@reduxjs/toolkit";
import avitoIcon from '../../../public/images/icons/avito.svg'
import instagramIcon from '../../../public/images/icons/instagram.svg'
import whatsappIcon from '../../../public/images/icons/whatsapp.svg'
import telegramIcon from '../../../public/images/icons/telegram.svg'

export interface socialsState {
    title: string,
    icon: string,
    link: string
}

const initialState: socialsState[] = [
    { title: 'Avito', icon: avitoIcon, link: 'https://www.avito.ru/user/48a202822aaf4cbddc3dfa5051cc5f37/profile?src=sharing' },
    { title: 'Instagram', icon: instagramIcon, link: 'https://www.instagram.com/stroiinvest_c_64/' },
    { title: 'WhatsApp', icon: whatsappIcon, link: 'https://api.whatsapp.com/send?phone=79272238440' },
    { title: 'Telegram', icon: telegramIcon, link: 'https://t.me/stroyinvests77' },
]

export const socials = createSlice({
    name: 'socials',
    initialState,
    reducers: {

    }
})


export const socialsReducer = socials.reducer
