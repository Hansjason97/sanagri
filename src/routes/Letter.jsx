import React, { useState, Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Dialog, Transition } from '@headlessui/react';
import FormInput from '../components/FormInput';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import samplePDF from "./letterhead.pdf";

function Letter() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [passport, setPassport] = useState("");
  const [issued, setIssued] = useState("");
  const [expire, setExpire] = useState("");
  const [pdfUrl, setPdfUrl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const today = new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });

  async function generatePdf() {
    const existingPdfBytes = await fetch(samplePDF).then(res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  const textOptions = { size: 12, font: helveticaFont, color: rgb(0, 0, 0) };
  const lineHeight = 20;
  const maxWidth = 530;
  const marginLeft = 40;
  const initialY = 750;

    const content = `
    Ambassade du Cameroun
    A l’attention du service des Visas
    Douala, le ${today},

    Objet : Lettre d’aide à l’obtention d’un visa demandé à une ambassade ou un consulat.
    
    Madame, Monsieur,

    Le Salon National de l’Agriculture 2024 ouvrira ses portes du 22 au 24 Mai 2024 à la maison du parti de Bonanjo, Douala Cameroun.
    Nous serions très heureux de pouvoir compter parmi nos visiteurs la personne dont le nom figure ci-dessous :

    M./Mme ${name}
    Nom de la société représentée : ${company}
    Nationalité : ${country}
    Date de naissance : ${dateOfBirth}
    Numéro de passeport : ${passport}
    Passeport délivré le : ${issued}
    Passeport valable jusqu'au : ${expire}

    Le séjour au Cameroun durera du 22/05/2024 au 25/05/2024.
    Nous sommes convaincus qu’il s’agit là pour ce visiteur d’une opportunité de nouer des contacts professionnels avec les exposants camerounais et de négocier des contrats. Les frais d’entrée au salon, de déplacement et d'hébergement sont entièrement à sa charge.

    Nous vous saurions gré de bien vouloir accélérer la procédure d’obtention de son visa afin de permettre sa visite du Salon National de l’Agriculture 2024.
    Nous vous remercions par avance de l'aide que vous pourrez apporter dans cette démarche et nous espérons vivement pouvoir l’accueillir lors de notre salon.

    Dans cette attente, recevez, Madame, Monsieur, l'expression de notre parfaite considération.

    Le Directeur du Salon
    Jeffe KOMBOU
    `;

    const words = content.split(' ');
  let y = initialY;
  let line = '';

  words.forEach(word => {
    const testLine = line + word + ' ';
    const { width } = helveticaFont.widthOfTextAtSize(testLine, textOptions.size);

    if (width > maxWidth && line) {
      firstPage.drawText(line.trim(), { x: marginLeft, y, ...textOptions });
      line = word + ' ';
      y -= lineHeight;
    } else {
      line = testLine;
    }
  });

  if (line) {
    firstPage.drawText(line.trim(), { x: marginLeft, y, ...textOptions });
  }

  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  setPdfUrl(url);
  setIsOpen(true);
}

  function handleSubmit(e) {
    e.preventDefault();
    generatePdf();
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Helmet>
        <title>Invitation - {t('siteTitle')}</title>
      </Helmet>
      <div className='pageTop'>
        <h1 className='lvlTwo text-white'>Lettre d'invitation</h1>
      </div>

      <div className='content py-[60px] md:py-[80px] lg:py-[140px] flex flex-col gap-6'>
        <div className='text-center'>
          <h2 className='lvlThree'>Obtenir une lettre d'invitation</h2>
          <p className='sectionSubtitle'>Veuillez remplir le formulaire ci-dessous</p>
        </div>

        <form className='py-6 my-8' onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-2 lg:grid-cols-3">
            <FormInput handleChange={(e) => setName(e.target.value)} label={"Nom"} value={name} required />
            <FormInput handleChange={(e) => setCompany(e.target.value)} label={"Société représentée"} value={company} required />
            <FormInput handleChange={(e) => setCountry(e.target.value)} label={"Nationalité"} value={country} required />
            <FormInput handleChange={(e) => setDateOfBirth(e.target.value)} label={"Date de naissance"} value={dateOfBirth} required type="date" />
            <FormInput handleChange={(e) => setPassport(e.target.value)} label={"Numéro Passport"} value={passport} required />
            <FormInput handleChange={(e) => setIssued(e.target.value)} label={"Passport délivré le"} value={issued} required type="date" />
            <FormInput handleChange={(e) => setExpire(e.target.value)} label={"Passport expire le"} value={expire} required type="date" />
          </div>
          <button type="submit" className='borderButton'>{"Envoyer"}</button>
        </form>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Votre lettre d'invitation est prête
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Cliquez sur le bouton ci-dessous pour télécharger votre lettre d'invitation.
                      </p>
                    </div>

                    <div className="mt-4">
                      {pdfUrl && (
                        <a href={pdfUrl} download="Letter.pdf" className="bg-primary px-4 py-2 text-white rounded-md">
                          Télécharger PDF
                        </a>
                      )}
                      <button
                        type="button"
                        className="ml-4 inline-flex justify-center rounded-md border border-transparent bg-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={closeModal}
                      >
                        Fermer
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </div>
  );
}

export default Letter;
