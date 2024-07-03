// generateSitemap.js

import fs from 'fs';
import {SitemapStream, streamToPromise} from "sitemap";
//import { createGzip } from 'zlib';

// URLs of your website's pages
const pages = [
    { url: '/', changefreq: 'weekly', priority: 0.8 },
    { url: '/about', changefreq: 'monthly', priority: 0.7 },
    { url: '/contact', changefreq: 'monthly', priority: 0.7 },
    { url: '/project-request', changefreq: 'monthly', priority: 0.7 },
    { url: '/support-request', changefreq: 'monthly', priority: 0.7 },
    { url: '/gigs', changefreq: 'weekly', priority: 0.7 },
    { url: '/live-tutor', changefreq: 'monthly', priority: 0.7 },
    { url: '/gig/:id', changefreq: 'monthly', priority: 0.7 },
    { url: '/blog', changefreq: 'monthly', priority: 0.7 },
    { url: '/blog/:id', changefreq: 'monthly', priority: 0.7 },
    { url: '/services', changefreq: 'monthly', priority: 0.7 },    
    { url: '/services/Advertising', changefreq: 'monthly', priority: 0.7 },
    { url: 'services/graphics-design', changefreq: 'monthly', priority: 0.7 },
    { url: 'services/illustration', changefreq: 'monthly', priority: 0.7 },
    { url: 'services/data-analytics', changefreq: 'monthly', priority: 0.7 },
    { url: 'services/software', changefreq: 'monthly', priority: 0.7 },
    { url: 'services/digital-marketing', changefreq: 'monthly', priority: 0.7 },


    





    // Add more URLs as needed
];

async function generateSitemap() {
    try {
        // Create a stream to write the sitemap XML
        const stream = new SitemapStream({ hostname: 'https://www.prettygigs.com.ng/' });
        //const pipeline = stream.pipe(createGzip());

        // Add URLs to the sitemap stream
        pages.forEach(page => {
            stream.write(page);
        });

        // End the stream
        stream.end();

        // Wait for the stream to be finished and convert to buffer
       // const buffer = await streamToPromise(pipeline);
       const sitemapXML = (await streamToPromise(stream)).toString();


        // Write the sitemap.xml.gz file to the public directory
        fs.writeFileSync('./public/sitemap.xml', sitemapXML);

        console.log('Sitemap generated successfully!');
    } catch (error) {
        console.error('Error generating sitemap:', error);
    }
}

generateSitemap();
