import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import s from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.inner}>
                <small className={s.footerNote}>© 2025 Kinopoisk Demo · Data courtesy of TMDB.</small>
                <ul className={s.socialMediaList}>
                    <li className={s.socialMediaItem}><a href={"https://www.linkedin.com/in/vlad-skalski/"} className={s.socialMediaLink}><LinkedInIcon/></a></li>
                    <li className={s.socialMediaItem}><a href={"https://github.com/VladSkij"} className={s.socialMediaLink}><GitHubIcon/></a></li>
                    <li className={s.socialMediaItem}><a href={"https://t.me/VladSkyski"} className={s.socialMediaLink}><TelegramIcon/></a></li>
                </ul>
            </div>
        </footer>
    );
};


