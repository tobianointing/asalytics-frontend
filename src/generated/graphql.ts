// 👇️ ts-nocheck ignores all ts errors in the file
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import {
    useQuery,
    useInfiniteQuery,
    UseQueryOptions,
    UseInfiniteQueryOptions,
    QueryFunctionContext,
} from "react-query";
import { fetchData } from "../services/fetcher";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** Date with time (isoformat) */
    DateTime: any;
};

export type AsaData = {
    __typename?: "AsaData";
    URL?: Maybe<Scalars["String"]>;
    assetId: Scalars["String"];
    available: Scalars["Boolean"];
    category?: Maybe<Scalars["String"]>;
    circSupply?: Maybe<Scalars["String"]>;
    creator?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    discord?: Maybe<Scalars["String"]>;
    fractionDecimals?: Maybe<Scalars["Int"]>;
    github?: Maybe<Scalars["String"]>;
    logo?: Maybe<Scalars["String"]>;
    medium?: Maybe<Scalars["String"]>;
    name: Scalars["String"];
    reddit?: Maybe<Scalars["String"]>;
    reputation_Algoexplorer: Scalars["String"];
    reputation_Pera: Scalars["String"];
    score_Algoexplorer: Scalars["Int"];
    telegram?: Maybe<Scalars["String"]>;
    totalSupply?: Maybe<Scalars["String"]>;
    twitter?: Maybe<Scalars["String"]>;
    unitname1?: Maybe<Scalars["String"]>;
    unitname2?: Maybe<Scalars["String"]>;
    usdValue?: Maybe<Scalars["String"]>;
};

export type AsaDataPagination = {
    __typename?: "AsaDataPagination";
    URL?: Maybe<Scalars["String"]>;
    assetId: Scalars["String"];
    assetTotal: Scalars["Int"];
    available: Scalars["Boolean"];
    category?: Maybe<Scalars["String"]>;
    circSupply?: Maybe<Scalars["String"]>;
    creator?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    discord?: Maybe<Scalars["String"]>;
    fractionDecimals?: Maybe<Scalars["Int"]>;
    github?: Maybe<Scalars["String"]>;
    logo?: Maybe<Scalars["String"]>;
    medium?: Maybe<Scalars["String"]>;
    name: Scalars["String"];
    reddit?: Maybe<Scalars["String"]>;
    reputation_Algoexplorer: Scalars["String"];
    reputation_Pera: Scalars["String"];
    score_Algoexplorer: Scalars["Int"];
    telegram?: Maybe<Scalars["String"]>;
    totalSupply?: Maybe<Scalars["String"]>;
    twitter?: Maybe<Scalars["String"]>;
    unitname1?: Maybe<Scalars["String"]>;
    unitname2?: Maybe<Scalars["String"]>;
    usdValue?: Maybe<Scalars["String"]>;
};

export type AsaList = {
    __typename?: "AsaList";
    result: Array<AsaDataPagination>;
};

export type AsaResponse = {
    __typename?: "AsaResponse";
    result: Array<AsaData>;
};

export type GithubAnalyticsPerRepo = {
    __typename?: "GithubAnalyticsPerRepo";
    commits: Scalars["Int"];
    contributors: Scalars["Int"];
    forks: Scalars["Int"];
    issues: Scalars["Int"];
    pullRequests: Scalars["Int"];
    repoName: Scalars["String"];
    stars: Scalars["Int"];
    watches: Scalars["Int"];
};

export type GithubAnalyticsPerTime = {
    __typename?: "GithubAnalyticsPerTime";
    commits: Scalars["Int"];
    forks: Scalars["Int"];
    issues: Scalars["Int"];
    lastPushDate?: Maybe<Scalars["DateTime"]>;
    lastPushDateDay?: Maybe<Scalars["Int"]>;
    lastPushDateWeekday?: Maybe<Scalars["String"]>;
    pullRequests: Scalars["Int"];
    stars: Scalars["Int"];
    watches: Scalars["Int"];
};

export type GithubOverview = {
    __typename?: "GithubOverview";
    commits: Scalars["Int"];
    contributors: Scalars["Int"];
    forks: Scalars["Int"];
    issues: Scalars["Int"];
    languages: Array<Maybe<Scalars["String"]>>;
    pullRequests: Scalars["Int"];
    stars: Scalars["Int"];
    watches: Scalars["Int"];
};

