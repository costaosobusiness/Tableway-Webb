import { useEffect } from 'react';

import { PageSeo } from '@/components/seo/PageSeo';
import { TABLEWAY_DOWNLOAD_APP_URL } from '@/lib/tablewayUrls';

export default function DownloadRedirectPage() {
  useEffect(() => {
    window.location.replace(TABLEWAY_DOWNLOAD_APP_URL);
  }, []);

  return <PageSeo pageId="download" noindex />;
}
