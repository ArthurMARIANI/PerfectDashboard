export interface IMenu {
  name: string;
  link: string | boolean;
  open: boolean;
  badgeValue: number | boolean;
  sub?: IMenu[];
}

export const MENUS: IMenu[] = [
  {
    'name': 'Dashboard',
    'link': false,
    'open': false,
    'badgeValue': 20,
    'sub': [
      {
        'name': 'Dashboard1',
        'link': false,
        'badgeValue': 20,
        'open': true,
        'sub': [
          {
            'name': 'Dashboard-1-1',
            'link': false,
            'badgeValue': 20,
            'open': true,
            'sub': [
              {
                'name': 'Dashboard-1-1-1',
                'link': false,
                'badgeValue': 20,
                'open': true,
              },

            ]
          },

        ]
      },
      {
        'name': 'Dashboard2',
        'link': false,
        'badgeValue': 20,
        'open': true,
        'sub': [
          {
            'name': 'Dashboard-2-1',
            'link': false,
            'badgeValue': 20,
            'open': true,
            'sub': [
              {
                'name': 'Dashboard-2-1-1',
                'link': false,
                'badgeValue': 20,
                'open': true,
              },
            ]
          },

        ]
      }
    ]
  },
  {
    'name': 'Tables',
    'link': false,
    'open': false,
    'badgeValue': false,
    'sub': [
      {
        'name': 'Fixed',
        'link': 'tables/fixed',
        'open': false,
        'badgeValue': false,

      },
      {
        'name': 'Feature',
        'link': 'tables/featured',
        'open': false,
        'badgeValue': false,

      },
      {
        'name': 'Responsive Tables',
        'link': 'tables/responsive',
        'open': false,
        'badgeValue': false,

      },
      {
        'name': 'Fixed',
        'link': 'tables/fixed',
        'open': false,
        'badgeValue': false,

      },
      {
        'name': 'Feature',
        'link': 'tables/featured',
        'open': false,
        'badgeValue': false,

      },
      {
        'name': 'Responsive Tables',
        'link': 'tables/responsive',
        'open': false,
        'badgeValue': false,

      },
      {
        'name': 'Fixed',
        'link': 'tables/fixed',
        'open': false,
        'badgeValue': false,

      },
      {
        'name': 'Feature',
        'link': 'tables/featured',
        'open': false,
        'badgeValue': false,

      },
      {
        'name': 'Responsive Tables',
        'link': 'tables/responsive',
        'open': false,
        'badgeValue': false,

      },
      {
        'name': 'Fixed',
        'link': 'tables/fixed',
        'open': false,
        'badgeValue': false,

      },
      {
        'name': 'Feature',
        'link': 'tables/featured',
        'open': false,
        'badgeValue': false,

      },
      {
        'name': 'Responsive Tables',
        'link': 'tables/responsive',
        'open': false,
        'badgeValue': false,

      }, {
        'name': 'Fixed',
        'link': 'tables/fixed',
        'open': false,
        'badgeValue': false,

      },
      {
        'name': 'Feature',
        'link': 'tables/featured',
        'open': false,
        'badgeValue': false,

      },
      {
        'name': 'Responsive Tables',
        'link': 'tables/responsive',
        'open': false,
        'badgeValue': false,

      }, {
        'name': 'Fixed',
        'link': 'tables/fixed',
        'open': false,
        'badgeValue': false,

      },
      {
        'name': 'Feature',
        'link': 'tables/featured',
        'open': false,
        'badgeValue': false,

      },
      {
        'name': 'Responsive Tables',
        'link': 'tables/responsive',
        'open': false,
        'badgeValue': false,

      }
    ]

  },
  {
    'name': 'Guarded Routes',
    'link': '/auth/guarded-routes',
    'open': false,
    'badgeValue': false,

  }, {
    'name': 'Scrumboard',
    'open': false,
    'link': '/auth/scrumboard',
    'badgeValue': false,

  }, {
    'name': 'Applications',
    'open': false,
    'link': false,
    'badgeValue': false,
    'sub': [
      {
        'name': 'chat',
        'link': 'chats/chat',
        'open': false,
        'badgeValue': false,

      },
      {
        'name': 'mail',
        'link': 'mail/mail',
        'open': false,
        'badgeValue': false,

      },
      {
        'name': 'Editor',
        'link': 'editor/editor',
        'open': false,
        'badgeValue': false,
      }
    ]
  }
  , {
    'name': 'Pages',
    'open': false,
    'link': false,
    'badgeValue': false,
    'sub': [
      {
        'name': 'Login',
        'open': false,
        'link': '../login',
        'badgeValue': false,

      }, {
        'name': 'Services',
        'open': false,
        'link': 'pages/services',
        'badgeValue': false,

      }, {
        'name': 'Contact',
        'open': false,
        'link': 'pages/contact',
        'badgeValue': false,

      }
    ]
  }
  , {

    'name': 'Charts',
    'open': false,
    'link': false,
    'badgeValue': false,
    'sub': [
      {
        'name': 'chartjs',
        'link': 'charts/chartjs',
        'open': false,
        'badgeValue': false,


      },
      {
        'name': 'ngx-chart',
        'open': false,
        'link': 'charts/ngx-charts',
        'badgeValue': false,

      },
      {
        'name': 'nvd3',
        'open': false,
        'link': 'charts/nvd3-charts',
        'badgeValue': false,

      }
    ]
  }, {
    'name': 'maps',
    'open': false,
    'link': false,
    'badgeValue': false,
    'sub': [
      {
        'name': 'google-map',
        'link': 'maps/googlemap',
        'open': false,
        'badgeValue': false,

      },
      {
        'name': 'leaflet-map',
        'link': 'maps/leafletmap',
        'open': false,
        'badgeValue': false,

      }
    ]
  }
];