export type PerRepo = {
    __typename?: "PerRepo";
    repo: Array<GithubAnalyticsPerRepo>;
};

export type PerTime = {
    __typename?: "PerTime";
    repo: Array<GithubAnalyticsPerTime>;
};

export type Query = {
    __typename?: "Query";
    asaData: AsaResponse;
    asalist: AsaList;
    asanameSearch: AsaResponse;
    githubAnalyticsPerepo: PerRepo;
    githubAnalyticsPertime: PerTime;
    githubOverview: GithubOverview;
    redditAnalytics: Array<RedditPostSchema>;
    twitterAnalytics: Response;
    twitterOverview: TwitterOverview;
};

export type QueryAsaDataArgs = {
    asaID: Scalars["String"];
};

export type QueryAsalistArgs = {
    endIndex?: Scalars["Int"];
    startIndex?: Scalars["Int"];
};

export type QueryAsanameSearchArgs = {
    nameSearch: Scalars["String"];
};

export type QueryGithubAnalyticsPerepoArgs = {
    asaID: Scalars["String"];
    sortBy: Scalars["String"];
};

export type QueryGithubAnalyticsPertimeArgs = {
    asaID: Scalars["String"];
    day?: Scalars["Boolean"];
    endDate?: InputMaybe<Scalars["String"]>;
    startDate?: InputMaybe<Scalars["String"]>;
    weekDay?: Scalars["Boolean"];
};

export type QueryGithubOverviewArgs = {
    asaID: Scalars["String"];
};

export type QueryRedditAnalyticsArgs = {
    asaID: Scalars["String"];
};

export type QueryTwitterAnalyticsArgs = {
    asaID: Scalars["String"];
    endDate?: InputMaybe<Scalars["String"]>;
    hour?: Scalars["Boolean"];
    startDate?: InputMaybe<Scalars["String"]>;
    weekday?: Scalars["Boolean"];
};

export type QueryTwitterOverviewArgs = {
    asaID: Scalars["String"];
};

export type RedditCommentSchema = {
    __typename?: "RedditCommentSchema";
    commentId: Scalars["String"];
    commentScore: Scalars["Int"];
    commentSentimentScore: Scalars["Float"];
    postId: Scalars["String"];
};

export type RedditPostSchema = {
    __typename?: "RedditPostSchema";
    asaID: Scalars["String"];
    more: Array<RedditCommentSchema>;
    numOfComments: Scalars["Int"];
    postId: Scalars["String"];
    postText?: Maybe<Scalars["String"]>;
    postTitle: Scalars["String"];
    rank: Scalars["Int"];
    score: Scalars["Int"];
    sentimentScore: Scalars["Float"];
};

export type Response = {
    __typename?: "Response";
    asaID?: Maybe<Scalars["String"]>;
    results: Array<TwitterAnalytics>;
};

export type TwitterAnalytics = {
    __typename?: "TwitterAnalytics";
    hour?: Maybe<Scalars["Int"]>;
    likes: Scalars["Int"];
    postedAt?: Maybe<Scalars["DateTime"]>;
    retweets: Scalars["Int"];
    sentiment: Scalars["Float"];
    weekday?: Maybe<Scalars["String"]>;
};

export type TwitterOverview = {
    __typename?: "TwitterOverview";
    asaID: Scalars["String"];
    likeTotal: Scalars["Int"];
    retweetTotal: Scalars["Int"];
    sentimentTotal: Scalars["Float"];
    tweetTotal: Scalars["Int"];
};

export type GithubOverviewQueryVariables = Exact<{
    asaID: Scalars["String"];
}>;

export type GithubOverviewQuery = {
    __typename?: "Query";
    githubOverview: {
        __typename?: "GithubOverview";
        commits: number;
        contributors: number;
        forks: number;
        issues: number;
        languages: Array<string | null>;
        pullRequests: number;
        watches: number;
        stars: number;
    };
};

export type GithubAnalyticsPerTimeQueryVariables = Exact<{
    asaID: Scalars["String"];
    day?: InputMaybe<Scalars["Boolean"]>;
    endDate?: InputMaybe<Scalars["String"]>;
    startDate?: InputMaybe<Scalars["String"]>;
    weekDay?: InputMaybe<Scalars["Boolean"]>;
}>;

