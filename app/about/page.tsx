import type { ReactElement } from 'react';
import Section4 from '../_generated/section-4';
import Section5 from '../_generated/section-5';
import Section7 from '../_generated/section-7';

export const metadata = { title: 'About' };

export default function AboutPage(): ReactElement {
  return (
    <main data-eos-id="app/about/page.tsx#0" data-eos-v="2">
      <Section4 data-eos-id="app/about/page.tsx#1" {...{"theme":{"ink":"#21241a","line":"#ddd6c2","muted":"#6c7060","accent":"#7c8a4f","radius":"0.875rem","primary":"#65723d","surface":"#e8dfc9","maxWidth":"72rem","onPrimary":"#e8dfc9","onSurface":"#21241a","surfaceAlt":"#faf7f0","primaryDark":"#525d31"},"quotes":[{"name":"A happy client","role":"Replace with a real quote","quote":"Working with Reef Guardians (test) was exactly what we needed. Real, warm, and clear."},{"name":"Another voice","role":"Edit in the studio","quote":"Reef Guardians (test) delivered, and kept us in the loop the whole way."}],"heading":"What people say"}} />
      <Section5 data-eos-id="app/about/page.tsx#2" {...{"items":[{"answer":"Tell visitors plainly what you do. Your Friend can draft this from your existing site.","question":"What does Reef Guardians (test) do?"},{"answer":"Reach out below and we will take it from there.","question":"How do I get started?"},{"answer":"This page grows as Reef Guardians (test) does. Check back, or get in touch.","question":"Where can I learn more?"}],"theme":{"ink":"#21241a","line":"#ddd6c2","muted":"#6c7060","accent":"#7c8a4f","radius":"0.875rem","primary":"#65723d","surface":"#e8dfc9","maxWidth":"72rem","onPrimary":"#e8dfc9","onSurface":"#21241a","surfaceAlt":"#faf7f0","primaryDark":"#525d31"},"heading":"Questions, answered"}} />
      <Section7 data-eos-id="app/about/page.tsx#3" {...{"legal":"© Reef Guardians (test). Built by Ecodia.","theme":{"ink":"#21241a","line":"#ddd6c2","muted":"#6c7060","accent":"#7c8a4f","radius":"0.875rem","primary":"#65723d","surface":"#e8dfc9","maxWidth":"72rem","onPrimary":"#e8dfc9","onSurface":"#21241a","surfaceAlt":"#faf7f0","primaryDark":"#525d31"},"columns":[{"links":[{"href":"/","label":"About"},{"href":"/what-we-do","label":"What we offer"}],"title":"Explore"},{"links":[{"href":"/contact","label":"Contact"},{"href":"/contact","label":"Newsletter"}],"title":"Connect"}],"orgName":"Reef Guardians (test)","tagline":"Built with Studio."}} />
    </main>
  );
}
