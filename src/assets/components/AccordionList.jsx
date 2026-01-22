import { useState } from 'react'
import languages from "../script/languages.js"
import Accordion from './Accordion.jsx'

function AccordionList() {

    return (
        <>
            {languages.map((language) => (
                <Accordion key={language.id}
                    title={language.title}
                    description={language.description}
                />
            ))}
        </>
    )
}

export default AccordionList