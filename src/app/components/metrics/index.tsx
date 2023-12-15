import { i18n } from "@/translate/i18n";
import { METRICAS } from "./data";
import MetricItem from "./metricItem";

export default function Metrics(){
  return (
    <section  id="metrics">
    <div className="flex flex-col items-center justify-center gap-12 w-full max-w-[1216px] p-6">
      <h2 className="dark:text-white xl:text-5xl text-3xl font-extrabold leading-[130%] md:text-center ">
      {i18n.t('metrics.title')}
      </h2>

      <div className="flex items-center gap-10 w-full px-10 justify-center flex-wrap">
        {METRICAS.map((metrica, index)=>{
          return (<MetricItem key={index} title={metrica.title} value={metrica.value} />);
        })}
      </div>
    </div>
  </section>
  );
}
