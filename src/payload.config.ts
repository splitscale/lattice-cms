// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
    // Add your own logo and icon here
    components: {
      graphics: {
        Icon: '/graphics/Icon/index.tsx#Icon',
        Logo: '/graphics/Logo/index.tsx#Logo',
      },
    },
    // Add your own meta data here
    meta: {
      description: 'Splitscale - Reliable digital solutions that work',
      icons: [
        {
          type: 'image/png',
          rel: 'icon',
          url: '/assets/favicon.svg',
        },
      ],
      openGraph: {
        description:
          'Splitscale delivers custom software solutions that are reliable, scalable, and tailored to your needs.',
        images: [
          {
            height: 600,
            url: '/assets/ogImage.png',
            width: 800,
          },
        ],
        title: 'Splitscale - Reliable digital solutions that work',
      },
      titleSuffix: '- Splitscale',
    },
  },
  collections: [Users, Media],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
