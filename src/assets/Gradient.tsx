import clsx from "clsx";

const Gradient = ({
    className,
    children,
}: {
    className: string;
    children: any;
}) => {
    return (
        <div className={clsx(className, "bg-gradient-radial-primary")}>
            {children}
        </div>
    );
};

export default Gradient;
