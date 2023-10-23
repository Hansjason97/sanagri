import React from "react"
import SectionTitle from "./components/SectionTitle"
import Image from "./components/Image"
import ListItem from "./components/ListItem";
import DefaultButton from "./components/DefaultButton";
import { useTranslation } from "react-i18next";

function App() {

  const {t} = useTranslation();
  
  const logos = [
    {image: "/CUD.png", alt:"CUD"}, {image:"/Neo.png", alt:"Neo"}, {image:"/kameleon.png", alt:"Kameleon"}, {image:"/empire.png", alt:"Empire media group"}, {image:"/africalink.png", alt:"AfricaLink"}
  ];
  const activities = [
    {
      title: "activity1Title",
      subtitle: "activity1",
      key: 1
    },
    {
      title: "activity2Title",
      subtitle: "activity2",
      key: 2
    },
    {
      title: "activity3Title",
      subtitle: "activity3",
      key: 3
    },
    {
      title: "activity4Title",
      subtitle: "activity4",
      key: 4
    },
    {
      title: "activity5Title",
      subtitle: "activity5",
      key: 5
    },
    {
      title: "activity6Title",
      subtitle: "activity6",
      key: 6
    },
    {
      title: "activity7Title",
      subtitle: "activity7",
      key: 7
    },
    {
      title: "activity8Title",
      subtitle: "activity8",
      key: 8
    }
  ]

  return (
    <React.Fragment>
      <main className="mainContent">
        <div className="content flex flex-col items-start gap-3">
          <p className="mainSubtitle">
            {t('date')}
          </p>
          <h1 className="lvlOne">
          {t('mainTitle')}
          </h1>
          <a href="#join" className="flex gap-3 group">
            <img src="/ArrowWhite.svg" alt="icon" className="w-10 md:w-11 lg:w-12 h-auto" />
            <span className="text-[24px] md:text-[28px] lg:text-[32px] group-hover:pl-2 transition-all duration-150 ease-linear">{t('more')}</span>
          </a>
          <div className="flex flex-wrap gap-8 mt-5">
            <img src="/CM.png" alt="cm" className="w-[75px] h-[75px] object-contain"/>
            <img src="/PRC.jpg" alt="prc" className="w-[75px] h-[75px] object-contain"/>
            <img src="/minader.jpg" alt="minader" className="w-[75px] h-[75px] object-contain"/>
          </div>
        </div>
      </main>
      <section className="content sectionLvl1" id="about">
        <div className="textDiv">
          <SectionTitle title={t('aboutTitle')} subtitle={t('aboutSub')} />
          <p>
          {t('aboutText')}
          </p>
          <DefaultButton text={t('download')} link={"#"} big/>
        </div>
        <Image image={"/woman0.jpg"} alt={"about"}/>
      </section>

      <section className="content sectionLvl1">
        <div className="textDiv">
          <SectionTitle title={t('goalsTitle')} subtitle={t('goalsSub')} />
            <ul role="list" className="defaultList">
              <li>
                {t('goals1')}
              </li>
              <li>
                {t('goals2')}
              </li>
              <li>
                {t('goals3')}
              </li>
              <li>
                {t('goals4')}
              </li>
              <li>
                {t('goals5')}
              </li>
              <li>
                {t('goals6')}
              </li>
            </ul>
        </div>
        <Image image={"/image0.jpg"} alt={"image"}/>
      </section>

      <section className="content sectionLvl1">
        <div className="textDiv">
          <SectionTitle title={t('opportunityTitle')} subtitle={t('opportunitySub')} />
          <div className="flex flex-col gap-3">
            <p className="italic">
            {t('opportunityText')}
            </p>
            <p className="text-gray-500">
            {t('opportunityText2')}
            </p>
          </div>
        </div>
        <Image image={"/pr.jpg"} alt={"S.E. Paul Biya"}/>
      </section>
      <section className="content flex flex-col gap-6 pb-[60px] lg:pb-[100px]">
        <h3 className="lvlThree">
          {t('partners')}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 place-items-center gap-8">
          {logos.map(({image, alt}) =>(
            <img src={image} alt={alt} key={alt} className="max-w-[150px] h-[100px] object-contain"/>
          ))}
        </div>
      </section>

      <section className="content sectionLvl1" id="activities">
          <div className="textDiv">
            <SectionTitle title={t('activitiesTitle')} subtitle={t('activitiesSub')}/>
            <div className="flex flex-col gap-5">
              {
                activities.map(({title, subtitle, key})=>(
                  <ListItem key={key} title={t(title)} subtitle={t(subtitle)}/>
                ))
              }
            </div>
          </div>
          <Image image={"/expo.jpg"} alt={"expo"}/>
      </section>

      <section className="content sectionLvl1" id="join">
        <div className="textDiv">
              <SectionTitle title={t('joinTitle')} subtitle={t('joinSub')}/>
              <p>
              En participant en tant qu’exposant ou partenaire, vous bénéficiez immédiatement de toute l’attraction mobilisé autour de cet événement.
              35000 à 50000 visiteurs sont attendu chaque jour, une force commerciale et marketing non négligeable; soit 210,000 à 300,000 visiteurs reçus à l’issus du Salon…Quelqu’en soit ce que produit ou service vous proposez, vous vendrez!
              </p>
              <DefaultButton text={t('pricing')} link={"https://wa.me/+237696105414"} />
        </div>
        <Image image={"/expo1.jpg"} alt={"stands"}/>
      </section>
    </React.Fragment>
  )
}

export default App
