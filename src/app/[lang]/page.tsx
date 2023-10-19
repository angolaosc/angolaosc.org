import { Locale } from "../../i18n-config";
import { getDictionary } from "@/lib/get-dictionary";
import Home from "./Home";

export default async function Page(
  { params: { lang } }: { params: { lang: Locale } }) {

  const dictionary = await getDictionary(lang);

  return (

    <Home page={dictionary.page} header={[dictionary.header, lang]}
      headline={dictionary.headline} purpose={dictionary.purpose}
      motivations={dictionary.motivations} program={dictionary.program}
      ourTeam={dictionary.ourTeam} footer={dictionary.footer} />

  );
}
