import { useEffect, useRef, useState } from "react";
import Image from 'next/image';

interface MetricItemProps{
  title: string,
  value: number
}
export default function MetricItem({title, value}: MetricItemProps){


  //especie da barra de progresso
  const barRef = useRef(null);

  //intervalo de tempo de cada passo (em milisegundos)
  const stepInterval = 100;

  //tempo em segundos que animação vai durar

  const duration_animation = 2;

  //valor de um passo na contagem
  const step =   Math.ceil((value / (1000 / stepInterval)) / duration_animation);

  //estado dos valores alterando
  const [currentValue, setCurrentValue] = useState(0);
  useEffect(()=>{

    //timer para efeito de contagem
    const id_interval = setTimeout(()=>{

      if(currentValue + step < value){
        if(barRef.current){
          barRef.current.style.width = Math.ceil(((currentValue  + step)/value) * 100) + '%';
        }
        setCurrentValue(currentValue + step);
      }
      else{
        if(barRef.current){
          barRef.current.style.width = '100%';
        }
        setCurrentValue(value);
        clearTimeout(id_interval);
      }
    }, stepInterval);
    return ()=>{
      clearTimeout(id_interval);
    }
  }, [currentValue]);
  return (
    <div className="flex flex-col py-4 px-8 rounded-sm max-w-[100%]  w-52">
      <Image className="block mx-auto mb-4"  src={'/metrics.png'} width='22' height='22' alt=''/>
      <div className="font-semibold text-center mb-4">{title}</div>
      <div className="text-center mb-4">{currentValue}</div>
      <div className="bg-btn h-0.5" ref={barRef}></div>
    </div>
  );
}