export type GithubAnalyticsPerTimeQuery = {
    __typename?: "Query";
    githubAnalyticsPertime: {
        __typename?: "PerTime";
        repo: Array<{
            __typename?: "GithubAnalyticsPerTime";
            commits: number;
            forks: number;
            issues: number;
            lastPushDate?: any | null;
            lastPushDateDay?: number | null;
            lastPushDateWeekday?: string | null;
            pullRequests: number;
            watches: number;
            stars: number;
        }>;
    };
};

export type GithubAnalyticsPerRepoQueryVariables = Exact<{
    asaID: Scalars["String"];
    sortBy: Scalars["String"];
}>;

export type GithubAnalyticsPerRepoQuery = {
    __typename?: "Query";
    githubAnalyticsPerepo: {
        __typename?: "PerRepo";
        repo: Array<{
            __typename?: "GithubAnalyticsPerRepo";
            commits: number;
            contributors: number;
            forks: number;
            issues: number;
            pullRequests: number;
            repoName: string;
            stars: number;
        }>;
    };
};

export type AsaDataQueryVariables = Exact<{
    asaID: Scalars["String"];
}>;

export type AsaDataQuery = {
    __typename?: "Query";
    asaData: {
        __typename?: "AsaResponse";
        result: Array<{
            __typename?: "AsaData";
            URL?: string | null;
            assetId: string;
            available: boolean;
            category?: string | null;
            circSupply?: string | null;
            creator?: string | null;
            fractionDecimals?: number | null;
            description?: string | null;
            discord?: string | null;
            github?: string | null;
            logo?: string | null;
            medium?: string | null;
            name: string;
            reddit?: string | null;
            reputation_Algoexplorer: string;
            reputation_Pera: string;
            score_Algoexplorer: number;
            telegram?: string | null;
            totalSupply?: string | null;
            twitter?: string | null;
            unitname1?: string | null;
            unitname2?: string | null;
            usdValue?: string | null;
        }>;
    };
};

export type AsaListQueryVariables = Exact<{
    endIndex?: Scalars["Int"];
    startIndex?: Scalars["Int"];
}>;

export type AsaListQuery = {
    __typename?: "Query";
    asalist: {
        __typename?: "AsaList";
        result: Array<{
            __typename?: "AsaDataPagination";
            assetId: string;
            available: boolean;
            logo?: string | null;
            name: string;
            unitname1?: string | null;
            assetTotal: number;
        }>;
    };
};

export type AsanameSearchQueryVariables = Exact<{
    nameSearch: Scalars["String"];
}>;

export type AsanameSearchQuery = {
    __typename?: "Query";
    asanameSearch: {
        __typename?: "AsaResponse";
        result: Array<{
            __typename?: "AsaData";
            assetId: string;
            available: boolean;
            logo?: string | null;
            name: string;
            unitname1?: string | null;
        }>;
    };
};

export type AsaDataMinimumQueryVariables = Exact<{
    asaID: Scalars["String"];
}>;

export type AsaDataMinimumQuery = {
    __typename?: "Query";
    asaData: {
        __typename?: "AsaResponse";
        result: Array<{ __typename?: "AsaData"; assetId: string; available: boolean }>;
    };
};

export type RedditAnalyticsQueryVariables = Exact<{
    asaID: Scalars["String"];
}>;

export type RedditAnalyticsQuery = {
    __typename?: "Query";
    redditAnalytics: Array<{
        __typename?: "RedditPostSchema";
        asaID: string;
        numOfComments: number;
        postId: string;
        postText?: string | null;
        postTitle: string;
        score: number;
        sentimentScore: number;
        more: Array<{
            __typename?: "RedditCommentSchema";
            commentId: string;
            commentScore: number;
            commentSentimentScore: number;
            postId: string;
        }>;
    }>;
};

export type TwitterOverviewQueryVariables = Exact<{
    asaID: Scalars["String"];
}>;

export type TwitterOverviewQuery = {
    __typename?: "Query";
    twitterOverview: {
        __typename?: "TwitterOverview";
        asaID: string;
        likeTotal: number;
        retweetTotal: number;
        sentimentTotal: number;
        tweetTotal: number;
    };
};

export type TwitterAnalyticsQueryVariables = Exact<{
    asaID: Scalars["String"];
    endDate?: InputMaybe<Scalars["String"]>;
    startDate?: InputMaybe<Scalars["String"]>;
    weekday?: InputMaybe<Scalars["Boolean"]>;
    hour?: InputMaybe<Scalars["Boolean"]>;
}>;

