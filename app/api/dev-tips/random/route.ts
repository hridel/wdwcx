import { webDevTips } from '#/lib/data';

export async function GET() {
    const categories = Object.keys(webDevTips);
    const randomCategory = categories[
        Math.floor(Math.random() * categories.length)
    ] as keyof typeof webDevTips;
    const tips = webDevTips[randomCategory];
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    return Response.json({ ...randomTip, hashtag: `#${randomCategory}` });
}
