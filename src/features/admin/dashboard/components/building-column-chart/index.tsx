"use client";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { regional3Data } from "@/mocks/regional3Data";

export default function BuildingProgressChart() {
  const categories = regional3Data.map((d) => d.name);

  // Parsing data
  const masjidTotal = regional3Data.map((d) =>
    Number(d.completeness.mosque.split("/")[0])
  );
  const masjidLengkap = regional3Data.map((d) =>
    Number(d.completeness.mosque.split("/")[1])
  );
  const mushollaTotal = regional3Data.map((d) =>
    Number(d.completeness.musholla.split("/")[0])
  );
  const mushollaLengkap = regional3Data.map((d) =>
    Number(d.completeness.musholla.split("/")[1])
  );

  const options: Highcharts.Options = {
    chart: {
      type: "column",
      backgroundColor: "#0a0a0a", // Tailwind neutral-900
      style: { fontFamily: "Inter, sans-serif" },
    },
    title: {
      text: "Data Masjid & Musholla Jatim, Bali Nusa Tenggara",
      style: { color: "#f3f4f6", fontSize: "14px" },
    },
    xAxis: {
      categories,
      labels: { style: { color: "#d1d5db" } },
    },
    yAxis: {
      min: 0,
      title: { text: "Jumlah", style: { color: "#d1d5db" } },
      gridLineColor: "#374151",
      gridLineWidth: 0,
      labels: { style: { color: "#9ca3af" } },
    },
    legend: {
      itemStyle: { color: "#f3f4f6", fontSize: "11px" },
      itemHoverStyle: { color: "#ffffff" },
      align: "center",
      verticalAlign: "bottom",
    },
    tooltip: {
      shared: true,
      backgroundColor: "#1f2937",
      borderColor: "#374151",
      style: { color: "#f9fafb" },
      formatter: function () {
        const index = 0;
        const wilayah = categories[index];
        const mosque = regional3Data[index].completeness.mosque;
        const musholla = regional3Data[index].completeness.musholla;

        return `
          <b>${wilayah}</b><br/>
          🕌 Masjid: ${mosque} (total/lengkap)<br/>
          🏠 Musholla: ${musholla} (total/lengkap)
        `;
      },
    },
    plotOptions: {
      column: {
        borderWidth: 0,
        grouping: false,
        shadow: false,
        borderRadius: 4,
      },
    },
    series: [
      // Masjid total (background)
      {
        name: "Masjid (Total)",
        type: "column",
        data: masjidTotal,
        color: "rgba(96,165,250,0.4)", // biru muda transparan
        pointPadding: 0.3,
        pointPlacement: -0.15,
      },
      // Masjid lengkap (progress)
      {
        name: "Masjid (Lengkap)",
        type: "column",
        data: masjidLengkap,
        color: "rgba(37,99,235,1)", // biru solid
        pointPadding: 0.3,
        pointPlacement: -0.15,
      },

      // Musholla total (background)
      {
        name: "Musholla (Total)",
        type: "column",
        data: mushollaTotal,
        color: "rgba(252,165,165,0.4)", // merah muda transparan
        pointPadding: 0.3,
        pointPlacement: 0.15,
      },
      // Musholla lengkap (progress)
      {
        name: "Musholla (Lengkap)",
        type: "column",
        data: mushollaLengkap,
        color: "rgba(220,38,38,1)", // merah solid
        pointPadding: 0.3,
        pointPlacement: 0.15,
      },
    ],
    credits: { enabled: false },
  };

  return (
    <div className="w-full h-full bg-neutral-950 rounded-md p-4 shadow">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        containerProps={{ className: "w-full h-full rounded-md" }}
      />
    </div>
  );
}
