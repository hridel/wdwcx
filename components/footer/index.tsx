import Divider from '#/components/divider';

const Footer = () => {
    return (
        <footer className="py-2 w-full flex flex-col gap-2 justify-center items-center">
            <Divider />
            <p className="text-center text-sm text-muted-foreground">
                <small>
                    This page does not use cookies that are subject to
                    compliance per the Act No. 374/2021 Coll.
                </small>
            </p>
            <p className="text-center text-sm text-muted-foreground">
                <small>
                    Copyright © {new Date().getFullYear()} Ing. Jan Hřídel. All
                    rights reserved.
                </small>
            </p>
            <p className="text-center text-sm text-muted-foreground">
                <small>
                    ✨&nbsp;&#34;Turning lines of code into magic since
                    1999.&#34;&nbsp;🧙🏻‍♂️
                </small>
            </p>
        </footer>
    );
};

export default Footer;
