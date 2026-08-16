import { useState } from 'react';

/* A contact detail (phone / email) that copies itself to the clipboard on click.

   It renders a <button>, not an <a>, on purpose: tel: and mailto: links usually
   go nowhere on a desktop browser, so making them look clickable (colour change
   on hover) promises something the page can't deliver. Instead the text stays a
   flat grey and a small "Copy" hint fades in on hover, which is a promise we can
   actually keep.

   Props:
     icon  - emoji shown on the left, e.g. "📱"
     label - the text the visitor reads, e.g. "+60 1161455862"
     value - what actually lands on the clipboard (label without spaces, usually)
     textSize - Tailwind size class, so the footer and Contact page can differ
*/
export default function CopyableContact({ icon, label, value, textSize = 'text-lg' }) {
  // `copied` drives the label swap. Calling setCopied re-renders this component.
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      // The Clipboard API is async and only works on HTTPS (or localhost).
      await navigator.clipboard.writeText(value);
      setCopied(true);
      // Reset back to the "Copy" hint after 2s so the button can be used again.
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access can be blocked (insecure origin, denied permission).
      // Swallowing the error keeps the page working; the text is still readable.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      title={`Copy ${label}`}
      /* group/copy names this hover group so the hint below can react to the
         whole button being hovered, not just itself. */
      className="group/copy flex items-center gap-2 sm:gap-3 text-gray-300 cursor-pointer"
    >
      <span className={textSize === 'text-lg' ? 'text-2xl' : ''}>{icon}</span>
      <span className={textSize}>{label}</span>
      {/* Invisible until hover (or until copied). The fixed w-16 reserves the
          space up front, so revealing the hint never shifts the layout. */}
      <span
        className={`w-16 text-left text-xs font-mono uppercase tracking-wider transition-opacity ${
          copied
            ? 'opacity-100 text-blue-400'
            : 'opacity-0 group-hover/copy:opacity-100 text-gray-500'
        }`}
      >
        {copied ? 'Copied!' : 'Copy'}
      </span>
    </button>
  );
}
