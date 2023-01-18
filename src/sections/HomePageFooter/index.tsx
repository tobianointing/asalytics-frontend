import Image from "next/image";
import Link from "next/link";
import MemoGithubIcon from "src/components/Icons/GithubIcon";
import MemoLinkedinIcon from "src/components/Icons/LinkedinIcon";
import MemoTwitterIcon from "src/components/Icons/TwitterIcon";
import MemoYoutubeIcon from "src/components/Icons/YoutubeIcon";
import { PrimaryButton } from "../../components/PrimaryButton";
import { PrimaryLogo } from "../../components/PrimaryLogo";
import styles from "./style.module.scss";

export function HomePageFooter() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerLogoContainer}>
                <PrimaryLogo />
            </div>
            <div className={styles.footerSocial}>
                <a href="https://www.linkedin.com/company/asalytics" target="_blank" data-testid="linkedin-link">
                    <MemoLinkedinIcon fill="#808080" />
                </a>
                <a href="https://twitter.com/asalytics" target="_blank" data-testid="twitter-link">
                    <MemoTwitterIcon fill="#808080" />
                </a>
                <a href="https://github.com/asalytics" target="_blank" data-testid="github-link">
                    <MemoGithubIcon fill="#808080" />
                </a>
                <a
                    href="https://www.youtube.com/channel/UCVuX5OldhBO-fZinZMk5tVA"
                    target="_blank"
                    data-testid="youtube-link"
                >
                    <MemoYoutubeIcon fill="#808080" />
                </a>
            </div>
            <div className={styles.footerInfoContainer}>
                <p className={styles.footerInfo}>2022 Nazari. All rights reserved</p>
            </div>
        </div>
    );
}
