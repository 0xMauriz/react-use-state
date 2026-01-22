import { useState } from 'react'
import languages from "../script/languages.js"
import Accordion from './Accordion.jsx'

function AccordionList() {

    const [activeAccordion, setactiveAccordion] = useState(null);

    return (
        <>
            {languages.map((language) => (
                <Accordion key={language.id}
                    title={language.title}
                    description={language.description}
                    isOpen={activeAccordion === language.id}
                    onAccordionToggle={() => setactiveAccordion(language.id)}
                />
            ))}
        </>
    )
}

export default AccordionList