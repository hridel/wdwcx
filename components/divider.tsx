import { cn } from '#/lib/utils';

const Divider = ({ className }: { className?: string }) => (
    <div
        className={cn(
            'h-[1px] w-full bg-gradient-to-r from-transparent via-muted-foreground/50 to-transparent',
            className
        )}
    />
);

export default Divider;
