import  SitemapGenerator  from "sitemap-generator-custom-domain";

// Instantiate the generator with your website URL and the desired output file path
const generator = new SitemapGenerator('https://www.t-timenigeriaglobal.com.ng', {
  filepath: './public/sitemap.xml', // Set the path where the sitemap will be saved
  customDomain: 'https://www.t-timenigeriaglobal.com.ng', // Set your custom domain
});

// Start the generatorn
generator.start();

// Event handler for when the generator has started crawling
generator.getCrawler().on('fetchcomplete', (queueItem) => {
  // Add discovered URLs to the sitemap
  generator.getSitemap().addURL(queueItem.url);
});

// Event handlers
generator.on('done', () => {
  console.log('Sitemap has been generated.');
  // Once the sitemap is generated, you may want to submit it to search engines.
});

generator.on('error', (error) => {
  console.error('An error occurred:', error);
});