export type TwitterAnalyticsQuery = {
    __typename?: "Query";
    twitterAnalytics: {
        __typename?: "Response";
        asaID?: string | null;
        results: Array<{
            __typename?: "TwitterAnalytics";
            weekday?: string | null;
            hour?: number | null;
            likes: number;
            postedAt?: any | null;
            retweets: number;
            sentiment: number;
        }>;
    };
};

export const GithubOverviewDocument = `
    query githubOverview($asaID: String!) {
  githubOverview(asaID: $asaID) {
    commits
    contributors
    forks
    issues
    languages
    pullRequests
    watches
    stars
  }
}
    `;
export const useGithubOverviewQuery = <TData = GithubOverviewQuery, TError = unknown>(
    variables: GithubOverviewQueryVariables,
    options?: UseQueryOptions<GithubOverviewQuery, TError, TData>,
) =>
    useQuery<GithubOverviewQuery, TError, TData>(
        ["githubOverview", variables],
        fetchData<GithubOverviewQuery, GithubOverviewQueryVariables>(GithubOverviewDocument, variables),
        options,
    );

useGithubOverviewQuery.getKey = (variables: GithubOverviewQueryVariables) => ["githubOverview", variables];
export const useInfiniteGithubOverviewQuery = <TData = GithubOverviewQuery, TError = unknown>(
    variables: GithubOverviewQueryVariables,
    options?: UseInfiniteQueryOptions<GithubOverviewQuery, TError, TData>,
) => {
    return useInfiniteQuery<GithubOverviewQuery, TError, TData>(
        ["githubOverview.infinite", variables],
        (metaData) =>
            fetchData<GithubOverviewQuery, GithubOverviewQueryVariables>(GithubOverviewDocument, {
                ...variables,
                ...(metaData.pageParam ?? {}),
            })(),
        options,
    );
};

useInfiniteGithubOverviewQuery.getKey = (variables: GithubOverviewQueryVariables) => [
    "githubOverview.infinite",
    variables,
];
useGithubOverviewQuery.fetcher = (variables: GithubOverviewQueryVariables, options?: RequestInit["headers"]) =>
    fetchData<GithubOverviewQuery, GithubOverviewQueryVariables>(GithubOverviewDocument, variables, options);
export const GithubAnalyticsPerTimeDocument = `
    query githubAnalyticsPerTime($asaID: String!, $day: Boolean, $endDate: String, $startDate: String, $weekDay: Boolean) {
  githubAnalyticsPertime(
    asaID: $asaID
    day: $day
    startDate: $startDate
    endDate: $endDate
    weekDay: $weekDay
  ) {
    repo {
      commits
      forks
      issues
      lastPushDate
      lastPushDateDay
      lastPushDateWeekday
      pullRequests
      watches
      stars
    }
  }
}
    `;
export const useGithubAnalyticsPerTimeQuery = <TData = GithubAnalyticsPerTimeQuery, TError = unknown>(
    variables: GithubAnalyticsPerTimeQueryVariables,
    options?: UseQueryOptions<GithubAnalyticsPerTimeQuery, TError, TData>,
) =>
    useQuery<GithubAnalyticsPerTimeQuery, TError, TData>(
        ["githubAnalyticsPerTime", variables],
        fetchData<GithubAnalyticsPerTimeQuery, GithubAnalyticsPerTimeQueryVariables>(
            GithubAnalyticsPerTimeDocument,
            variables,
        ),
        options,
    );

useGithubAnalyticsPerTimeQuery.getKey = (variables: GithubAnalyticsPerTimeQueryVariables) => [
    "githubAnalyticsPerTime",
    variables,
];
export const useInfiniteGithubAnalyticsPerTimeQuery = <TData = GithubAnalyticsPerTimeQuery, TError = unknown>(
    variables: GithubAnalyticsPerTimeQueryVariables,
    options?: UseInfiniteQueryOptions<GithubAnalyticsPerTimeQuery, TError, TData>,
) => {
    return useInfiniteQuery<GithubAnalyticsPerTimeQuery, TError, TData>(
        ["githubAnalyticsPerTime.infinite", variables],
        (metaData) =>
            fetchData<GithubAnalyticsPerTimeQuery, GithubAnalyticsPerTimeQueryVariables>(
                GithubAnalyticsPerTimeDocument,
                { ...variables, ...(metaData.pageParam ?? {}) },
            )(),
        options,
    );
};

