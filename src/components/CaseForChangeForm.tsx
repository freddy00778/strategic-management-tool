import InputField from "./InputField";
import Button from "./Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CaseForChangeForm = () => {
  const [term, setTerm] = useState("");
  const [term1, setTerm1] = useState("");
  const [term2, setTerm2] = useState("");
  const [term3, setTerm3] = useState("");
  const [term4, setTerm4] = useState("");
  const [term5, setTerm5] = useState("");
  const [term6, setTerm6] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const handleSave = () => {
    navigate("/project/dashboard/scope");
  };
  return (
    <form
      action=""
      className="flex flex-col w-full h-screen overflow-y-auto max-h-[10000px]  scrollbar-thin scrollbar-thumb-zinc-200"
    >
      <h1 className="text-center text-primary-500 text-[26px]">
        Final Draft Case For Change
      </h1>
      <div className="px-20 py-10">
        <InputField
          id="user-name"
          //   label="We will be relying on .... to assist us with the implementing the change successfully"
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="textarea"
          className="w-full h-[400px] text-[16px] bg-primary-50 bg-opacity-20"
          disabled={true}
          placeholder="The Type why we want to change wants to Type what we want to change. We have taken this decision because Type why we want to change. The Type Name will be implemented on Select the implementation date from a calendar . Type Department and stakeholders will be affected by the change, and we are doing everything in our power to make this transition as smooth as possible. We will be relying on Type Buyers, Engineers, Accountants and contractors to assist us in implementing the change successfully. The biggest effect of the change will be on The productivity of Department A. We will start by abc. The second step is to def. This will be followed by ghi. Finally, we will jkl. We realise that you may be concerned about pqr. We would like to stu. We are also aware that some stakeholders may be expecting uired. In this regards we would like to www. With this change the affected stakeholders will mno. Furthermore, we would like to note that xxx. To keep you updated on progress with this change implementation, xyz"
        />
      </div>
      <div className="flex flex-col w-full px-20 py-10 space-y-16  ">
        <div className="w-full flex items-center border-b border-b-border py-4">
          <h1 className="text-[22px] text-black">
            What is in it for the affected stakeholders? What would the benefits
            be to the affected stakeholders?
          </h1>
        </div>
        <h1>
          Complete the sentence “With this change the affected stakeholders will
        </h1>
        <div className="flex flex-col w-full space-y-24">
          <InputField
            id="user-name"
            //   label="We will be relying on .... to assist us with the implementing the change successfully"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            type="textarea"
            className="w-full h-[200px] "
            placeholder="Type in the benefits"
            characterLimit={120}
          />
        </div>
      </div>
      <div className="flex flex-col w-full px-20 py-10 space-y-16  ">
        <div className="w-full flex items-center border-b border-b-border py-4">
          <h1 className="text-[22px] text-black">
            What may affected stakeholders be concerned about ( that will affect
            them personally?)
          </h1>
        </div>
        <div className="flex flex-col w-full space-y-24">
          <InputField
            id="user-name"
            //   label="We will be relying on .... to assist us with the implementing the change successfully"
            value={term1}
            onChange={(e) => setTerm1(e.target.value)}
            type="textarea"
            className="w-full h-[200px] "
            placeholder="Type in the effects"
            characterLimit={120}
          />
        </div>
      </div>
      <div className="flex flex-col w-full px-20 py-10 space-y-16  ">
        <div className="w-full flex items-center border-b border-b-border py-4">
          <h1 className="text-[22px] text-black">
            What would you like to say to address these concerns.
          </h1>
        </div>
        <h1>
          Complete the sentence “ We realize that you may be concerned about and
          would like to (insert your response i.e. assure you .... / advise that
          .... )
        </h1>
        <div className="flex flex-col w-full space-y-24">
          <InputField
            id="user-name"
            //   label="We will be relying on .... to assist us with the implementing the change successfully"
            value={term2}
            onChange={(e) => setTerm2(e.target.value)}
            type="textarea"
            className="w-full h-[200px] "
            placeholder="Type in your response"
            characterLimit={120}
          />
        </div>
      </div>
      <div className="flex flex-col w-full px-20 py-10 space-y-16  ">
        <div className="w-full flex items-center border-b border-b-border py-4">
          <h1 className="text-[22px] text-black">
            Only complete this if relevant- What may affected stakeholders be
            expecting (that will benefit them personally? )
          </h1>
        </div>
        <h1>
          Complete the sentence “We are also aware that some stakeholders may be
          expecting ...”
        </h1>
        <div className="flex flex-col w-full space-y-24">
          <InputField
            id="user-name"
            //   label="We will be relying on .... to assist us with the implementing the change successfully"
            value={term3}
            onChange={(e) => setTerm3(e.target.value)}
            type="textarea"
            className="w-full h-[200px] "
            placeholder="Type in your response"
            characterLimit={120}
          />
        </div>
      </div>
      <div className="flex flex-col w-full px-20 py-10 space-y-16  ">
        <div className="w-full flex items-center border-b border-b-border py-4">
          <h1 className="text-[22px] text-black">
            Only complete this if relevant- What would you like to say to manage
            these expectations?
          </h1>
        </div>
        <h1>
          Complete the sentence “ With regards to we would like to ...(i.e.
          confirm that ... OR point out that ... Mention that ... )
        </h1>
        <div className="flex flex-col w-full space-y-24">
          <InputField
            id="user-name"
            //   label="We will be relying on .... to assist us with the implementing the change successfully"
            value={term4}
            onChange={(e) => setTerm4(e.target.value)}
            type="textarea"
            className="w-full h-[200px] "
            placeholder="Type in your response"
            characterLimit={120}
          />
        </div>
      </div>
      <div className="flex flex-col w-full px-20 py-10 space-y-16  ">
        <div className="w-full flex items-center border-b border-b-border py-4">
          <h1 className="text-[22px] text-black">
            Only complete this if relevant- Any major risk or information
            stakeholders should take not of?
          </h1>
        </div>

        <div className="flex flex-col w-full space-y-24">
          <InputField
            id="user-name"
            //   label="We will be relying on .... to assist us with the implementing the change successfully"
            value={term5}
            onChange={(e) => setTerm5(e.target.value)}
            type="textarea"
            className="w-full h-[200px] "
            placeholder="Type in your response"
            characterLimit={120}
          />
        </div>
      </div>
      <div className="flex flex-col w-full px-20 py-10 space-y-16  ">
        <div className="w-full flex items-center border-b border-b-border py-4">
          <h1 className="text-[22px] text-black">
            Future communication: Where can they find more information? / Who
            will be providing more information and when in future?
          </h1>
        </div>

        <div className="flex flex-col w-full space-y-24">
          <InputField
            id="user-name"
            //   label="We will be relying on .... to assist us with the implementing the change successfully"
            value={term6}
            onChange={(e) => setTerm6(e.target.value)}
            type="textarea"
            className="w-full h-[200px] "
            placeholder="Type in your response "
            characterLimit={120}
          />
        </div>
      </div>
      <div className="flex w-full px-20 justify-between my-6">
        <Button
          variant="primary"
          size="lg"
          onClick={handleSave}
          className="rounded-lg w-[40%] bg-white border-primary-500 border-2 text-primary-500"
          type="button"
        >
          Download Final Draft
        </Button>
        <Button
          variant="primary"
          size="lg"
          onClick={handleSave}
          className="rounded-lg w-[40%]"
          type="button"
        >
          Save & Continue
        </Button>
      </div>
    </form>
  );
};

export default CaseForChangeForm;
