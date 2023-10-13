import InputField from "./Input";
import Pulsante from "./Pulsante";
export default function NewsLetterSection() {
  return (
    <div className=" flex flex-col gap-2  justify-center items-center p-12">
      <h3 className="font-body text-white">
        1. Yes! Send me personalized tips for selling and shopping on
        SoundBridge
      </h3>
      <div className="flex gap-2 justify-center items-center">
        <InputField />
        <Pulsante content="Done" />
      </div>
    </div>
  );
}