useInfiniteGithubAnalyticsPerTimeQuery.getKey = (variables: GithubAnalyticsPerTimeQueryVariables) => [
    "githubAnalyticsPerTime.infinite",
    variables,
];
useGithubAnalyticsPerTimeQuery.fetcher = (
    variables: GithubAnalyticsPerTimeQueryVariables,
    options?: RequestInit["headers"],
) =>
    fetchData<GithubAnalyticsPerTimeQuery, GithubAnalyticsPerTimeQueryVariables>(
        GithubAnalyticsPerTimeDocument,
        variables,
        options,
    );
export const GithubAnalyticsPerRepoDocument = `
    query githubAnalyticsPerRepo($asaID: String!, $sortBy: String!) {
  githubAnalyticsPerepo(asaID: $asaID, sortBy: $sortBy) {
    repo {
      commits
      contributors
      forks
      issues
      pullRequests
      repoName
      stars
    }
  }
}
    `;
export const useGithubAnalyticsPerRepoQuery = <TData = GithubAnalyticsPerRepoQuery, TError = unknown>(
    variables: GithubAnalyticsPerRepoQueryVariables,
    options?: UseQueryOptions<GithubAnalyticsPerRepoQuery, TError, TData>,
) =>
    useQuery<GithubAnalyticsPerRepoQuery, TError, TData>(
        ["githubAnalyticsPerRepo", variables],
        fetchData<GithubAnalyticsPerRepoQuery, GithubAnalyticsPerRepoQueryVariables>(
            GithubAnalyticsPerRepoDocument,
            variables,
        ),
        options,
    );

useGithubAnalyticsPerRepoQuery.getKey = (variables: GithubAnalyticsPerRepoQueryVariables) => [
    "githubAnalyticsPerRepo",
    variables,
];
export const useInfiniteGithubAnalyticsPerRepoQuery = <TData = GithubAnalyticsPerRepoQuery, TError = unknown>(
    variables: GithubAnalyticsPerRepoQueryVariables,
    options?: UseInfiniteQueryOptions<GithubAnalyticsPerRepoQuery, TError, TData>,
) => {
    return useInfiniteQuery<GithubAnalyticsPerRepoQuery, TError, TData>(
        ["githubAnalyticsPerRepo.infinite", variables],
        (metaData) =>
            fetchData<GithubAnalyticsPerRepoQuery, GithubAnalyticsPerRepoQueryVariables>(
                GithubAnalyticsPerRepoDocument,
                { ...variables, ...(metaData.pageParam ?? {}) },
            )(),
        options,
    );
};

useInfiniteGithubAnalyticsPerRepoQuery.getKey = (variables: GithubAnalyticsPerRepoQueryVariables) => [
    "githubAnalyticsPerRepo.infinite",
    variables,
];
useGithubAnalyticsPerRepoQuery.fetcher = (
    variables: GithubAnalyticsPerRepoQueryVariables,
    options?: RequestInit["headers"],
) =>
    fetchData<GithubAnalyticsPerRepoQuery, GithubAnalyticsPerRepoQueryVariables>(
        GithubAnalyticsPerRepoDocument,
        variables,
        options,
    );
export const AsaDataDocument = `
    query asaData($asaID: String!) {
  asaData(asaID: $asaID) {
    result {
      URL
      assetId
      available
      category
      circSupply
      creator
      fractionDecimals
      description
      discord
      fractionDecimals
      github
      logo
      medium
      name
      reddit
      reputation_Algoexplorer
      reputation_Pera
      score_Algoexplorer
      telegram
      totalSupply
      twitter
      unitname1
      unitname2
      usdValue
    }
  }
}
    `;
export const useAsaDataQuery = <TData = AsaDataQuery, TError = unknown>(
    variables: AsaDataQueryVariables,
    options?: UseQueryOptions<AsaDataQuery, TError, TData>,
) =>
    useQuery<AsaDataQuery, TError, TData>(
        ["asaData", variables],
        fetchData<AsaDataQuery, AsaDataQueryVariables>(AsaDataDocument, variables),
        options,
    );

