
function Accordion(props) {




    const { title, description, isOpen, onAccordionToggle } = props;

    function handleOpen() {
        setIsOpen((current) => !current)
    }

    return (
        <>
            <div className="accordion rounded px-2">
                <div className="accordion-title d-flex rounded">
                    <button onClick={onAccordionToggle} className="w-100 bg-primary" type="button">
                        <h2 className='fs-5'> {title}
                        </h2>
                    </button>
                </div>
            </div>
            <div id="collapseOne" className="accordion-collapse collapse show" >
                {isOpen && <div className="w-100 accordion-body">
                    <p>{description}</p>
                </div>}
            </div>
        </>
    )
}

export default Accordion
