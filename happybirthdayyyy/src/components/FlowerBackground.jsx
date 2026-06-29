import { motion } from "framer-motion";

// ── Swap these image paths for your actual flower images ──
// Put your images in /public/flowers/ and update the paths below
const FLOWERS = [
	{
		src: "/flowers/bougainvillea1.png",
		style: { top: "5%", left: "2%", width: "220px", rotate: -15 },
	},
	{
		src: "/flowers/lily1.png",
		style: { top: "10%", right: "3%", width: "180px", rotate: 10 },
	},
	{
		src: "/flowers/rose1.png",
		style: { bottom: "8%", left: "5%", width: "200px", rotate: 20 },
	},
	{
		src: "/flowers/bougainvillea2.png",
		style: { bottom: "5%", right: "2%", width: "240px", rotate: -8 },
	},
	{
		src: "/flowers/lily2.png",
		style: { top: "45%", left: "0%", width: "160px", rotate: 5 },
	},
	{
		src: "/flowers/rose2.png",
		style: { top: "40%", right: "0%", width: "170px", rotate: -12 },
	},
];

// gentle float animation — each flower sways slightly independently
function floatVariant(delay = 0, baseRotate = 0, yRange = 12, rotateRange = 4) {
	return {
		animate: {
			y: [0, -yRange, 0, yRange, 0],
			rotate: [
				baseRotate,
				baseRotate + rotateRange,
				baseRotate,
				baseRotate - rotateRange,
				baseRotate,
			],
			transition: {
				duration: 7 + delay,
				ease: "easeInOut",
				repeat: Infinity,
				delay,
			},
		},
	};
}

export default function FlowerBackground() {
	return (
		<div
			style={{
				position: "fixed",
				inset: 0,
				zIndex: 0,
				pointerEvents: "none",
				overflow: "hidden",
			}}
		>
			{FLOWERS.map((flower, i) => (
				<motion.img
					key={i}
					src={flower.src}
					alt=""
					variants={floatVariant(i * 0.8, flower.style.rotate ?? 0)}
					animate="animate"
					style={{
						position: "absolute",
						opacity: 0.55,
						...flower.style,
					}}
				/>
			))}
		</div>
	);
}
