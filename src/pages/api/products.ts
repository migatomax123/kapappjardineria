import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch('http://localhost:3000/api/productos');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    const errorMessage = (error instanceof Error) ? error.message : 'An unknown error occurred';
    res.status(500).json({ message: errorMessage });
  }
}
