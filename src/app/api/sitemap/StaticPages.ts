export const StaticPages: Array<{
    route: string;
    priority?: number;
    frequency?: "daily" | "weekly" | "monthly" | "yearly";
}> = [
    {
        route: '',
        priority: 1.0,
        frequency: "daily",
    },
    {
        route: 'services/web-development',
        priority: 0.9,
        frequency: "weekly",
    },
    {
        route: 'services/mobile-development',
        priority: 0.9,
        frequency: "weekly",
    },
    {
        route: 'services/ui-ux-design',
        priority: 0.9,
        frequency: "weekly",
    },
    {
        route: 'services/ai-ml',
        priority: 0.9,
        frequency: "weekly",
    },
    {
        route: 'services/cloud-solutions',
        priority: 0.9,
        frequency: "weekly",
    },
    {
        route: 'services/digital-marketing',
        priority: 0.9,
        frequency: "weekly",
    },
    {
        route: 'Blogs',
        priority: 0.8,
        frequency: "daily",
    },
    {
        route: 'contact',
        priority: 0.9,
        frequency: "weekly",
    }
];
