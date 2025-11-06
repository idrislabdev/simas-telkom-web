"use client";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { regional3Data } from "@/mocks/regional3Data";
import { useEffect, useRef } from "react";

export default function MushollaDonutChart() {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  // Ambil data musholla per wilayah
  const data = regional3Data
    .filter((d) => d.name !== "Keseluruhan")
    .map((d) => ({
      name: d.name,
      y: d.totalMusholla,
    }));

  const totalMusholla = data.reduce((sum, d) => sum + d.y, 0);

  const options: Highcharts.Options = {
    chart: {
      type: "pie",
      style: { fontFamily: "Inter, sans-serif" },
    },
    title: {
      text: `<span style="font-size:28px;color:#000;">${totalMusholla}</span><br><span style="font-size:12px;color:#000;">Total Musholla</span>`,
      align: "center",
      verticalAlign: "middle",
      y: 20,
      x: -65,
    },
    tooltip: {
      pointFormat: "<b>{point.y}</b> Musholla ({point.percentage:.1f}%)",
      backgroundColor: "#1f2937",
      style: { color: "#f9fafb" },
    },
    legend: {
      enabled: true,
      align: "right",
      verticalAlign: "middle",
      itemStyle: { color: "#000", fontSize: "10px" },
      itemHoverStyle: { color: "#111827" },
    },
    plotOptions: {
      pie: {
        innerSize: "65%",
        size: "100%",
        borderWidth: 0,
        showInLegend: true,
        dataLabels: {
          enabled: true,
          distance: -15,
          format: "{y}",
          style: {
            color: "#ffffff",
            fontSize: "13px",
            textOutline: "none",
            fontWeight: "500",
          },
        },
      },
    },
    // 🎨 Warna beda dari masjid agar lebih mudah dibedakan
    colors: ["#ef4444", "#f97316", "#facc15"], // merah → oranye → kuning
    series: [
      {
        name: "Jumlah Musholla",
        type: "pie",
        data,
      },
    ],
  };

  // Reflow otomatis
  useEffect(() => {
    const handleResize = () => {
      chartComponentRef.current?.chart?.reflow();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <HighchartsReact
      ref={chartComponentRef}
      highcharts={Highcharts}
      options={options}
      containerProps={{ className: "w-full h-full rounded-md" }}
    />
  );
}
