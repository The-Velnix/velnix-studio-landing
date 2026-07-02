import { j as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-CvSuLdxS.js
var $$splitComponentImporter = () => import("./blog._slug-DexsK0KY.mjs");
var articles = {
	"ai-features-that-survive-production": {
		tag: "AI Engineering",
		date: "June 18, 2026",
		read: "7 min read",
		title: "What separates an AI demo from a production feature",
		dek: "A demo proves a model can produce a compelling answer once. A product has to produce a useful, safe answer repeatedly, for real users, under real constraints.",
		sections: [
			["Start with the failure modes", ["Before choosing a model or building an interface, write down how the feature can fail. It may hallucinate a policy, miss a document, expose data across accounts, become too slow, or cost more than the value it creates.", "These are product requirements, not cleanup tasks. Each important failure mode needs a way to detect it, a fallback behaviour and an owner."]],
			["Build an evaluation set early", ["Collect representative questions, difficult edge cases and examples of unacceptable output. Run them repeatedly as prompts, retrieval logic and models change.", "A small evaluation set grounded in real usage is more valuable than a large dashboard of generic benchmark numbers."]],
			["Make uncertainty visible", ["Production AI should not pretend to know. Cite sources where useful, show when evidence is weak and create a clean path to human review for high-impact decisions."]],
			["Operate it like software", ["Track latency, cost, retrieval quality, user corrections and failure categories. Version prompts and model settings. Plan what happens when a provider is unavailable.", "The model is only one component. The dependable product is the entire system around it."]]
		]
	},
	"scope-an-mvp-without-building-a-toy": {
		tag: "Product Strategy",
		date: "June 9, 2026",
		read: "6 min read",
		title: "How to scope an MVP without building a toy",
		dek: "A smaller first release should still complete one valuable job from beginning to end.",
		sections: [
			["Protect the core outcome", ["Start with the moment a user receives value, then work backwards. Preserve that path and remove peripheral roles, settings, integrations and edge cases."]],
			["Reduce breadth, not integrity", ["A narrow workflow that is reliable earns more trust than a broad product full of unfinished paths. Quality, security and basic observability are not optional scope."]],
			["Define what you need to learn", ["Every release should answer a specific product question. Decide what evidence would change the roadmap before development begins."]]
		]
	},
	"weekly-demos-change-software-delivery": {
		tag: "Delivery",
		date: "May 27, 2026",
		read: "5 min read",
		title: "Why weekly demos change the quality of software delivery",
		dek: "Working software turns abstract progress into a shared, testable reality.",
		sections: [
			["Demos compress feedback", ["Stakeholders react differently to a real flow than to a status update. Ambiguity becomes visible while changes are still inexpensive."]],
			["They improve engineering decisions", ["A weekly finish line encourages smaller slices, integrated work and fewer long-lived branches. The team learns to ship, not merely stay busy."]],
			["Keep the ritual honest", ["Show the current build, including rough edges. Capture decisions and connect the next slice of work to what everyone just learned."]]
		]
	},
	"fractional-cto-right-time": {
		tag: "Leadership",
		date: "May 14, 2026",
		read: "5 min read",
		title: "When a fractional CTO is the right hire",
		dek: "Technical leadership becomes necessary before a full-time executive is always practical.",
		sections: [
			["Look for decision debt", ["Repeated platform reversals, unclear ownership, stalled hiring and vendor confusion are signs that senior technical decisions lack a consistent owner."]],
			["Buy outcomes, not a title", ["Define the decisions, systems and team capabilities that should be stronger after the engagement. A fractional leader should reduce dependency over time."]],
			["Know when to hire full time", ["When technical leadership is a daily people-management role and the organisation can support an executive mandate, begin the transition to a permanent CTO."]]
		]
	},
	"mobile-or-responsive-web": {
		tag: "Product Decisions",
		date: "April 30, 2026",
		read: "8 min read",
		title: "Mobile app or responsive web: deciding with evidence",
		dek: "The right platform follows user context and product behaviour, not fashion.",
		sections: [
			["Choose mobile for native advantage", ["Frequent use, offline behaviour, push notifications, camera or sensor access and app-store distribution can justify a native-feel mobile product."]],
			["Choose web for reach", ["A responsive web product reduces installation friction, makes sharing easier and lets one team iterate quickly across devices."]],
			["Count operational cost", ["Two stores, release review, device testing and platform-specific behaviour create ongoing cost. Include that cost in the product decision, not only the initial build estimate."]]
		]
	},
	"technical-debt-is-a-product-decision": {
		tag: "Engineering",
		date: "April 16, 2026",
		read: "6 min read",
		title: "Technical debt is a product decision",
		dek: "Debt is a trade-off made under uncertainty. The dangerous part is forgetting the terms.",
		sections: [
			["Name the shortcut", ["Record what was simplified, why it was reasonable and which future condition would make it a constraint."]],
			["Connect debt to outcomes", ["Prioritise debt that slows delivery, harms reliability, raises security exposure or blocks an important product move. Aesthetic discomfort alone is not a business case."]],
			["Repay continuously", ["Reserve capacity for targeted improvements and fold cleanup into nearby feature work. Large rewrites should be the exception, backed by evidence."]]
		]
	}
};
var Route = createFileRoute("/blog/$slug")({
	loader: ({ params }) => {
		const a = articles[params.slug];
		if (!a) throw notFound();
		return a;
	},
	head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.title ?? "Field Note"} | The Velnix` }, {
		name: "description",
		content: loaderData?.dek ?? "Product and engineering notes from The Velnix."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
