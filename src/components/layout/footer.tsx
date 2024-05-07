export default function Footer() {
	return (
		<footer className="w-full bg-foreground text-background py-6 md:py-12 text-center">
			<p>© {new Date().getFullYear()} Atrai Bikes</p>
			<div className="flex justify-center items-center gap-12 mt-4 flex-wrap">
				<img
					src={"https://cloud.reedu.de/s/kgCBLmrHENwx2HS/download"}
					className="w-60 h-auto"
					alt={""}
				/>
				<img
					src={"https://cloud.reedu.de/s/ykrJWwjbYTNE4nD/download"}
					className="w-auto h-20"
					alt={""}
				/>
			</div>
		</footer>
	);
}
