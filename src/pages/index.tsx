  
/* UI */
import { HomeContainer } from "@/UI/containers/homebox";
import { HomeAboutMeContainer } from "@/UI/containers/aboutme";
import { FooterContainer } from "@/UI/containers/footer";

/* Components */
import { HomeBox } from "@/components/homebox";
import { AboutMeBox } from "@/components/aboutme";
import { FooterBox } from "@/components/footer";

/* TsParticules */
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { ISourceOptions } from "tsparticles-engine";
import { useCallback } from "react";
import particlesOptions from "../lib/particles.json";

/*React Boostrap css*/
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
}, []);

  return (
    <div>
      <Particles options={particlesOptions as ISourceOptions} init={particlesInit}/>
      <HomeContainer>
        <HomeBox></HomeBox>
      </HomeContainer>
      <HomeAboutMeContainer>
        <AboutMeBox></AboutMeBox>
      </HomeAboutMeContainer>
      <FooterContainer>
        <FooterBox></FooterBox>
      </FooterContainer>
    </div>
  );
}
