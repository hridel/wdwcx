"use const";

import { remark } from 'remark';
import html from 'remark-html';

export interface RenderMdProps {
    mdContent: string;
}

const RenderMd = async (props: RenderMdProps) => {
    const { mdContent } = props;
    const result = await remark().use(html).process(mdContent);

    return (
        <div className="md" dangerouslySetInnerHTML={{ __html: result.toString() }} />
    );
}

export default RenderMd;