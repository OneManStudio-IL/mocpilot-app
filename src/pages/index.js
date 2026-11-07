// The documentation site has no landing page: the product website is https://mocpilot.com.
// "/" (and "/<locale>/") opens the documentation start page. The server also redirects these paths,
// this component covers client-side navigation. Store badges stay exported from here for existing blog posts.
import { Redirect } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

export { GooglePlayBadge, AppStoreBadge, MacAppStoreBadge } from '@site/src/components/StoreBadges';

export default function Home() {
  return <Redirect to={useBaseUrl('/docs/Introducing/AboutApp')} />;
}
