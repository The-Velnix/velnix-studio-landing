import { j as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work._id-CoHT3qQf.js
var projects = {
	codedog: {
		id: "codedog",
		name: "CodeDog",
		tagline: "AI-assisted codebase security that turns complex scans into actionable findings.",
		category: "AI / Developer tools",
		challenge: "Scanning codebases for vulnerabilities is traditionally slow and generates complex reports full of false positives, which developers end up ignoring.",
		solution: "We designed a secure, real-time LLM scanning engine that analyzes Git diffs and outputs clean, plain-English security reviews directly in developer pull requests.",
		shipped: [
			"Real-time LLM scanning pipeline",
			"Figma component design system",
			"GitHub Actions integrations",
			"Developer dashboard interface"
		],
		tech: [
			"React",
			"TypeScript",
			"Python",
			"FastAPI",
			"OpenAI API",
			"Docker"
		],
		mark: "CD",
		features: [
			{
				title: "Diff-based Scanning",
				desc: "Analyzes only mutated files in active pull requests, keeping scan times under 30 seconds."
			},
			{
				title: "Contextual Remediation",
				desc: "Suggests the exact code fix inline in the PR, allowing developers to apply it with one click."
			},
			{
				title: "Grounded Analysis",
				desc: "Uses a multi-agent validation step to cross-reference rules and reduce false alerts by 90%."
			}
		]
	},
	veddb: {
		id: "veddb",
		name: "VedDB",
		tagline: "A high-performance in-memory database with visibility designed into the experience.",
		category: "Infrastructure",
		challenge: "In-memory key-value stores are fast but operate as black boxes, making debugging memory spikes and key distributions extremely difficult for operators.",
		solution: "We developed a lightweight key-value database written in Go, featuring a real-time terminal and dashboard UI showing cache hit rates, memory use, and command flows.",
		shipped: [
			"Go-based in-memory core",
			"High-frequency dashboard WebSocket API",
			"Real-time memory profiling tool",
			"Interactive CLI manager"
		],
		tech: [
			"Go",
			"React",
			"TailwindCSS",
			"WebSockets",
			"gRPC",
			"eBPF Profiling"
		],
		mark: "VD",
		features: [
			{
				title: "eBPF-driven Profiling",
				desc: "Tracks memory heap allocation with virtually zero runtime performance overhead."
			},
			{
				title: "WebSocket Telemetry",
				desc: "Pushes database metrics to the console in real-time at 60 frames per second."
			},
			{
				title: "Visual CLI",
				desc: "A browser-based command terminal allowing direct CRUD operations on the active store."
			}
		]
	},
	biznest: {
		id: "biznest",
		name: "BizNest",
		tagline: "A mobile-first workspace bringing essential business operations into one place.",
		category: "Mobile / SMB",
		challenge: "Small business owners struggle with fragmented software for invoices, client scheduling, and team chats, which slows down daily operations.",
		solution: "We built a unified mobile application combining invoicing, automated reminders, secure team channels, and customer booking inside one clean interface.",
		shipped: [
			"Cross-platform Flutter application",
			"Push notification pipeline",
			"Automated stripe invoicing worker",
			"Real-time chat syncing system"
		],
		tech: [
			"Flutter",
			"Dart",
			"Node.js",
			"PostgreSQL",
			"Stripe API",
			"Firebase"
		],
		mark: "BN",
		features: [
			{
				title: "Seamless Booking Flows",
				desc: "Allows customers to book services which sync automatically with the operator's calendar."
			},
			{
				title: "Smart Stripe Invoices",
				desc: "Generates invoice links automatically upon booking completion and tracks payment states."
			},
			{
				title: "Unified Team Channels",
				desc: "Real-time chat syncing allows workers and managers to communicate seamlessly on site."
			}
		]
	},
	inboxfm: {
		id: "inboxfm",
		name: "InboxFM",
		tagline: "An AI-native email workspace built to reduce inbox noise and accelerate decisions.",
		category: "AI / Productivity",
		challenge: "Professionals lose hours sorting through promotional noise, threads, and notification spam to find messages requiring immediate actions.",
		solution: "We developed an email client layer with local vector embedding classifiers that automatically group emails into smart priority categories and summarize long threads.",
		shipped: [
			"Local vector embedding model integration",
			"Email summarization pipeline",
			"Fast keyboard navigation layouts",
			"IMAP/SMTP sync engine"
		],
		tech: [
			"React / Vite",
			"TypeScript",
			"Transformers.js",
			"Redis",
			"Node.js IMAP",
			"PostgreSQL"
		],
		mark: "IF",
		features: [
			{
				title: "Client-side Classification",
				desc: "Categorizes priority mail locally inside the browser, protecting user data privacy."
			},
			{
				title: "Thread Condensing",
				desc: "Summarizes convoluted email exchanges into 3 key actionable points instantly."
			},
			{
				title: "Instant Keyboard Shortcuts",
				desc: "Allows full inbox management and navigation without ever lifting hands off the keyboard."
			}
		]
	},
	doxify: {
		id: "doxify",
		name: "Doxify",
		tagline: "A documentation engine that turns evolving product knowledge into useful answers.",
		category: "AI / Documentation",
		challenge: "Company wikis and product docs quickly go stale and become unsearchable, causing teams to repeatedly ask the same questions in chat channels.",
		solution: "We built a documentation platform that imports Git wikis, auto-detects outdated pages via file history, and exposes a secure Slack/Discord Q&A bot.",
		shipped: [
			"Auto-indexing document parser",
			"RAG vector retrieval system",
			"Slack/Discord integration bot",
			"Wiki change monitoring webhooks"
		],
		tech: [
			"Next.js",
			"Python",
			"LangChain",
			"Pinecone Vector DB",
			"Slack Bolt SDK",
			"PostgreSQL"
		],
		mark: "DX",
		features: [
			{
				title: "Automated Git Syncing",
				desc: "Detects documentation changes via webhooks and parses markdown trees automatically."
			},
			{
				title: "Secure RAG Retrieval",
				desc: "Applies user access roles so search answers don't expose restricted enterprise wikis."
			},
			{
				title: "Documentation Freshness Check",
				desc: "Highlights stale pages that haven't been updated alongside key software dependencies."
			}
		]
	},
	fakepe: {
		id: "fakepe",
		name: "FakePE",
		tagline: "A payment gateway sandbox for teams building and testing transaction workflows.",
		category: "Fintech / Developer tools",
		challenge: "Integrating production payment processors requires strict sandbox settings that make simulating edge cases (declined cards, bank errors) slow to test.",
		solution: "We created a mock payment gateway that lets developers trigger specific HTTP header errors to simulate precise success/failure states.",
		shipped: [
			"Declined card simulation API",
			"Real-time webhook tester",
			"Custom transaction debugger panel",
			"API dashboard metrics"
		],
		tech: [
			"React",
			"TypeScript",
			"Go",
			"PostgreSQL",
			"Redis Webhooks",
			"Docker Compose"
		],
		mark: "FP",
		features: [
			{
				title: "HTTP Header Triggers",
				desc: "Send custom test headers like 'X-Simulate-Error: 402' to verify payment failures."
			},
			{
				title: "Live Webhook Inspector",
				desc: "Watch payment response events, transaction logs, and retries land in real-time."
			},
			{
				title: "Developer Debugger Panel",
				desc: "Simulate specific banking network response codes using a visual console interface."
			}
		]
	}
};
var $$splitComponentImporter = () => import("./work._id-DsK33zrS.mjs");
var Route = createFileRoute("/work/$id")({
	loader: ({ params }) => {
		const p = projects[params.id];
		if (!p) throw notFound();
		return p;
	},
	head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.name ?? "Case Study"} | The Velnix` }, {
		name: "description",
		content: loaderData?.tagline ?? "Detailed case study of works shipped by The Velnix."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { projects as n, Route as t };
