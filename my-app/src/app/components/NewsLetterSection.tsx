import InputField from "./Input";
import Btn from "./Btn";
import translations from "@/app/translations";
interface NewsletterSectionProps {
  language: string;
}
export default function NewsLetterSection({
  language,
}: NewsletterSectionProps) {
  const t: any = translations;
  return (
    <div className=" flex flex-col gap-2  justify-center items-center p-12">
      <h3 className="font-body text-white">{t[language].newsletter.header}</h3>
      <div className="flex gap-2 justify-center items-center max-sm:flex-col ">
        <InputField />
        <Btn content={t[language].newsletter.done} />
      </div>
    </div>
  );
}
