import { cn } from "~/lib/utils";

type ContainerProps = {
	children: React.ReactNode;
	className?: string;
};

export const Container = ({ children, className }: ContainerProps) => {
	return (
		<div
			className={cn(
				"mx-auto w-full max-w-[120rem] 2xl:px-20 px-5 lg:px-10",
				className,
			)}
		>
			{children}
		</div>
	);
};
