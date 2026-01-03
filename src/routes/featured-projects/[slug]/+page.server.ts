import { error } from '@sveltejs/kit';
import { projects } from '../data';

export function load({ params }) {
	const project = projects.find((project) => project.slug == params.slug);
	if (!project) error(401, 'Project not found');

	return { project };
}
