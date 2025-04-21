import { NextApiRequest, NextApiResponse } from 'next';

let properties = [
  { id: '1', title: 'Luxury Villa', price: 9000000, image: '/villa.jpg', location: 'Chennai', description: 'A lavish villa near ECR' },
  { id: '2', title: '2BHK Flat', price: 4500000, image: '/flat.jpg', location: 'Tambaram', description: 'Affordable 2BHK in a prime location' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if ((req as any).method === 'GET') {
    res.status(200).json(properties);
  } else if ((req as any).method === 'POST') {
    const newProperty = { id: String(Date.now()), ...req.body };
    properties.push(newProperty);
    res.status(201).json(newProperty);
  } else {
    res.status(405).end();
  }
}
