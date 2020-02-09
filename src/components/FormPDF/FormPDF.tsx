import React, { FunctionComponent } from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import moment from 'moment';
import * as koepel from '../../images/favicon.png';

interface Props {
    data: any;
}

const newline = '\n';

const styles = StyleSheet.create({
    page: {
        fontSize: 12
    },
    section: {
        margin: 20,
        padding: 20
    }
});

const bold = {
    fontFamily: 'Helvetica-Bold'
};

const italic = {
    fontFamily: 'Helvetica-Oblique'
};

const FormPDF: FunctionComponent<Props> = ({ data }) => {
    const timeGenerated = moment().format('DD-MM-YYYY HH:mm:ss');
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Image
                        style={{
                            width: '32px',
                            height: '32px',
                            position: 'absolute',
                            left: '20px'
                        }}
                        src={`${koepel}`}
                    />
                    <Text
                        style={{
                            fontSize: 20,
                            position: 'absolute',
                            top: '10px',
                            left: '56px',
                            color: '#5b34ad',
                            fontFamily: 'Helvetica-Bold'
                        }}
                    >
                        Hageveld
                    </Text>
                    <Text>{newline.repeat(2)}</Text>
                    <Text>
                        <Text style={italic}>Leerling</Text> {newline}
                        <Text style={bold}>Roepnaam</Text>: {data.roepnaam} {newline}
                        <Text style={bold}>Officiële voornamen</Text>: {data.voornamen} {newline}
                        <Text style={bold}>Tussenvoegsel</Text>: {data.tussenvoegsel || '(leeg)'}{' '}
                        {newline}
                        <Text style={bold}>Achternaam</Text>: {data.achternaam} {newline}
                        <Text style={bold}>Geslacht</Text>: {data.geslacht} {newline}
                        <Text style={bold}>Telefoonnummer</Text>: {data.telefoonnummer || '(leeg)'}{' '}
                        {newline}
                        <Text style={bold}>BSN</Text>: {data.bsn} {newline}
                        <Text style={bold}>Geboortedatum</Text>: {data.geboortedatum} {newline}
                        <Text style={bold}>Geboorteplaats</Text>: {data.geboorteplaats} {newline}
                        <Text style={bold}>Postcode</Text>: {data.postcode} {newline}
                        <Text style={bold}>Huisnummer</Text>: {data.huisnummer} {newline}
                        <Text style={bold}>Straat</Text>: {data.straat} {newline}
                        <Text style={bold}>Woonplaats</Text>: {data.woonplaats} {newline}
                        {newline}
                        <Text style={italic}>Basisschool</Text> {newline}
                        <Text style={bold}>Advies</Text>: {data.advies} {newline}
                        <Text style={bold}>Basisschool</Text>: {data['basisschool-naam']} (
                        {data['basisschool-locatie']}) {newline}
                        <Text style={bold}>Leerkracht</Text>: {data['basisschool-leerkracht-naam']}{' '}
                        ({data['basisschool-leerkracht-geslacht']}) {newline}
                        {newline}
                        <Text style={italic}>Ouder/verzorger 1</Text> {newline}
                        <Text style={bold}>Voorletters</Text>: {data['verzorger-1-voorletters']}{' '}
                        {newline}
                        <Text style={bold}>Tussenvoegsel</Text>:{' '}
                        {data['verzorger-1-tussenvoegsel'] || '(leeg)'} {newline}
                        <Text style={bold}>Achternaam</Text>: {data['verzorger-1-achternaam']}{' '}
                        {newline}
                        <Text style={bold}>Geslacht</Text>: {data['verzorger-1-geslacht']} {newline}
                        <Text style={bold}>Telefoonnummer</Text>:{' '}
                        {data['verzorger-1-telefoonnummer'] || '(leeg)'} {newline}
                        <Text style={bold}>E-mailadres</Text>: {data['verzorger-1-email']} {newline}
                        <Text style={bold}>Postcode</Text>:{' '}
                        {data['verzorger-1-postcode'] || '(gelijk aan leerling)'} {newline}
                        <Text style={bold}>Huisnummer</Text>:{' '}
                        {data['verzorger-1-huisnummer'] || '(gelijk aan leerling)'} {newline}
                        <Text style={bold}>Straat</Text>:{' '}
                        {data['verzorger-1-straat'] || '(gelijk aan leerling)'} {newline}
                        <Text style={bold}>Woonplaats</Text>:{' '}
                        {data['verzorger-1-woonplaats'] || '(gelijk aan leerling)'} {newline}
                        {newline}
                        <Text style={italic}>Ouder/verzorger 2</Text> {newline}
                        <Text style={bold}>Voorletters</Text>:{' '}
                        {data['verzorger-2-nvt'] ? '(nvt)' : data['verzorger-2-voorletters']}{' '}
                        {newline}
                        <Text style={bold}>Tussenvoegsel</Text>:{' '}
                        {data['verzorger-2-nvt']
                            ? '(nvt)'
                            : data['verzorger-2-tussenvoegsel'] || '(leeg)'}{' '}
                        {newline}
                        <Text style={bold}>Achternaam</Text>:{' '}
                        {data['verzorger-2-nvt'] ? '(nvt)' : data['verzorger-2-achternaam']}{' '}
                        {newline}
                        <Text style={bold}>Geslacht</Text>:{' '}
                        {data['verzorger-2-nvt'] ? '(nvt)' : data['verzorger-2-geslacht']} {newline}
                        <Text style={bold}>Telefoonnummer</Text>:{' '}
                        {data['verzorger-2-nvt']
                            ? '(nvt)'
                            : data['verzorger-2-telefoonnummer'] || '(leeg)'}{' '}
                        {newline}
                        <Text style={bold}>E-mailadres</Text>:{' '}
                        {data['verzorger-2-nvt'] ? '(nvt)' : data['verzorger-2-email']} {newline}
                        <Text style={bold}>Postcode</Text>:{' '}
                        {data['verzorger-2-nvt']
                            ? '(nvt)'
                            : data['verzorger-2-postcode'] || '(gelijk aan leerling)'}{' '}
                        {newline}
                        <Text style={bold}>Huisnummer</Text>:{' '}
                        {data['verzorger-2-nvt']
                            ? '(nvt)'
                            : data['verzorger-2-huisnummer'] || '(gelijk aan leerling)'}{' '}
                        {newline}
                        <Text style={bold}>Straat</Text>:{' '}
                        {data['verzorger-2-nvt']
                            ? '(nvt)'
                            : data['verzorger-2-straat'] || '(gelijk aan leerling)'}{' '}
                        {newline}
                        <Text style={bold}>Woonplaats</Text>:{' '}
                        {data['verzorger-2-nvt']
                            ? '(nvt)'
                            : data['verzorger-2-woonplaats'] || '(gelijk aan leerling)'}{' '}
                        {newline}
                        {newline}
                        <Text style={italic}>Overige informatie</Text> {newline}
                        <Text style={bold}>Aantal kinderen op Hageveld</Text>:{' '}
                        {data['aantal-kinderen-hageveld'] || '(nvt)'} {newline}
                        <Text style={bold}>Toestemming adres SRH</Text>:{' '}
                        {data['adres-toestemming-SRH'] ? 'Ja' : 'Nee'} {newline}
                        <Text style={bold}>Toestemming plaatsing website</Text>:{' '}
                        {data['toestemming-plaatsing-website'] ? 'Ja' : 'Nee'} {newline}
                        {newline.repeat(2)}
                        <Text style={italic}>Dit document is gegenereerd op {timeGenerated}</Text>
                    </Text>
                </View>
            </Page>
        </Document>
    );
};

export default FormPDF;
