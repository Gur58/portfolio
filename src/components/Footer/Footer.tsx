import TelegramIcon from '@/assets/icons/telegram.svg?react'
import LogoIcon from '@/assets/icons/logo.svg?react'

function Footer() {
    return (
        <div className="flex items-center justify-center border-t py-5">
            <LogoIcon className="w-9 h-9 dark:text-[#b5b5b5] text-[#554949] rounded-full p-1.5" />
            <span>2023 Developed by GUR</span>
            <button type="button">
                <TelegramIcon
                    className="w-9 h-9 hover:cursor-pointer active:bg-gray-200 rounded-full p-1 text-[#2AABEE]"
                    onClick={
                        () => window.open('https://t.me/gurbalagur')
                    }
                />
            </button>
        </div>
    )
}

export default Footer;
