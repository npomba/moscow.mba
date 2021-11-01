import categories from '@/config/categories'
import studyFormats from '@/config/studyFormats'

const dev = process.env.NODE_ENV !== 'production'

const backendUrl = dev ? 'http://localhost:5000' : 'https://ipo-cp.ru'

const frontendUrl = dev ? 'http://localhost:3000' : 'https://moscow.mba'

const gtmId = 'GTM-M4JLQXM'

const apiProgramsReqUrl = '/api/v1/bootcamps/605c5f71bc557b46b4f42a56/courses'

const base64pixel =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='

export {
  categories,
  studyFormats,
  dev,
  backendUrl,
  frontendUrl,
  gtmId,
  apiProgramsReqUrl,
  base64pixel
}
