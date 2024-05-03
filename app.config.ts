// https://github.com/nuxt-themes/alpine/blob/main/nuxt.schema.ts
export default defineAppConfig({
  alpine: {
    title: 'Martin Tomov Blog',
    description: 'Space for experiments with generative AI and machine learning.',
    image: {
      src: '/mtmv.png',
      alt: 'Space for experiments with generative AI and machine learning.',
      width: 400,
      height: 300
    },
    header: {
      position: 'left', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/martintmv-dark.svg', // path of the logo
        pathDark: '/martintmv.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'martintmv', // alt of the logo
        size: 'large'
      }
    },
    footer: {
      credits: {
        enabled: false, // possible value are : true | false
      },
      navigation: false, // possible value are : true | false
      alignment: 'left', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: '', // string that will be displayed in the footer (leave empty or delete to disable)
      logo: {
        path: '/martintmv-dark.svg', // path of the logo
        pathDark: '/martintmv.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'martintmv' // alt of the logo
      }
    },
    socials: {
      twitter: '',
      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/martintomov'
      }
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})
