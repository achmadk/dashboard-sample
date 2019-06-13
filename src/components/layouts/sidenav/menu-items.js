import dashboardContents from '@/constants/dashboard-contents'

export const menuItems = [
  {
    icon: 'home',
    label: 'Home',
    to: '/profile',
    exact: true
  },
  {
    icon: 'group',
    label: 'Vendor Management',
    to: '/vendors',
    exact: false
  },
  {
    icon: 'attach_money',
    label: 'Purchase Requisition',
    to: '/purchase_requisition_items',
    exact: false
  },
  {
    icon: 'description',
    label: 'Proposal Tender',
    to: '/procurements',
    exact: false
  },
  {
    icon: 'gavel',
    label: 'Auctions',
    to: '/auctions',
    exact: false
  },
  {
    icon: 'av_timer',
    label: 'Dashboard',
    to: '/dashboard',
    exact: true,
    children: [
      ...dashboardContents
      // {
      //   label: 'Average Tender Duration',
      //   to: '/dashboard/average_tender_duration',
      //   exact: true
      // },
      // {
      //   label: 'Cost Saving',
      //   to: '/dashboard/cost_saving',
      //   exact: true
      // },
      // {
      //   label: 'Number of Tender Per Period',
      //   to: '/dashboard/number_of_tender_per_period',
      //   exact: true
      // }
    ]
  }
]
