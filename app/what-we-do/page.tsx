import type { ReactElement } from 'react';
import Section2 from '../_generated/section-2';
import Section3 from '../_generated/section-3';
import Section7 from '../_generated/section-7';

export const metadata = { title: 'What we do' };

export default function WhatWeDoPage(): ReactElement {
  return (
    <main data-eos-id="app/what-we-do/page.tsx#0" data-eos-v="2">
      <Section2 data-eos-id="app/what-we-do/page.tsx#1" {...{"theme":{"ink":"#21241a","line":"#ddd6c2","muted":"#6c7060","accent":"#7c8a4f","radius":"0.875rem","primary":"#65723d","surface":"#e8dfc9","maxWidth":"72rem","onPrimary":"#e8dfc9","onSurface":"#21241a","surfaceAlt":"#faf7f0","primaryDark":"#525d31"},"heading":"What we offer","services":[{"title":"First service","description":"A clear description of your first service. Edit this in the studio, or brief your Friend to write it in your voice."},{"title":"Second service","description":"Another way Reef Guardians (test) delivers. Your real content drops straight in here."},{"title":"Third service","description":"A third, so the page reads complete from day one."}],"subtitle":"The ways Reef Guardians (test) helps, set out plainly."}} />
      <Section3 data-eos-id="app/what-we-do/page.tsx#2" {...{"items":[{"tone":"#65723d","caption":"Add your first image"},{"tone":"#525d31","caption":"And a second"},{"tone":"#7c8a4f","caption":"And a third"},{"tone":"#e8dfc9","caption":"Swap these in the studio"}],"theme":{"ink":"#21241a","line":"#ddd6c2","muted":"#6c7060","accent":"#7c8a4f","radius":"0.875rem","primary":"#65723d","surface":"#e8dfc9","maxWidth":"72rem","onPrimary":"#e8dfc9","onSurface":"#21241a","surfaceAlt":"#faf7f0","primaryDark":"#525d31"},"heading":"A look at the work"}} />
      <Section7 data-eos-id="app/what-we-do/page.tsx#3" {...{"legal":"© Reef Guardians (test). Built by Ecodia.","theme":{"ink":"#21241a","line":"#ddd6c2","muted":"#6c7060","accent":"#7c8a4f","radius":"0.875rem","primary":"#65723d","surface":"#e8dfc9","maxWidth":"72rem","onPrimary":"#e8dfc9","onSurface":"#21241a","surfaceAlt":"#faf7f0","primaryDark":"#525d31"},"columns":[{"links":[{"href":"/","label":"About"},{"href":"/what-we-do","label":"What we offer"}],"title":"Explore"},{"links":[{"href":"/contact","label":"Contact"},{"href":"/contact","label":"Newsletter"}],"title":"Connect"}],"orgName":"Reef Guardians (test)","tagline":"Built with Studio."}} />
    </main>
  );
}
