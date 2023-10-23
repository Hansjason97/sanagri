import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import FormInput from '../components/FormInput';

import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';


function Letter() {

  const {t} = useTranslation();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState("");
  const [passport, setPassport] = useState("");
  const [issued, setIssued] = useState("");
  const [expire, setExpire] = useState("");

  function handleSubmit(e){
    e.preventDefault();
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
          <div class="grid gap-6 mb-6 md:grid-cols-2 lg:grid-cols-3">
            <FormInput handleChange={(e)=>setName(e.target.value)} label={"Nom"} value={name} required  />
            <FormInput handleChange={(e)=>setCompany(e.target.value)} label={"Société représentée"} value={company} required  />
            <FormInput handleChange={(e)=>setCountry(e.target.value)} label={"Nationalité"} value={country} required  />
            <FormInput handleChange={(e)=>setDate(e.target.value)} label={"Date de naissance"} value={date} required  type="date"/>
            <FormInput handleChange={(e)=>setPassport(e.target.value)} label={"Numéro Passport"} value={passport} required  />
            <FormInput handleChange={(e)=>setIssued(e.target.value)} label={"Passport délivré le"} value={issued} required  type="date"/>
            <FormInput handleChange={(e)=>setExpire(e.target.value)} label={"Passport expire le"} value={expire} required  type="date"/>
      
          </div>
          <button className='borderButton'>{"Envoyer"}</button>
        </form>
        {/* <PDFDownloadLink document={<MyDocument/>} fileName='Letter'>
        {({loading}) => (loading ? 'Loading document' : <button className="bg-primary px-4 py-2 text-white">Download</button>)}
      </PDFDownloadLink> */}
      </div>
      

    </div>
  )
}

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
export const MyDocument = ({name, company, country, date, passport, issued, expire}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

export default Letter