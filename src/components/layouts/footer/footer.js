import React, { PureComponent } from 'react'
import { BRAND, PRODUCT_LINK } from '@/constants/app-config'

class Footer extends PureComponent {
  year = new Date().getFullYear()
  render () {
    return (
      <section className='app-footer'>
        <div className='container-fluid'>
          <span className='float-left'>
            <span>
              {`Copyright © `}
              <a
                className='brand'
                target='_blank'
                rel='noopener noreferrer'
                href={PRODUCT_LINK}
              >
                {BRAND}
              </a>
              {` ${this.year}`}
            </span>
          </span>
          <span className='float-right'>
            <span>
              {`Built with Love `}
              <i className='material-icons'>favorite_border</i>
            </span>
          </span>
        </div>
      </section>
    )
  }
}

export default Footer
