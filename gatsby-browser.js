import '@babel/polyfill';
import 'typeface-lato';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faBook,
    faCalculator,
    faCompass,
    faEnvelope,
    faFlask,
    faGlobe,
    faLandmark,
    faMapMarkerAlt,
    faMicroscope,
    faMusic,
    faPencilAlt,
    faPhone,
    faRocket
} from '@fortawesome/free-solid-svg-icons';
import {
    faFacebookSquare,
    faInstagram,
    faLinkedin,
    faYoutube
} from '@fortawesome/free-brands-svg-icons';

library.add(
    faBook,
    faCalculator,
    faCompass,
    faEnvelope,
    faFlask,
    faGlobe,
    faLandmark,
    faMapMarkerAlt,
    faMicroscope,
    faMusic,
    faPencilAlt,
    faPhone,
    faRocket,
    faFacebookSquare,
    faInstagram,
    faLinkedin,
    faYoutube
);

export { default as wrapRootElement } from './gatsby/wrapRootElement';
