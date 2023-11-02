import { useEffect, useState } from "react"

export default function MetricItem  ({title, value}:any){


    return (
        <div className="px-10 py-25">
            <div className="text-center">{value >= 0 ? value: "-"}</div>
            <div><strong>{title}</strong></div>
        </div>
    )
}