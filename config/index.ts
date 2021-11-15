import base64pixel from '@/config/base64pixel'
import categories from '@/config/categories'
import dev from '@/config/dev'
import fallback from '@/config/fallback'
import gtmId from '@/config/gtmId'
import revalidate from '@/config/revalidate'
import routesBack from '@/config/routesBack'
import routesFront from '@/config/routesFront'
import studyFormats from '@/config/studyFormats'

const backendUrl = dev ? 'http://localhost:5000' : 'https://ipo-cp.ru'
const apiProgramsReqUrl = '/api/v1/bootcamps/605c5f71bc557b46b4f42a56/courses'

export {
  base64pixel,
  categories,
  dev,
  fallback,
  gtmId,
  revalidate,
  routesBack,
  routesFront,
  studyFormats,
  backendUrl,
  apiProgramsReqUrl
}
