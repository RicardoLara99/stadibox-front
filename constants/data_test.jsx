/*
 
 ██████╗  ██████╗ ███╗   ██╗████████╗    ████████╗ ██████╗ ██╗   ██╗ ██████╗██╗  ██╗
 ██╔══██╗██╔═══██╗████╗  ██║╚══██╔══╝    ╚══██╔══╝██╔═══██╗██║   ██║██╔════╝██║  ██║
 ██║  ██║██║   ██║██╔██╗ ██║   ██║          ██║   ██║   ██║██║   ██║██║     ███████║
 ██║  ██║██║   ██║██║╚██╗██║   ██║          ██║   ██║   ██║██║   ██║██║     ██╔══██║
 ██████╔╝╚██████╔╝██║ ╚████║   ██║          ██║   ╚██████╔╝╚██████╔╝╚██████╗██║  ██║
 ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝   ╚═╝          ╚═╝    ╚═════╝  ╚═════╝  ╚═════╝╚═╝  ╚═╝
                                                                                    
 ████████╗██╗  ██╗██╗███████╗    ███████╗██╗██╗     ███████╗                        
 ╚══██╔══╝██║  ██║██║██╔════╝    ██╔════╝██║██║     ██╔════╝                        
    ██║   ███████║██║███████╗    █████╗  ██║██║     █████╗                          
    ██║   ██╔══██║██║╚════██║    ██╔══╝  ██║██║     ██╔══╝                          
    ██║   ██║  ██║██║███████║    ██║     ██║███████╗███████╗                        
    ╚═╝   ╚═╝  ╚═╝╚═╝╚══════╝    ╚═╝     ╚═╝╚══════╝╚══════╝                                                                                                         
 
*/
export const TEST_DATA = [
    {
      'id': 'aB3cD7eF',
      'numSeat': 10,
      'price': 500,
      'event': {
        'name': 'América vs Pumas',
        'date': '2023-12-15T18:30:00Z',
        'forum': {
          'name': 'Estadio Azteca',
          'mapId': 'azteca',
          'city': {
            'name': 'Ciudad de México',
            'country': {
              'name': 'México'
            }
          }
        }
      },
      'box': {
        'pictures': ['https://gql.stadibox.com/preview/PX1L3I_PGk', 'https://gql.stadibox.com/preview/4Kzen-Yrr~'],
        'zone': 'norte',
        'level': 'NIVEL 2 DE PALCOS norte',
        'section': 'alta',
        'amenities': ['wifi', 'baño']
      }
    },
    {
      'id': '1k2j3h4g',
      'numSeat': 8,
      'price': 600,
      'event': {
        'name': 'Tigres vs Xolos',
        'date': '2023-12-20T20:00:00Z',
        'forum': {
          'name': 'Estadio Universitario',
          'mapId': 'universitario',
          'city': {
            'name': 'San Nicolás',
            'country': {
              'name': 'México'
            }
          }
        }
      },
      'box': {
        'pictures': ['https://gql.stadibox.com/preview/bSqKx3Tn~m'],
        'zone': 'sur',
        'level': 'NIVEL 3 DE PALCOS sur',
        'section': 'baja',
        'amenities': ['aire acondicionado', 'TV']
      }
    },
    {
      'id': 'xyzAbCdE',
      'numSeat': 12,
      'price': 700,
      'event': {
        'name': 'Leon vs Necaxa',
        'date': '2023-12-25T19:45:00Z',
        'forum': {
          'name': 'Estadio León',
          'mapId': 'leon',
          'city': {
            'name': 'León',
            'country': {
              'name': 'México'
            }
          }
        }
      },
      'box': {
        'pictures': [],
        'zone': 'este',
        'level': 'NIVEL 4 DE PALCOS este',
        'section': 'alta',
        'amenities': ['baño']
      }
    },
    {
      'id': 'oPqRsTuV',
      'numSeat': 15,
      'price': 550,
      'event': {
        'name': 'Pumas vs Xolos',
        'date': '2023-12-18T19:00:00Z',
        'forum': {
          'name': 'Estadio Olímpico Universitario',
          'mapId': 'pumas',
          'city': {
            'name': 'Ciudad de México',
            'country': {
              'name': 'México'
            }
          }
        }
      },
      'box': {
        'pictures': ['https://gql.stadibox.com/preview/Wy5fds81Yl', 'https://gql.stadibox.com/preview/FiErlMaMoi', 'https://gql.stadibox.com/preview/FiErlMaMoi'],
        'zone': 'oeste',
        'level': 'NIVEL 1 DE PALCOS oeste',
        'section': 'baja',
        'amenities': ['TV']
      }
    },
    {
      'id': 'wXyZ1aB',
      'numSeat': 14,
      'price': 650,
      'event': {
        'name': 'América vs Leon',
        'date': '2023-12-22T21:15:00Z',
        'forum': {
          'name': 'Estadio Azteca',
          'mapId': 'azteca',
          'city': {
            'name': 'Ciudad de México',
            'country': {
              'name': 'México'
            }
          }
        }
      },
      'box': {
        'pictures': ['https://gql.stadibox.com/preview/sm5Skmu7ZN'],
        'zone': 'norte',
        'level': 'NIVEL 3 DE PALCOS norte',
        'section': 'alta',
        'amenities': ['wifi', 'baño', 'cocina']
      }
    },
    {
      'id': 'CdEfGhI2',
      'numSeat': 9,
      'price': 600,
      'event': {
        'name': 'Tigres vs Necaxa',
        'date': '2023-12-17T18:45:00Z',
        'forum': {
          'name': 'Estadio Universitario',
          'mapId': 'universitario',
          'city': {
            'name': 'San Nicolás',
            'country': {
              'name': 'México'
            }
          }
        }
      },
      'box': {
        'pictures': [],
        'zone': 'este',
        'level': 'NIVEL 2 DE PALCOS este',
        'section': 'baja',
        'amenities': ['aire acondicionado', 'TV']
      }
    },
    {
      'id': 'JkLmNoP5',
      'numSeat': 11,
      'price': 700,
      'event': {
        'name': 'Xolos vs Pumas',
        'date': '2023-12-21T20:30:00Z',
        'forum': {
          'name': 'Estadio Caliente',
          'mapId': 'caliente',
          'city': {
            'name': 'Tijuana',
            'country': {
              'name': 'México'
            }
          }
        }
      },
      'box': {
        'pictures': [
          'https://gql.stadibox.com/preview/GdTZDEgcVM',
          'https://gql.stadibox.com/preview/ZAKen62NtB',
          'https://gql.stadibox.com/preview/Rstc2vZnii',
          'https://gql.stadibox.com/preview/hBsgA4i2zG',
          'https://gql.stadibox.com/preview/nekZIlUi9a',
          'https://gql.stadibox.com/preview/GUCTrQCjNW',
          'https://gql.stadibox.com/preview/9auq9yx8aN',
          'https://gql.stadibox.com/preview/iVC5G-KfuF'
        ],
        'zone': 'oeste',
        'level': 'NIVEL 4 DE PALCOS oeste',
        'section': 'alta',
        'amenities': ['baño', 'cocina']
      }
    },
    {
      'id': 'GhIjKlMn6',
      'numSeat': 13,
      'price': 550,
      'event': {
        'name': 'Leon vs Pumas',
        'date': '2023-12-19T19:15:00Z',
        'forum': {
          'name': 'Estadio León',
          'mapId': 'leon',
          'city': {
            'name': 'León',
            'country': {
              'name': 'México'
            }
          }
        }
      },
      'box': {
        'pictures': [],
        'zone': 'sur',
        'level': 'NIVEL 1 DE PALCOS sur',
        'section': 'baja',
        'amenities': ['wifi', 'baño', 'cocina', 'aire acondicionado', 'TV']
      }
    },
    {
      'id': 'cCdDeEfF7',
      'numSeat': 16,
      'price': 650,
      'event': {
        'name': 'Necaxa vs Tigres',
        'date': '2023-12-23T21:00:00Z',
        'forum': {
          'name': 'Estadio Victoria',
          'mapId': 'victoria',
          'city': {
            'name': 'Aguascalientes',
            'country': {
              'name': 'México'
            }
          }
        }
      },
      'box': {
        'pictures': ['https://gql.stadibox.com/preview/F9--tqiRA4'],
        'zone': 'este',
        'level': 'NIVEL 3 DE PALCOS este',
        'section': 'alta',
        'amenities': ['aire acondicionado', 'TV']
      }
    },
    {
      'id': 'vWxYzA8B',
      'numSeat': 0,//14
      'price': 600,
      'event': {
        'name': 'Pumas vs América',
        'date': '2023-12-24T20:45:00Z',
        'forum': {
          'name': 'Estadio Olímpico Universitario',
          'mapId': 'pumas',
          'city': {
            'name': 'Ciudad de México',
            'country': {
              'name': 'México'
            }
          }
        }
      },
      'box': {
        'pictures': ['https://gql.stadibox.com/preview/M1XLJ7OgHN'],
        'zone': 'oeste',
        'level': 'NIVEL 2 DE PALCOS oeste',
        'section': 'baja',
        'amenities': ['baño', 'cocina', 'TV']
      }
    }
  ]