import React from "react"
import CommonCard from "common/components/CommonCard"
import Chart from "react-apexcharts"
import { chartOptions } from "features/chart/chartOptions"

export default function ChartWidget() {
	return (
		<CommonCard header="Chart (Dummy Data)">
			<Chart
				className="text-dark"
				options={chartOptions.options}
				series={chartOptions.series}
				type="candlestick"
				width="100%"
				height="100%"
			/>
		</CommonCard>
	)
}
