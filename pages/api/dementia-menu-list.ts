import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(
	request: NextApiRequest,
	response: NextApiResponse
) {
	try {
		const result = await prisma.dementiaMenu.findMany({
			select: {
				id: true,
				menuTitle: true,
				shortContent: true,
				menuSubTitle: true,
			},
		});

		return response.status(200).json(result);
	} catch (error) {
		console.error(error);
		return response.status(500).json({ error: 'Something went wrong' });
	}
}