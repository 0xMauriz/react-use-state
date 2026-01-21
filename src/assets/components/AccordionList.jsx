
import { useState } from 'react'
import Languages from "../script/languages"
import AccordionList from "./AccordionList"

function Accordion() {

    return (
        <>
            {Languages.map((language) => (
                <AccordionList
                />
            ))}
        </>
    )
}

export default Accordion