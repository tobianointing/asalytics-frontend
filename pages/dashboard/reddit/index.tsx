import type { NextPage } from "next";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { PrimaryTable } from "src/components/PrimaryTable";
import { SummaryBarChart } from "src/components/SummaryBarChart";
import { SentimentBarChart } from "src/components/SentimentBarChart";
import { useRedditAnalyticsQuery } from "src/generated/graphql";
import { DashboardLayout } from "src/layouts/DashboardLayout";
import { DashboardAssetSocial } from "src/sections/DashboardAssetSocials";
import { GithubAnalysisSummary } from "src/sections/GithubAnalysisSummary";
import { GithubSubLinks } from "src/sections/GithubSubLinks";
import { TwitterAnalysisSummary } from "src/sections/TwitterAnalysisSummary";
import { TwitterSubLinks } from "src/sections/TwitterSubLinks";
import { useStore } from "src/store";
import styles from "../../../styles/dashboard.module.scss";
import { useEffect } from "react";
import { PrimaryEmptyState } from "src/components/PrimaryEmptyState";

const Home: NextPage = () => {
    const { selectedAsa } = useStore();
    const { data, isFetching, error, status } = useRedditAnalyticsQuery({
        asaID: selectedAsa.assetId,
        startDate: "2020-01-01",
    });

    let sentimentAnalytics = [] as Array<any>;

    const getEmoji = (score: number): string => {
        if (score < 20) {
            return "😝";
        }
        if (score >= 20 && score < 40) {
            return "😎";
        }
        if (score >= 40 && score < 60) {
            return "😂";
        }
        if (score >= 60 && score < 80) {
            return "😇";
        }

        return "😍";
    };

    useEffect(() => {
        if (data) {
            data.redditAnalytics?.forEach((item) => {
                sentimentAnalytics.push({
                    data: item.sentimentScore,
                    name: getEmoji(Number(item.score)),
                });
            });
        }
    }, [data]);

    const columns = [
        {
            title: "POST",
            dataIndex: "postTitle",
            key: "postTitle",
        },
        {
            title: "SCORE",
            dataIndex: "score",
            key: "score",
        },
        {
            title: "COMMENTS",
            dataIndex: "numOfComments",
            key: "github",
        },
        {
            title: "SENTIMENT SCORE",
            dataIndex: "sentimentScore",
            key: "sentimentScore",
        },
    ];

    return (
        <DashboardLayout>
            <DashboardAssetSocial />
            <div className={styles.dashboardContainer}>
                <div className={styles.tableContainer}>
                    {isFetching ? (
                        <Skeleton
                            count={1}
                            containerClassName={styles.summaryBarChartContainer}
                            className={styles.detailContainer}
                            baseColor="#ebebeb"
                            highlightColor="#f5f5f5"
                            height="200px"
                            width="100%"
                        />
                    ) : (
                        <PrimaryTable columns={columns} data={data?.redditAnalytics.slice(0, 10)} />
                    )}
                </div>
                <div className={styles.sentimentChartContainer}>
                    {data?.redditAnalytics?.length ? (
                        <SentimentBarChart title="😡Aggressive" data={sentimentAnalytics} />
                    ) : (
                        <PrimaryEmptyState text="No data for this section" />
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Home;
