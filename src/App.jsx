import { SectionWrapper, Download, Features, Hero, Data, ClubSpace, Form } from './components'
import assets from './assets';


const App = () => {
  return (
    <>
      <Hero/>
      <SectionWrapper 
        title="Suivez les classements et calendriers des équipes du club"
        description="Accédez facilement aux informations des différents championnats"
        mockupImg={assets.ebb7}
        reverse
      />
      <Data />
      <SectionWrapper 
        title="Retrouvez les rencontres du jour de votre club"
        description="Recherchez les résultats par journée"
        mockupImg={assets.ebb6}
        reverse
      />
      <ClubSpace />
      <Download />
      {/* <Features /> */}
      {/* <Form /> */}

      <div className="footer banner04">
        <p>Contact : </p>
        <p> romain.noeppel@eckbolsheim-basket.fr</p>
      </div>
    </>
  );
}

export default App;
