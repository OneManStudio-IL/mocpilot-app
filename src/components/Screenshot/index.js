import React, { useState } from 'react';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

// App screenshot with a light and a dark variant (static/img/app/<name>-light.png / -dark.png),
// shown according to the docs color mode. `single` uses one file (static/img/app/<name>.png).
export default function Screenshot({ name, alt, width, single = false, caption }) {
  const light = useBaseUrl(`/img/app/${name}${single ? '' : '-light'}.png`);
  const dark = useBaseUrl(`/img/app/${name}${single ? '' : '-dark'}.png`);
  // A picture that is not published yet is hidden instead of showing a broken image
  const [missing, setMissing] = useState(false);
  if (missing) return null;
  return (
    <figure style={{ margin: '24px 0', textAlign: 'center' }}>
      <ThemedImage
        alt={alt}
        sources={{ light, dark }}
        onError={() => setMissing(true)}
        style={{ width: '100%', maxWidth: width ? `${width}px` : '100%', height: 'auto' }}
      />
      {caption && (
        <figcaption style={{ fontSize: '0.9em', opacity: 0.75, marginTop: 8 }}>{caption}</figcaption>
      )}
    </figure>
  );
}
