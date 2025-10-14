import { projects } from '$lib/data.js';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const project = projects.find((project) => project.slug == params.slug);
	if (!project) error(401, 'Project not found');

	return { project };
}
