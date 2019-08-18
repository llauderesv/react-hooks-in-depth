import React, { Suspense, lazy } from 'react';

export default function Details({ title, children, lazyImport, ...restProps }) {
  const LazyComponent = lazy(() => import(lazyImport));

  return (
    <details {...restProps}>
      <summary>{title}</summary>
      {!lazyImport ? (
        children
      ) : (
        <Suspense fallback={<p>Loading...</p>}>
          <LazyComponent />
        </Suspense>
      )}
    </details>
  );
}
