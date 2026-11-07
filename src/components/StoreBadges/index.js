// Official store badges (localized Apple / Google artwork from static/img/store_badges).
// Used by blog posts; the main website (mocpilot.com) has its own copy.
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

export function GooglePlayBadge() {
  const { i18n } = useDocusaurusContext();
  let locale = i18n.currentLocale;

  if(i18n.currentLocale === i18n.defaultLocale)
  {
    locale = "US"
  }

  return (
    <a
      href="https://play.google.com/store/apps/details?id=pro.controlz.il"
      target="_blank"
      rel="noopener noreferrer"
      className="margin--sm"
    >
      <img
        src={useBaseUrl(`/img/store_badges/google/google_${locale.toUpperCase()}.png`)}
        alt="Download on the Mac App Store"
        height="60"
      />
    </a>
  );
}

export function AppStoreBadge() {
  const { i18n } = useDocusaurusContext();
  let locale = i18n.currentLocale;

  if(i18n.currentLocale === i18n.defaultLocale)
  {
    locale = "US"
  }

  return (
    <a
      href="https://apps.apple.com/il/app/controlz-moc-controller/id1585138043"
      target="_blank"
      rel="noopener noreferrer"
      className="margin--sm"
    >
      <img
        src={useBaseUrl(`/img/store_badges/ios/ios_${locale.toUpperCase()}.svg`)}
        alt="Download on the App Store"
        height="60"
      />
    </a>
  );
}

export function MacAppStoreBadge() {
  const { i18n } = useDocusaurusContext();
  let locale = i18n.currentLocale;

  if(i18n.currentLocale === i18n.defaultLocale)
  {
    locale = "US"
  }

  return (
    <a
      href="https://apps.apple.com/il/app/controlz-moc-controller/id1585138043"
      target="_blank"
      rel="noopener noreferrer"
      className="margin--sm"
    >
      <img
        src={useBaseUrl(`/img/store_badges/mac/mac_${locale.toUpperCase()}.svg`)}
        alt="Download on the Mac App Store"
        height="60"
      />
    </a>
  );
}

