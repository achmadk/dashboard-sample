const dashboardContents = [
  {
    label: 'Average Tender Duration',
    // link to enter specific page
    to: '/dashboard/average_tender_duration',
    exact: true,
    entries: [
      {
        title: 'Sample Pie Chart',
        endpoint: '/dashboard/prcmts/avg_tender_duration',
        displays: [
          {
            type: 'pie',
            labelAttribute: 'purch_group_name',
            valueAttribute: 'lead_time_prcmt',
            grouped: true,
            sumValue: true,
            name: 'Tender Duration by Purchasing Group'
          },
          {
            type: 'pie',
            labelAttribute: 'fund_sources',
            valueAttribute: 'lead_time_prcmt',
            grouped: true,
            sumValue: true,
            name: 'Tender Duration by Fund Sources'
          },
          {
            type: 'pie',
            labelAttribute: 'prcmt_type_name',
            valueAttribute: 'lead_time_prcmt',
            grouped: true,
            sumValue: true,
            name: 'Tender Duration by Procurement Type'
          }
        ]
      }
    ]
  },
  {
    label: 'Cost Saving',
    to: '/dashboard/cost_saving',
    exact: true,
    entries: [
      {
        title: 'Sample Pie Chart',
        endpoint: '/dashboard/prcmts/cost_saving_per_item',
        displays: [
          {
            type: 'pie',
            labelAttribute: 'prcmt_type_name',
            valueAttribute: 'cost_saving',
            grouped: true,
            sumValue: true,
            name: 'Cost Saving by Procurement Type'
          },
          {
            type: 'pie',
            labelAttribute: 'purch_group_name',
            valueAttribute: 'cost_saving',
            grouped: true,
            sumValue: true,
            name: 'Cost Saving by Purchasing Group'
          }
        ],
        additionalParameters: {
          filter_params: JSON.stringify({
            currency_code_eq: 'USD'
          })
        }
      }
    ]
  },
  {
    label: 'Number of Tender Per Period',
    to: '/dashboard/number_of_tender_per_period',
    exact: true,
    entries: [
      {
        title: 'Sample Pie Chart',
        endpoint: '/dashboard/prcmts/number_of_tender_per_period',
        displays: [
          {
            type: 'pie'
          }
        ]
      }
    ]
  },
  {
    label: 'Spending Amount Pareto',
    to: '/dashboard/spending_amount_pareto',
    exact: true,
    entries: [
      {
        title: 'Sample Pie Chart',
        endpoint: '/dashboard/prcmts/spending_amount_pareto',
        displays: [
          {
            type: 'pie'
          }
        ]
      }
    ]
  },
  {
    label: 'Spending Amount PG',
    to: '/dashboard/spending_amount_po',
    exact: true,
    entries: [
      {
        title: 'Sample Pie Chart',
        endpoint: '/dashboard/prcmts/spending_amount_po',
        displays: [
          {
            type: 'pie'
          }
        ]
      }
    ]
  },
  {
    label: 'Vendor Status',
    to: '/dashboard/vendor_status',
    exact: true,
    entries: [
      {
        title: 'Sample Pie Chart',
        endpoint: '/dashboard/vendors/vendor_applicant_candidate',
        displays: [
          {
            type: 'pie'
          }
        ]
      }
    ]
  },
  {
    label: 'Progress Tender',
    to: '/dashboard/progress_tender',
    exact: true,
    entries: [
      {
        title: 'Sample Pie Chart',
        endpoint: '/dashboard/prcmts/prcmt_progress',
        displays: [
          {
            type: 'pie'
          }
        ]
      }
    ]
  }
]

export default dashboardContents
