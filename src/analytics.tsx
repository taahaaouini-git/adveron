import { ChartLineInteractive } from "@/components/analytics/chart-line-interactive"
import { SectionCards } from "@/components/section-cards"
import { ChartLineMultiple } from "@/components/analytics/LineChart-Multiple"
import { ChartTooltipIndicatorLine } from "@/components/analytics/ChartTooltipIndicatorLine"

export function Analytics() {
  return (
    <div className="flex flex-1 flex-col gap-4 py-4 md:gap-6 md:py-6">
      <SectionCards />
      <div className="px-4 lg:px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <ChartLineInteractive />
        <ChartLineMultiple/>
        <ChartTooltipIndicatorLine/>
      </div>
    </div>
  )
}
