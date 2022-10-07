import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useStore } from "src/store";
import { TwitterAnalyticsQuery, useTwitterAnalyticsQuery } from "src/generated/graphql";
import { sortByWeekdayTwiiter, sortByHour } from "src/utils/sortFunctions";

export const useTwitterHook = () => {
    const [list, setList] = useState([] as Array<any>);

    const { selectedAsa, dateRange, analysisType, setSelectedAsa } = useStore((state) => ({
        selectedAsa: state.selectedAsa,
        dateRange: state.dateRange,
        analysisType: state.analysisType,
        setSelectedAsa: state.setSelectedAsa,
    }));

    const { data, refetch } = useTwitterAnalyticsQuery({
        asaID: selectedAsa.assetId,
        startDate: dateRange.startDate,
        endDate: dateRange.endDate ? dateRange.endDate : format(new Date(), "yyyy-MM-dd"),
        hour: analysisType.hour,
        weekday: analysisType.weekdays,
    });

    let results: TwitterAnalyticsQuery["twitterAnalytics"]["results"];

    if (analysisType.weekdays) {
        results = sortByWeekdayTwiiter(data?.twitterAnalytics?.results ?? []);
    } else {
        results = sortByHour(data?.twitterAnalytics?.results ?? []);
    }

    useEffect(() => {
        refetch();
    }, [dateRange, analysisType]);

    return { results, list, setList };
};
