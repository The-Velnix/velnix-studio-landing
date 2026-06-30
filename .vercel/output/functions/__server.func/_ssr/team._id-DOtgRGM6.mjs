import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as people } from "./team.index-CHtxwvPC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/team._id-DOtgRGM6.js
var $$splitComponentImporter = () => import("./team._id-dzKf8JVh.mjs");
var Route = createFileRoute("/team/$id")({
	loader: ({ params }) => {
		const member = people.find((p) => p.id === params.id);
		if (!member) throw new Error(`Team member ${params.id} not found`);
		return member;
	},
	head: ({ loaderData }) => ({ meta: [{ title: `${loaderData.name} | The Velnix` }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
