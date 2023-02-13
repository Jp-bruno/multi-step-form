import TextInput from "../TextInput";
import FormSectionTemplate from "./FormSectionTemplate";


export default function FormSection1() {
  return (
      <FormSectionTemplate
        title="Personal info"
        description="Please provide your name, email address, and phone number."
        id="1"
      >
        <TextInput
          title="Name"
          type="text"
          maxLength={50}
          required
        />
        <TextInput
          title="Email Address"
          type="email"
          maxLength={50}
          required
        />
        <TextInput
          title="Phone Number"
          type="number"
          required
        />
      </FormSectionTemplate>
  );
}
