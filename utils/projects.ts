

export type ProjectType = {
    month: string
    name: string
    key: string
    description: string
    gifOnly?: boolean
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
    },
    {
        month: 'September',
        name: 'ThreeJS ASCII renderer',
        key: 'next-three-ascii',
        description: 'Seeing some ASCII art on twitter I got inspired to try and get a 3D render working with an ASCII shader.'
    },
    {
        month: 'October',
        name: 'Nippon No Shiro (Famous Castles of Japan)',
        key: 'next-nippon-no-shiro',
        description: 'Me being a fan of Japanese history decided to make this months project an overview of the famous Japanese castles.'
    },
    {
        month: 'November',
        name: 'Ninja Village',
        key: 'next-ninja-village',
        description: 'This month I found a nice challenge in making a simple game framework for a top-down action rpg in Nextjs. I hope to have it finished as a project in one of the future months so I can share a (simple) playable demo and share the code.',
        gifOnly: true
    },
]