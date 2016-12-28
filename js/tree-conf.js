var defaultData = [
          {
            text: 'Hà Nội',
            href: '#hanoi',
            nodes: [
              {
                text: 'Đống Đa',
                href: '#dongda',
                tags: ['2'],
                nodes: [
                  {
                    text: 'Chung cư A',
                    href: '#chungcua',
                  },
                  {
                    text: 'Chung cư B',
                    href: '#chungcub'
                  }
                ]
              },
              {
                text: 'Ba Đình',
                href: '#badinh',
                tags: ['2'],
                nodes: [
                  {
                    text: 'Chung cư C',
                    href: '#chungcuc',
                  },
                  {
                    text: 'Chung cư D',
                    href: '#chungcud'
                  }
                ]
              },
              {
                text: 'Cầu Giấy',
                href: '#caugiay',
                tags: ['0']
              }
            ]
          },
          {
            text: 'Tp.Hồ Chí Minh',
            href: '#parent2',
            tags: ['0']
          },
          {
            text: 'Hải Phòng',
            href: '#parent3',
             tags: ['0']
          },
          {
            text: 'Đà Nẵng',
            href: '#parent4',
            tags: ['0']
          },
          {
            text: 'Quảng Ninh',
            href: '#parent5'  ,
            tags: ['0']
          },
          {
            text: 'Thanh Hóa',
            href: '#parent5'  ,
            tags: ['0']
          },
          {
            text: 'Thanh Hóa',
            href: '#parent5'  ,
            tags: ['0']
          }
        ];
$('#treeview7').treeview({
    color: "#428bca",
    expandIcon: 'fa fa-plus-square-o',
    collapseIcon: 'fa fa-minus-square-o',
    showBorder: false,
    data: defaultData
});
