import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs/promises';

const getSiteIndexPage = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const siteName = req.query.siteName;
    const indexPath = path.join(process.cwd(), 'sites', siteName.toString(), 'pages', 'IndexPage.tsx');

    try {
      await fs.access(indexPath);
      res.status(200).json({ path: `../sites/${siteName}/pages/IndexPage` });
    } catch (err) {
      res.status(404).json({ error: `IndexPage module not found at ${indexPath}` });
    }
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while trying to get the site index page.' });
  }
};

export default getSiteIndexPage;
