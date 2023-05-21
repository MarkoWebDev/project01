import { FC } from "react";
import "../../styles/aboutUsInfo.scss";
import useMediaQuery from "../../shared/MediaQueryHook/MediaQuery";

interface AboutInfoProps {}

const AboutInfo: FC<AboutInfoProps> = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className="info-section">
      <p className={isMobile ? "info-mobile" : "info"}>
        Otvorene su prijave za Građanski inkubator, seriju radionica za mlade
        koje će se od 5. studenog, subotom od 11 do 13 sati održavati u Klubu
        Zona. Riječ je o pet radionica na kojima će sudionici će, između
        ostalog, govoriti o svojim viđenjima demokracije i građanstva. Upoznat
        će se s radom udruga za mlade, ulogama Vijeća učenika i Savjeta mladih.
        Osvijestit će vlastite stereotipe i predrasude te naučiti razliku između
        percepcije i interpretacije.Također, naučit će i bolje prepoznati
        korupciju te se upoznati s mogućnostima njenog suzbijanja. - Građanski
        inkubator povezat će mlade sličnih interesa, ali i ponuditi priliku za
        stjecanje znanja iz područja demokratskog građanstva, aktivizma,
        ljudskih prava, diskriminacije i korupcije. Sudionici će teme obrađivati
        kroz grupni i individualni rad, rasprave, igranje uloga i sličnih metoda
        koje će im koristan sadržaj učiniti dodatno zanimljivim. Voditelj
        radionice bit će Petar Kelvišer, a dubina obrade tema i dinamika rada
        prilagodit će se interesima sudionika - najavljuje Goran Biličić iz Info
        zone. Sudjelovanje je besplatno, a rezervacija mjesta moguća je putem
        prijavnice dostupne na <span className="info-bold">klubzona.net</span>.
      </p>
    </div>
  );
};

export default AboutInfo;
