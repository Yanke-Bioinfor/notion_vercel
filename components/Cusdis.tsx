import * as React from 'react'
import * as types from '@/lib/types'

export const CusdisImpl: React.FC<types.PageProps> = ({ pageId }) => {
  return (
    <>
          <div id="cusdis_thread"
        data-host="https://cusdis.com"
        data-app-id="a260ec53-7bfc-46c1-a7ac-6e74bbd526d8"
        data-page-id={pageId}
        data-page-url={pageId}
        data-page-title={pageId}
        ></div>
        <script async defer src="https://cusdis.com/js/cusdis.es.js"></script>  
      </>
  )
}
export const Cusdis = React.memo(CusdisImpl)
