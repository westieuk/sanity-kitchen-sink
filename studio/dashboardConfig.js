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
                  buildHookId: '5f86166b1179ebb0ed706291',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-5n3zdca9',
                  apiId: 'c460a3c2-d307-45b6-ade3-0dab411367e7'
                },
                {
                  buildHookId: '5f86166c4231118cd1fc78f1',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-tmgku8bc',
                  apiId: '6b0ae2e5-9944-4452-96f5-c04b9880f027'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/westieuk/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-tmgku8bc.netlify.app', category: 'apps'}
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
