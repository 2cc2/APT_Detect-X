

def get_test_data():
    return [
        {
            'name': 'Series1',
            'data': [31, 40, 28, 51, 42, 109, 100]
        },
        {
            'name': 'Series2',
            'data': [11, 32, 45, 32, 34, 52, 41]
        }
    ]

def get_test_options():
    return {
        'chart': {
            'type': 'area',
            'animations': {
                'easing': 'linear',
                'speed': 300,
            },
            'sparkline': {
                'enabled': False,
            },
            'brush': {
                'enabled': False,
            },
            'id': 'basic-bar',
            'foreColor': 'hsl(var(--nextui-default-800))',
            'stacked': True,
            'toolbar': {
                'show': False,
            },
        },
        'xaxis': {
            'categories': [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
            'labels': {
                'style': {
                    'colors': 'hsl(var(--nextui-default-800))',
                },
            },
            'axisBorder': {
                'color': 'hsl(var(--nextui-nextui-default-200))',
            },
            'axisTicks': {
                'color': 'hsl(var(--nextui-nextui-default-200))',
            },
        },
        'yaxis': {
            'labels': {
                'style': {
                    'colors': 'hsl(var(--nextui-default-800))',
                },
            },
        },
        'tooltip': {
            'enabled': False,
        },
        'grid': {
            'show': True,
            'borderColor': 'hsl(var(--nextui-default-200))',
            'strokeDashArray': 0,
            'position': 'back',
        },
        'stroke': {
            'curve': 'smooth',
            'fill': {
                'colors': ['red'],
            },
        },
        'markers': False,
    }
