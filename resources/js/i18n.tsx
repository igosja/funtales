import i18n from "i18next";
import {initReactI18next} from "react-i18next";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    "Welcome to React": "Welcome to React and react-i18next",
                    "new_messages_zero": "You have no new messages",
                    "new_messages_one": "You have one new message",
                    "new_messages_other": "You have {{count}} new messages",
                    "current_date": "Today is {{date}}",
                    "incoming_message": "You have a new message from {{from}}",
                    "message_contents": "They say: {{body}}",
                    "message_contents_male": "He says: {{body}}",
                    "message_contents_female": "She says: {{body}}",
                }
            },
            fr: {
                translation: {
                    "Welcome to React": "Bienvenue à React et react-i18next",
                    "new_messages_zero": "Vous n'avez aucun nouveau message",
                    "new_messages_one": "Vous avez un nouveau message",
                    "new_messages_other": "Vous avez {{count}} nouveaux messages",
                    "current_date": "Aujourd'hui, c'est {{date}}",
                    "incoming_message": "Vous avez un nouveau message de {{from}}",
                    "message_contents": "Ils disent: {{body}}",
                    "message_contents_male": "Il dit: {{body}}",
                    "message_contents_female": "Elle dit: {{body}}"
                }
            }
        },
        lng: "en",
        fallbackLng: "en",
    });

export default i18n;
