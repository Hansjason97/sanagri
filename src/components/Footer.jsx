import React from 'react'
import IconListItem from './IconListItem'
import DefaultButton from './DefaultButton'
import { useTranslation } from 'react-i18next'

function Footer() {

  const {t} = useTranslation();

  return (
    <div>
      <div className='content py-[60px] md:py-[80px] lg:py-[160px] flex flex-col gap-8 items-center md:gap-12 lg:gap-[60px] smooth'>
        <div className='flex flex-col gap-3 text-center' id='contact'>
          <h2 className='lvlOne'>
            {t('contact.title')}
          </h2>
          <p className='sectionSubtitle'>
          {t('contact.sub')}
          </p>
        </div>
        <a href="mailto:contact@sanagri.cm"><button className='px-8 py-4 border border-black text-xl lg:text-2xl font-medium'>{t('contact.button')}</button></a>
        <div className='flex flex-col gap-5 lg:flex-row lg:gap-[120px]'>
          <IconListItem icon={"/phoneIcon.svg"}>
            <a href="tel:+237696105414">(+237) 696 105 414</a>
            <a href="tel:+237655728725">(+237) 655 728 725</a>
          </IconListItem>
          <IconListItem icon={"/mailIcon.svg"}>
            <a href="mailto:contact@sanagri.cm">contact@sanagri.cm</a>
          </IconListItem>
        </div>
      </div>
      <div className='w-full border-t border-gray-600 py-10 md:py-[50px] lg:py-[60px] smooth'>
        <div className='content flex flex-col items-center gap-5 lg:flex-row lg:justify-between'>
          <p>
            {t('contact.by')}
          </p>
          <DefaultButton text={t('download')} link={'https://drive.google.com/file/d/1gxomOV4uujmFBjtP4MdXq_aMn0-9cH2W/view?usp=drivesdk'}/>
        </div>
      </div>
    </div>
  )
}

export default Footer