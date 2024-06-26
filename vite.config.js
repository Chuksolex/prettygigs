// // vite.config.js
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import prerender from 'vite-plugin-prerender';

// export default defineConfig({
//   plugins: [
//     react(),
//     prerender({
//       staticDir: './dist',
//       routes: [
//         '/',
//         '/about',
//         '/live-tutor',
//         '/live-tutor-register',
//         '/privacy',
//         '/terms',
//         '/blog',
//         '/gig/:id',
//         '/gigs',
//         '/project-request',
//         '/help',
//         '/contact',
//         '/gigpackage',
//         '/register',
//         '/login',
//         '/services',
//         '/services/web-design',
//         '/services/advertising',
//         '/services/software',
//         '/services/illustration',
//         '/services/digital-marketing',
//         // Add more routes as needed
//       ],
//     }),
//   ],
// });

// vite.config.js
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
});

