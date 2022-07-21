import type { NextPage } from "next";
import Image from "next/image";
import { HomePageHero } from "../src/sections/HomePageHero";
import { useState } from "react";
import { AboutPageHero } from "src/sections/AboutPageHero";
import { DefaultLayout } from "src/layouts/DefaultLayout";
import { AboutPageMission } from "src/sections/AboutPageMission";
import { AboutPageTeam } from "src/sections/AboutPageTeam";

const About: NextPage = () => {
    const [close, setClose] = useState(false);
    return (
        <DefaultLayout>
            <AboutPageHero />
            <AboutPageMission />
            <AboutPageTeam />
        </DefaultLayout>
    );
};

export default About;
