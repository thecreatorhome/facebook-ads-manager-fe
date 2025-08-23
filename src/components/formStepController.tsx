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

    const handlePublish = () => {
        console.log("Publish");
    };

    return (
        <div className="formStepControllerContainer">
       {formState > 2 && <div className="marginTopBottom10">By clicking "Publish," you agree to Facebook's Terms and Advertising Guidelines.</div>}
        <div className="inlineJustifiedFlex">
            <div className="inlineJustifiedFlex">
                <div className="draftBtnContainerGlobal">Close</div>
                <div className="marginLeft5 inlineJustifiedFlex textEditColor"><div className="checkFormSaveEdit marginRight5" />All edits saved</div>
            </div>
            <div className="formStateBtnController">
                {formState > 1 && formState < 3 && <div className="draftBtnContainerGlobal" onClick={handleBack}>Back</div>}
                {formState < 3 && <div className="reviewPublishContainerGlobal" onClick={handleNext}>Next</div>}
                {formState > 2 && <div className="draftBtnContainerGlobal" onClick={handleBack}>Discard draft</div>}
                {formState > 2 && <div className="draftBtnContainerGlobal createNewCampaign" onClick={handlePublish}><div className="CampaignRecordOptionTitle">Publish</div></div>}
            </div>
        </div>
        </div>
    );
};

export default FormStepController;