useAsaDataQuery.getKey = (variables: AsaDataQueryVariables) => ["asaData", variables];
export const useInfiniteAsaDataQuery = <TData = AsaDataQuery, TError = unknown>(
    variables: AsaDataQueryVariables,
    options?: UseInfiniteQueryOptions<AsaDataQuery, TError, TData>,
) => {
    return useInfiniteQuery<AsaDataQuery, TError, TData>(
        ["asaData.infinite", variables],
        (metaData) =>
            fetchData<AsaDataQuery, AsaDataQueryVariables>(AsaDataDocument, {
                ...variables,
                ...(metaData.pageParam ?? {}),
            })(),
        options,
    );
};

useInfiniteAsaDataQuery.getKey = (variables: AsaDataQueryVariables) => ["asaData.infinite", variables];
useAsaDataQuery.fetcher = (variables: AsaDataQueryVariables, options?: RequestInit["headers"]) =>
    fetchData<AsaDataQuery, AsaDataQueryVariables>(AsaDataDocument, variables, options);
export const AsaListDocument = `
    query asaList($endIndex: Int! = 50, $startIndex: Int! = 0) {
  asalist(endIndex: $endIndex, startIndex: $startIndex) {
    result {
      assetId
      available
      logo
      name
      unitname1
      assetTotal
    }
  }
}
    `;
export const useAsaListQuery = <TData = AsaListQuery, TError = unknown>(
    variables?: AsaListQueryVariables,
    options?: UseQueryOptions<AsaListQuery, TError, TData>,
) =>
    useQuery<AsaListQuery, TError, TData>(
        variables === undefined ? ["asaList"] : ["asaList", variables],
        fetchData<AsaListQuery, AsaListQueryVariables>(AsaListDocument, variables),
        options,
    );

useAsaListQuery.getKey = (variables?: AsaListQueryVariables) =>
    variables === undefined ? ["asaList"] : ["asaList", variables];
export const useInfiniteAsaListQuery = <TData = AsaListQuery, TError = unknown>(
    variables?: AsaListQueryVariables,
    options?: UseInfiniteQueryOptions<AsaListQuery, TError, TData>,
) => {
    return useInfiniteQuery<AsaListQuery, TError, TData>(
        variables === undefined ? ["asaList.infinite"] : ["asaList.infinite", variables],
        (metaData) =>
            fetchData<AsaListQuery, AsaListQueryVariables>(AsaListDocument, {
                ...variables,
                ...(metaData.pageParam ?? {}),
            })(),
        options,
    );
};

useInfiniteAsaListQuery.getKey = (variables?: AsaListQueryVariables) =>
    variables === undefined ? ["asaList.infinite"] : ["asaList.infinite", variables];
useAsaListQuery.fetcher = (variables?: AsaListQueryVariables, options?: RequestInit["headers"]) =>
    fetchData<AsaListQuery, AsaListQueryVariables>(AsaListDocument, variables, options);
export const AsanameSearchDocument = `
    query asanameSearch($nameSearch: String!) {
  asanameSearch(nameSearch: $nameSearch) {
    result {
      assetId
      available
      logo
      name
      unitname1
    }
  }
}
    `;
export const useAsanameSearchQuery = <TData = AsanameSearchQuery, TError = unknown>(
    variables: AsanameSearchQueryVariables,
    options?: UseQueryOptions<AsanameSearchQuery, TError, TData>,
) =>
    useQuery<AsanameSearchQuery, TError, TData>(
        ["asanameSearch", variables],
        fetchData<AsanameSearchQuery, AsanameSearchQueryVariables>(AsanameSearchDocument, variables),
        options,
    );

useAsanameSearchQuery.getKey = (variables: AsanameSearchQueryVariables) => ["asanameSearch", variables];
export const useInfiniteAsanameSearchQuery = <TData = AsanameSearchQuery, TError = unknown>(
    variables: AsanameSearchQueryVariables,
    options?: UseInfiniteQueryOptions<AsanameSearchQuery, TError, TData>,
) => {
    return useInfiniteQuery<AsanameSearchQuery, TError, TData>(
        ["asanameSearch.infinite", variables],
        (metaData) =>
            fetchData<AsanameSearchQuery, AsanameSearchQueryVariables>(AsanameSearchDocument, {
                ...variables,
                ...(metaData.pageParam ?? {}),
            })(),
        options,
    );
};

