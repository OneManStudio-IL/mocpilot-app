// The documentation site has no landing page: the product website is https://mocpilot.com.
// "/" (and "/<locale>/") opens the documentation start page. The server also redirects these paths,
// this component covers client-side navigation.
import { Redirect } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home() {
  return <Redirect to={useBaseUrl('/docs/Introducing/AboutApp')} />;
}
