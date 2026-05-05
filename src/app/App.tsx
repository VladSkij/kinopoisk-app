import {Routing} from "@/shared/routing/Routing.tsx";
import {Header} from "@/shared/components/Header/header.tsx";
import {Footer} from "@/shared/components/Footer/Footer.tsx";
import s from './App.module.css'

export const App = () => {
    return (
       <div className={s.app}>
           <Header />
           <main className={s.main}>
               <Routing/>
           </main>
           <Footer/>
       </div>

    )
}