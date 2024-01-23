import * as React from 'react'

import styles from './styles.module.css'

export const CusdisImpl: React.FC = () => {
  return (
    <>
          <div id="cusdis_thread"
        data-host="https://cusdis.com"
        data-app-id="a260ec53-7bfc-46c1-a7ac-6e74bbd526d8"
        data-page-id={pageId}
        data-page-url={canonicalPageUrl}
        data-page-title={title}
        ></div>
        <script async defer src="https://cusdis.com/js/cusdis.es.js"></script>  
      </>
  )
}
export const Cusdis = React.memo(CusdisImpl)
