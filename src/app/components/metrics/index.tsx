import React from "react";
import MetricItem from "./metricItem";

interface MetricType{
    title: String, 
    value: number

}
const metrics:Array<MetricType> = [
    {
        title: "Número de membros", 
        value:-1
    }, 
    {
        title: "Número de mentorados",
        value: -1
    }, 
    {
        title: "Número de desenvolvedores envagelizados", 
        value: -1
    }, {
        title: "Workshops", 
        value: 1
    }
];

function Metrics({ ...rest }) {
  return (
    <section
      {...rest}
   
    >
        <h1 className="xl:text-5xl text-3xl font-extrabold leading-[130%] md:text-center mb-12">Métricas</h1>

        <div className="flex gap-4 grid-cols-2">
            {
                metrics.map((metric:MetricType, index)=>(
                    <MetricItem key={index} title={metric.title} value={metric.value}/>
                ))
            }
        </div>
    </section>
  );
}

export default Metrics;
