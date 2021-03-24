export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '605b6090f70a770094d6740d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-88mbjmdi',
                  apiId: '23c96d6b-6bc2-4ee9-bc6c-da67eab0c115'
                },
                {
                  buildHookId: '605b6090340be4008e7afbfb',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-3kzzo6zv',
                  apiId: '941f8b7d-5196-4212-880e-468fdabcfd22'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/inMayPrime/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-3kzzo6zv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
