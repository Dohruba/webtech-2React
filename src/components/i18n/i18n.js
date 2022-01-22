import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          description:{
            tripname: 'Tripname: ',
            start: 'Start: ',
            end: 'End: ',
            country: 'Country: ',
            editBtn: 'Edit',
            addBtn: 'Add',
            delBtn: 'Delete',
            submitBtn: 'Submit',
            dropdownCountry: 'Please select country'
          },
          loginForm:{
            password: "Password",
            button: "Login",
            welcome1: "Login and manage your trips",
            welcome2: "simply with your own travel map."
          },
          header:{
            title: "Your travelmap to Nirvana",
            button1: "Map",
            button2: "Add trip",
            button3: "Edit trip",
            button4: "Logout"
          },
        }
      },
      de: {
        translation: {
          description:{
            tripname: 'Reisename: ',
            start: 'Startdatum: ',
            end: 'Enddatum: ',
            country: 'Reiseziel: ',
            editBtn: 'Bearbeiten',
            addBtn: 'Hinzufügen',
            delBtn: 'Löschen',
            submitBtn: 'Änderungen übernehmen',
            dropdownCountry: 'Bitte Land wählen'
          }
          ,
          loginForm:{
            password: "Passwort",
            button: "Einloggen",
            welcome1: "Jetzt einloggen und deine Reisen",
            welcome2: "ganz einfach über deine individuelle Reisekarte verwalten."
          },
          header:{
            title: "Deine Reisekarte ins Nirwana",
            button1: "Karte",
            button2: "Reise hinzufügen",
            button3: "Reise bearbeiten",
            button4: "Logout"
          }
          // here we will place our translations...
        }
      }
    }
  });

export default i18n;