useInfiniteAsanameSearchQuery.getKey = (variables: AsanameSearchQueryVariables) => [
    "asanameSearch.infinite",
    variables,
];
useAsanameSearchQuery.fetcher = (variables: AsanameSearchQueryVariables, options?: RequestInit["headers"]) =>
    fetchData<AsanameSearchQuery, AsanameSearchQueryVariables>(AsanameSearchDocument, variables, options);
export const AsaDataMinimumDocument = `
    query asaDataMinimum($asaID: String!) {
  asaData(asaID: $asaID) {
    result {
      assetId
      available
    }
  }
}
    `;
export const useAsaDataMinimumQuery = <TData = AsaDataMinimumQuery, TError = unknown>(
    variables: AsaDataMinimumQueryVariables,
    options?: UseQueryOptions<AsaDataMinimumQuery, TError, TData>,
) =>
    useQuery<AsaDataMinimumQuery, TError, TData>(
        ["asaDataMinimum", variables],
        fetchData<AsaDataMinimumQuery, AsaDataMinimumQueryVariables>(AsaDataMinimumDocument, variables),
        options,
    );

useAsaDataMinimumQuery.getKey = (variables: AsaDataMinimumQueryVariables) => ["asaDataMinimum", variables];
export const useInfiniteAsaDataMinimumQuery = <TData = AsaDataMinimumQuery, TError = unknown>(
    variables: AsaDataMinimumQueryVariables,
    options?: UseInfiniteQueryOptions<AsaDataMinimumQuery, TError, TData>,
) => {
    return useInfiniteQuery<AsaDataMinimumQuery, TError, TData>(
        ["asaDataMinimum.infinite", variables],
        (metaData) =>
            fetchData<AsaDataMinimumQuery, AsaDataMinimumQueryVariables>(AsaDataMinimumDocument, {
                ...variables,
                ...(metaData.pageParam ?? {}),
            })(),
        options,
    );
};

useInfiniteAsaDataMinimumQuery.getKey = (variables: AsaDataMinimumQueryVariables) => [
    "asaDataMinimum.infinite",
    variables,
];
useAsaDataMinimumQuery.fetcher = (variables: AsaDataMinimumQueryVariables, options?: RequestInit["headers"]) =>
    fetchData<AsaDataMinimumQuery, AsaDataMinimumQueryVariables>(AsaDataMinimumDocument, variables, options);
export const RedditAnalyticsDocument = `
    query redditAnalytics($asaID: String!) {
  redditAnalytics(asaID: $asaID) {
    asaID
    more {
      commentId
      commentScore
      commentSentimentScore
      postId
    }
    numOfComments
    postId
    postText
    postTitle
    score
    sentimentScore
  }
}
    `;
export const useRedditAnalyticsQuery = <TData = RedditAnalyticsQuery, TError = unknown>(
    variables: RedditAnalyticsQueryVariables,
    options?: UseQueryOptions<RedditAnalyticsQuery, TError, TData>,
) =>
    useQuery<RedditAnalyticsQuery, TError, TData>(
        ["redditAnalytics", variables],
        fetchData<RedditAnalyticsQuery, RedditAnalyticsQueryVariables>(RedditAnalyticsDocument, variables),
        options,
    );

useRedditAnalyticsQuery.getKey = (variables: RedditAnalyticsQueryVariables) => ["redditAnalytics", variables];
export const useInfiniteRedditAnalyticsQuery = <TData = RedditAnalyticsQuery, TError = unknown>(
    variables: RedditAnalyticsQueryVariables,
    options?: UseInfiniteQueryOptions<RedditAnalyticsQuery, TError, TData>,
) => {
    return useInfiniteQuery<RedditAnalyticsQuery, TError, TData>(
        ["redditAnalytics.infinite", variables],
        (metaData) =>
            fetchData<RedditAnalyticsQuery, RedditAnalyticsQueryVariables>(RedditAnalyticsDocument, {
                ...variables,
                ...(metaData.pageParam ?? {}),
            })(),
        options,
    );
};

useInfiniteRedditAnalyticsQuery.getKey = (variables: RedditAnalyticsQueryVariables) => [
    "redditAnalytics.infinite",
    variables,
];
useRedditAnalyticsQuery.fetcher = (variables: RedditAnalyticsQueryVariables, options?: RequestInit["headers"]) =>
    fetchData<RedditAnalyticsQuery, RedditAnalyticsQueryVariables>(RedditAnalyticsDocument, variables, options);
