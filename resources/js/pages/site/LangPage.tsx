import MainLayout from "../layout/MainLayout";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";

function LangPage() {
    const {t, i18n} = useTranslation();

    const locales = {
        en: {title: 'English'},
        fr: {title: 'Francais'},
    };

    const [messages, setMessages] = useState(0);

    return (
        <MainLayout>
            <ul>
                {Object.keys(locales).map((locale) => (
                    <li key={locale}>
                        <button
                            style={{fontWeight: i18n.resolvedLanguage === locale ? 'bold' : 'normal'}}
                            type="submit"
                            onClick={() => i18n.changeLanguage(locale)}
                        >
                            {locales[locale].title}
                        </button>
                    </li>
                ))}
            </ul>
            <h1>{t('Welcome to React')}</h1>
            <button onClick={() => setMessages(messages + 1)}>+1 message</button>
            <p>
                {t('new_messages', {count: messages})}
            </p>
            <p>
                {t('current_date', {date: new Date()})}
            </p>
            <p>
                {t('incoming_message', {from: 'Ann'})}<br/>
                {t('message_contents', {body: 'How are you doing?', context: 'female'})}
            </p>
            <p>
                {t('incoming_message', {from: 'Bob'})}<br/>
                {t('message_contents', {body: 'How are you doing?', context: 'male'})}
            </p>
            <p>
                {t('incoming_message', {from: 'People'})}<br/>
                {t('message_contents', {body: 'How are you doing?'})}
            </p>
        </MainLayout>
    );
}

export default LangPage;
