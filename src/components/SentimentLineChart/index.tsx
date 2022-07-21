import React from "react";
import styles from "./style.module.scss";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";

type Props = {
    title?: string;
};

export function SentimentLineChart(props: Props) {
    const data = [
        {
            name: "Sun",
            data: 3490,
        },
        {
            name: "Mon",
            data: 4000,
        },
        {
            name: "Tues",
            data: 3000,
        },
        {
            name: "Wed",
            data: 2000,
        },
        {
            name: "Thurs",
            data: 0,
        },
        {
            name: "Fri",
            data: 1890,
        },
        {
            name: "Sat",
            data: 2390,
        },
        {
            name: "Sun",
            data: 3490,
        },
        {
            name: "Mon",
            data: 4000,
        },
        {
            name: "Tues",
            data: 3000,
        },
        {
            name: "Wed",
            data: 2000,
        },
        {
            name: "Thurs",
            data: 1000,
        },
        {
            name: "Fri",
            data: 1890,
        },
        {
            name: "Sat",
            data: 2390,
        },
    ];

    return (
        <div className={styles.chartContainer}>
            <div className={styles.chartHeaderContainer}>
                <h1 className={styles.chartTitle}>{props.title}</h1>
            </div>
            <ResponsiveContainer height={300}>
                <LineChart data={data}>
                    <Line type="monotone" dataKey="data" stroke="#6FD791" />
                    <Tooltip />
                    {/* <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis /> */}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
