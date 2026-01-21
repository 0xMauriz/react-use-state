import { useState } from 'react'
import Languages from "../script/languages"

function Accordion() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div classNameName="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Accordion
