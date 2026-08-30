import type { ReactElement } from 'react';
import Section6 from '../_generated/section-6';
import Section7 from '../_generated/section-7';

export const metadata = { title: 'Contact' };

export default function ContactPage(): ReactElement {
  return (
    <main data-eos-id="app/contact/page.tsx#0" data-eos-v="2">
      <Section6 data-eos-id="app/contact/page.tsx#1" {...{"intro":"Questions, a project, or just a hello. Reef Guardians (test) would love to hear from you.","theme":{"ink":"#21241a","line":"#ddd6c2","muted":"#6c7060","accent":"#7c8a4f","radius":"0.875rem","primary":"#65723d","surface":"#e8dfc9","maxWidth":"72rem","onPrimary":"#e8dfc9","onSurface":"#21241a","surfaceAlt":"#faf7f0","primaryDark":"#525d31"},"heading":"Get in touch","submitLabel":"Send message"}} />
      <Section7 data-eos-id="app/contact/page.tsx#2" {...{"legal":"© Reef Guardians (test). Built by Ecodia.","theme":{"ink":"#21241a","line":"#ddd6c2","muted":"#6c7060","accent":"#7c8a4f","radius":"0.875rem","primary":"#65723d","surface":"#e8dfc9","maxWidth":"72rem","onPrimary":"#e8dfc9","onSurface":"#21241a","surfaceAlt":"#faf7f0","primaryDark":"#525d31"},"columns":[{"links":[{"href":"/","label":"About"},{"href":"/what-we-do","label":"What we offer"}],"title":"Explore"},{"links":[{"href":"/contact","label":"Contact"},{"href":"/contact","label":"Newsletter"}],"title":"Connect"}],"orgName":"Reef Guardians (test)","tagline":"Built with Studio."}} />
    </main>
  );
}
