import "../styles/components/FormStepController.css";

interface FormStepControllerProps {
    setFormState: React.Dispatch<React.SetStateAction<number>>;
    formState: number;
}

const FormStepController = ({ setFormState, formState }: FormStepControllerProps) => {
    const handleNext = () => {
        setFormState(prev => prev + 1);
    };

    const handleBack = () => {
        setFormState(prev => prev - 1);
    };

    return (
        <div className="formStepControllerContainer">
            <div className="inlineJustifiedFlex">
                <div className="draftBtnContainerGlobal">Close</div>
                <div className="marginLeft5 inlineJustifiedFlex textEditColor"><div className="checkFormSaveEdit marginRight5" />All edits saved</div>
            </div>
            <div>
                {formState > 1 && <div className="draftBtnContainerGlobal" onClick={handleBack}>Back</div>}
                <div className="reviewPublishContainerGlobal" onClick={handleNext}>Next</div>
            </div>
        </div>
    );
};

export default FormStepController;
