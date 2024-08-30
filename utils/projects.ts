

export type ProjectType = {
    month: string
    name: string
    key: string
    description: string
}

export const projects: ProjectType[] = [
    {
        month: 'April',
        name: 'Akira Trading Bot',
        key: 'next-akira-ui',
        description: 'Using a deno trading bot, a drizzle api and a nextjs frontend I created a trading bot which trades based on certain conditions and tracks the process in a myqsl database.'
    },
    {
        month: 'May',
        name: 'Smiley Showdown',
        key: 'smiley-showdown',
        description: 'After looking at the font awesome smileys for over 3 years during work I decided enough is enough. And created an arena for them to battle it out.'
    },
    {
        month: 'June',
        name: 'Business Pokedex',
        key: 'next-business-pokedex',
        description: 'For my girlfriend I created this business card manager with a pokemon theme. You can take a picture of a business card and AI will parse the data. Creating a helpful table with all of you precious business cards.'
    },
    {
        month: 'July',
        name: 'Market Mood',
        key: 'next-market-sentiment',
        description: 'What do you get when you want to combine a deno cron, a market sentiment indicator and a sql database. Well in this case Market Mood, a one glance indication of how the crypto markets are doing.'
    },
    {
        month: 'August',
        name: 'BizBase',
        key: 'next-bizbase',
        description: 'Iterating on the Business Pokedex I wanted to make a more professional landing page to potentially launch as a Saas.'
    }
]