import { Banner } from "../../components/Banner";
import { Benefits } from "../../components/Benefits";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Jobs } from "../../components/Jobs";
import { Numbers } from "../../components/Numbers";
import { Patners } from "../../components/Partners";
import { Testimony } from "../../components/Testimony";

export function Home() {
    return (
        <div>
            <Header />
            
            <Banner />
            <Patners />
            <Jobs />
            <Benefits />
            <Numbers />
            <Testimony />
            <Footer />
        </div>
    )
}