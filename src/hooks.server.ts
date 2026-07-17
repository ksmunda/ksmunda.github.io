import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// A simple resolution handler since the site is statically compiled
	return resolve(event);
};
