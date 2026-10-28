/**
 * Applies the stored (or system) theme before first paint, so a dark-mode
 * visitor never sees a flash of the light theme. Inlined deliberately: it must
 * run before React hydrates.
 */
const SCRIPT = `(function(){try{var t=localStorage.getItem('giilab-theme');if(!t){t=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export default function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: SCRIPT }} />;
}