export const TwitterOverviewDocument = `
    query twitterOverview($asaID: String!) {
  twitterOverview(asaID: $asaID) {
    asaID
    likeTotal
    retweetTotal
    sentimentTotal
    tweetTotal
  }
}
    `;
export const useTwitterOverviewQuery = <TData = TwitterOverviewQuery, TError = unknown>(
    variables: TwitterOverviewQueryVariables,
    options?: UseQueryOptions<TwitterOverviewQuery, TError, TData>,
) =>
    useQuery<TwitterOverviewQuery, TError, TData>(
        ["twitterOverview", variables],
        fetchData<TwitterOverviewQuery, TwitterOverviewQueryVariables>(TwitterOverviewDocument, variables),
        options,
    );

useTwitterOverviewQuery.getKey = (variables: TwitterOverviewQueryVariables) => ["twitterOverview", variables];
export const useInfiniteTwitterOverviewQuery = <TData = TwitterOverviewQuery, TError = unknown>(
    variables: TwitterOverviewQueryVariables,
    options?: UseInfiniteQueryOptions<TwitterOverviewQuery, TError, TData>,
) => {
    return useInfiniteQuery<TwitterOverviewQuery, TError, TData>(
        ["twitterOverview.infinite", variables],
        (metaData) =>
            fetchData<TwitterOverviewQuery, TwitterOverviewQueryVariables>(TwitterOverviewDocument, {
                ...variables,
                ...(metaData.pageParam ?? {}),
            })(),
        options,
    );
};

useInfiniteTwitterOverviewQuery.getKey = (variables: TwitterOverviewQueryVariables) => [
    "twitterOverview.infinite",
    variables,
];
useTwitterOverviewQuery.fetcher = (variables: TwitterOverviewQueryVariables, options?: RequestInit["headers"]) =>
    fetchData<TwitterOverviewQuery, TwitterOverviewQueryVariables>(TwitterOverviewDocument, variables, options);
export const TwitterAnalyticsDocument = `
    query twitterAnalytics($asaID: String!, $endDate: String, $startDate: String, $weekday: Boolean, $hour: Boolean) {
  twitterAnalytics(
    asaID: $asaID
    startDate: $startDate
    endDate: $endDate
    weekday: $weekday
    hour: $hour
  ) {
    asaID
    results {
      weekday
      hour
      likes
      postedAt
      retweets
      sentiment
    }
  }
}
    `;
export const useTwitterAnalyticsQuery = <TData = TwitterAnalyticsQuery, TError = unknown>(
    variables: TwitterAnalyticsQueryVariables,
    options?: UseQueryOptions<TwitterAnalyticsQuery, TError, TData>,
) =>
    useQuery<TwitterAnalyticsQuery, TError, TData>(
        ["twitterAnalytics", variables],
        fetchData<TwitterAnalyticsQuery, TwitterAnalyticsQueryVariables>(TwitterAnalyticsDocument, variables),
        options,
    );

useTwitterAnalyticsQuery.getKey = (variables: TwitterAnalyticsQueryVariables) => ["twitterAnalytics", variables];
export const useInfiniteTwitterAnalyticsQuery = <TData = TwitterAnalyticsQuery, TError = unknown>(
    variables: TwitterAnalyticsQueryVariables,
    options?: UseInfiniteQueryOptions<TwitterAnalyticsQuery, TError, TData>,
) => {
    return useInfiniteQuery<TwitterAnalyticsQuery, TError, TData>(
        ["twitterAnalytics.infinite", variables],
        (metaData) =>
            fetchData<TwitterAnalyticsQuery, TwitterAnalyticsQueryVariables>(TwitterAnalyticsDocument, {
                ...variables,
                ...(metaData.pageParam ?? {}),
            })(),
        options,
    );
};

useInfiniteTwitterAnalyticsQuery.getKey = (variables: TwitterAnalyticsQueryVariables) => [
    "twitterAnalytics.infinite",
    variables,
];
useTwitterAnalyticsQuery.fetcher = (variables: TwitterAnalyticsQueryVariables, options?: RequestInit["headers"]) =>
    fetchData<TwitterAnalyticsQuery, TwitterAnalyticsQueryVariables>(TwitterAnalyticsDocument, variables, options);
